import { View, Text } from "react-native";
import { styles } from "../../styles/Site/stock.styles";

type Props = {
  name: string;
  available: string;
  required: string;
};

export default function StockSummaryCard({ name, available, required }: Props) {
  return (
    <View style={styles.summaryCard}>
      <Text style={styles.materialName}>{name}</Text>
      <Text>Available: {available}</Text>
      <Text style={styles.required}>Required: {required}</Text>
    </View>
  );
}
