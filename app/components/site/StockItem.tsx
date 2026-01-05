import { View, Text } from "react-native";
import { styles } from "../../styles/Site/stock.styles";

type Props = {
  material: string;
  qty: string;
  date: string;
  status: "Pending" | "Approved";
};

export default function StockItem({ material, qty, date, status }: Props) {
  return (
    <View style={styles.historyCard}>
      <View>
        <Text style={styles.materialName}>{material}</Text>
        <Text>Qty: {qty}</Text>
        <Text>Required: {date}</Text>
      </View>

      <Text
        style={[
          styles.status,
          status === "Approved" ? styles.approved : styles.pending,
        ]}
      >
        {status}
      </Text>
    </View>
  );
}
