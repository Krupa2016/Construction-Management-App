import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/Site/stock.styles";

type Props = {
  name: string;
  available: string;
  required: string;
};

export default function StockSummaryCard({
  name,
  available,
  required,
}: Props) {
  return (
    <View style={styles.summaryCard}>
      {/* Material name */}
      <View style={styles.titleRow}>
        <Ionicons name="cube-outline" size={18} color="#333" />
        <Text style={styles.materialName}>{name}</Text>
      </View>

      {/* Available */}
      <View style={styles.row}>
        <Text style={styles.text}>Available: {available}</Text>
      </View>

      {/* Required */}
      <View style={styles.row}>
        <Ionicons name="alert-circle-outline" size={16} color="#d9534f" />
        <Text style={styles.required}>Required: {required}</Text>
      </View>
    </View>
  );
}
