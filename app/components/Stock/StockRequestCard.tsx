import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "../../styles/stock.styles";

export default function StockRequestCard() {
  return (
    <View style={styles.requestCard}>
      <Text style={styles.label}>Material</Text>
      <TextInput style={styles.input} placeholder="Select material" />

      <Text style={styles.label}>Due date</Text>
      <TextInput style={styles.input} placeholder="Select date" />

      <Text style={styles.label}>Quantity</Text>
      <TextInput style={styles.input} placeholder="Enter quantity" />

      <Text style={styles.label}>Remarks</Text>
      <TextInput style={[styles.input, styles.textArea]} multiline />

      <Pressable style={styles.saveBtn}>
        <Text style={styles.saveText}>SAVE</Text>
      </Pressable>
    </View>
  );
}
