import { View, Text, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/dprForm.styles";


type Props = {
  onSubmit?: (data: any) => void;
};

export default function DPRForm({ onSubmit }: Props) {
  return (
    <>
    <View style={styles.formCard}>
      {/* Date */}
      <Text style={styles.label}>Date</Text>
      <Pressable style={styles.input}>
        <Text style={styles.placeholder}>Select date</Text>
        <Ionicons name="calendar-outline" size={18} />
      </Pressable>

      {/* Category */}
      <Text style={styles.label}>Work Category</Text>
      <Pressable style={styles.input}>
        <Text style={styles.placeholder}>Select category</Text>
        <Ionicons name="chevron-down" size={18} />
      </Pressable>

      {/* Description */}
      <Text style={styles.label}>Work Description</Text>
      <TextInput
        placeholder="Describe today's work"
        multiline
        style={styles.textArea}
      />

      {/* Photos */}
      <Text style={styles.label}>Photos</Text>
      <Pressable style={styles.photoBox}>
        <Ionicons name="camera-outline" size={40} />
      </Pressable>

      {/* Save */}
      
    </View>
    <Pressable style={styles.saveBtn} onPress={onSubmit}>
        <Text style={styles.saveText}>SAVE</Text>
      </Pressable>
    </>
    
  );
}
