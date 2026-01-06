import { View, Text, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Screen from "../../components/Screen";
import { styles } from "../../styles/Manager/newProject.styles";

export default function NewProjectScreen() {
  const router = useRouter();

  return (
    <Screen>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text style={styles.headerTitle}>New Project</Text>
      </View>

      {/* Form Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Project Name :</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Location :</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Date :</Text>
        <TextInput style={styles.input} placeholder="DD / MM / YYYY" />

        <Text style={styles.label}>Assign site engineer :</Text>
        <Pressable style={styles.dropdown}>
          <Text style={styles.dropdownText}>Select engineer</Text>
          <Ionicons name="chevron-down" size={18} />
        </Pressable>

        <Text style={styles.label}>Remarks :</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
        />
      </View>

      {/* Save Button */}
      <Pressable style={styles.saveBtn}>
        <Text style={styles.saveText}>SAVE</Text>
      </Pressable>
    </Screen>
  );
}
