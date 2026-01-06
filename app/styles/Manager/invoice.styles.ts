import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
  },

  /* Invoice Card */
  invoiceCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    elevation: 3,
  },

  invoiceNo: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 6,
    marginBottom: 4,
  },

  company: {
    fontSize: 13,
    color: "#333",
    marginBottom: 2,
  },

  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },

  /* Table Header */
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
    marginTop: 30,
  },

  tableHeaderText: {
    fontSize: 13,
    fontWeight: "700",
  },

  /* Table Row */
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },

  itemName: {
    fontSize: 14,
    fontWeight: "600",
  },

  itemSub: {
    fontSize: 12,
    color: "#666",
  },

  amount: {
    fontSize: 14,
    fontWeight: "600",
  },

  /* Tax */
  taxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  taxLabel: {
    fontSize: 14,
    fontWeight: "600",
  },

  taxValue: {
    fontSize: 14,
  },

  /* Total */
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "800",
  },

  totalValue: {
    fontSize: 16,
    fontWeight: "800",
  },

  /* Buttons */
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  button: {
    flex: 1,
    backgroundColor: "#F5C400",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },

  buttonText: {
    fontWeight: "700",
  },
});
