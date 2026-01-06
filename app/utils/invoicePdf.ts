import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

export async function generateInvoicePDF(
  project: any,
  items: { name: string; qty: string; rate: number }[]
) {
  const subtotal = items.reduce((sum, i) => sum + i.rate, 0);
  const gstRate = 0.09;
  const gstAmount = Math.round(subtotal * gstRate);
  const total = subtotal + gstAmount;

  const rows = items
    .map(
      (i) => `
      <tr>
        <td>${i.name}</td>
        <td>${i.qty}</td>
        <td style="text-align:right;">₹ ${i.rate.toLocaleString()}</td>
      </tr>`
    )
    .join("");

  const html = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          padding: 24px;
          color: #111;
        }

        .invoice-box {
          max-width: 800px;
          margin: auto;
          border: 1px solid #ddd;
          padding: 24px;
          border-radius: 8px;
        }

        h1 {
          text-align: center;
          margin-bottom: 4px;
        }

        .sub-title {
          text-align: center;
          color: #555;
          margin-bottom: 20px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .box {
          width: 48%;
          font-size: 14px;
        }

        .box strong {
          display: block;
          margin-bottom: 6px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        table th {
          background: #f4f4f4;
          text-align: left;
          padding: 10px;
          border: 1px solid #ddd;
        }

        table td {
          padding: 10px;
          border: 1px solid #ddd;
        }

        .right {
          text-align: right;
        }

        .total-row td {
          font-weight: bold;
          font-size: 16px;
        }

        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #666;
          text-align: center;
        }
      </style>
    </head>

    <body>
      <div class="invoice-box">
        <h1>GST INVOICE</h1>
        <div class="sub-title">Invoice No: ${Date.now()}</div>

        <div class="row">
          <div class="box">
            <strong>From</strong>
            Quasar Construction<br/>
            GSTIN: 63590BYGHG69<br/>
            Eastern Express Highway<br/>
            Mumbai - 400022
          </div>

          <div class="box">
            <strong>To</strong>
            ${project.name}<br/>
            ${project.location}<br/>
            Start Date: ${project.startDate}<br/>
            End Date: ${project.endDate}
          </div>
        </div>

        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th class="right">Amount</th>
          </tr>

          ${rows}

          <tr>
            <td colspan="2" class="right">Subtotal</td>
            <td class="right">₹ ${subtotal.toLocaleString()}</td>
          </tr>

          <tr>
            <td colspan="2" class="right">GST (9%)</td>
            <td class="right">₹ ${gstAmount.toLocaleString()}</td>
          </tr>

          <tr class="total-row">
            <td colspan="2" class="right">TOTAL</td>
            <td class="right">₹ ${total.toLocaleString()}</td>
          </tr>
        </table>

        <div class="footer">
          This is a system generated invoice. No signature required.
        </div>
      </div>
    </body>
  </html>
  `;

  const file = await Print.printToFileAsync({ html });
  await Sharing.shareAsync(file.uri);
}
