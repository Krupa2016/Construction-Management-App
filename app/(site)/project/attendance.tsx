import { View, Text, ScrollView, Pressable,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import Screen from "../../components/Screen";
import { styles } from "../../styles/Site/attendance.styles";
import { Modal, TextInput } from "react-native";
import { useState } from "react";


export default function Attendance() {
  const router = useRouter();
  const [tempModal, setTempModal] = useState(false);
const [tempName, setTempName] = useState("");
const [tempRole, setTempRole] = useState("");
const [tempWage, setTempWage] = useState("");

  const { id } = useLocalSearchParams();
  const WORKERS = [
  {
    id: 1,
    name: "Raj Kumar",
    role: "Mason",
    wage: 400,
  },
  {
    id: 2,
    name: "Ramesh Rao",
    role: "Carpenter",
    wage: 400,
  },
  {
    id: 3,
    name: "Arpit Singh",
    role: "Plumber",
    wage: 450,
  },
];


  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} />
          </Pressable>
          <Text style={styles.title}>Attendance</Text>
        </View>

        {/* Status */}
        <View style={styles.statusRow}>
          <Text style={styles.offlineBadge}>OFFLINE</Text>
          <Text style={styles.siteName}>Lotus Residency</Text>
        </View>
        
            <View style={styles.mapBox}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/ed/49/a3/ed49a36e188a26dddc546535857cd505.jpg",
                }}
                style={styles.mapImage}
                resizeMode="cover"
              />
            </View>

        <Pressable style={styles.checkInBtn}>
          <Text style={styles.checkInText}>CHECK IN</Text>
        </Pressable>

        {/* Workers List */}
                <Text style={styles.sectionTitle}>Mark Attendance</Text>

                    {WORKERS.map((worker) => (
                <View key={worker.id} style={styles.workerCard}>
                    
                    {/* Name + Role */}
                    <View style={styles.workerHeader}>
                    <Text style={styles.workerName}>{worker.name}</Text>
                    <Text style={styles.workerRole}>{worker.role}</Text>
                    </View>

                    {/* Wage */}
                    <Text style={styles.wageText}>Daily Wage: ₹{worker.wage}</Text>

                    {/* Attendance Buttons */}
                    <View style={styles.attendanceRow}>
                    <Pressable style={styles.present}>
                        <Text>Present</Text>
                    </Pressable>

                    <Pressable style={styles.absent}>
                        <Text>Absent</Text>
                    </Pressable>

                    <Pressable style={styles.half}>
                        <Text>Half Day</Text>
                    </Pressable>
                    </View>
                </View>
                ))}


        {/* Summary */}
        <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Workers Summary</Text>

            <View style={styles.summaryCard}>
                <View style={styles.summaryRow}>
                <Text style={styles.summaryRole}>👷 Masons</Text>
                <Text style={styles.summaryCount}>80 / 100</Text>
                </View>

                <View style={styles.summaryRow}>
                <Text style={styles.summaryRole}>🪚 Carpenters</Text>
                <Text style={styles.summaryCount}>80 / 100</Text>
                </View>

                <View style={styles.summaryRow}>
                <Text style={styles.summaryRole}>🚰 Plumbers</Text>
                <Text style={styles.summaryCount}>180 / 250</Text>
                </View>

                <View style={styles.divider} />

                <Text style={styles.totalText}>
                Total Expected: <Text style={styles.bold}>650</Text>
                </Text>
                <Text style={styles.presentText}>
                Present Today: <Text style={styles.bold}>600</Text>
                </Text>

                <Pressable style={styles.addTempBtn} onPress={() => setTempModal(true)}>
                        <Text style={styles.addTempText}>+ Add Temporary Worker</Text>
                    </Pressable>
                </View>

                    
            </View>

                <Modal transparent animationType="fade" visible={tempModal}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalBox}>
                    <Text style={styles.modalTitle}>Add Temporary Worker</Text>

                    <TextInput
                        placeholder="Worker Name"
                        value={tempName}
                        onChangeText={setTempName}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Category (Mason / Carpenter)"
                        value={tempRole}
                        onChangeText={setTempRole}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Daily Wage"
                        keyboardType="numeric"
                        value={tempWage}
                        onChangeText={setTempWage}
                        style={styles.input}
                    />

                    <View style={styles.modalActions}>
                        <Pressable onPress={() => setTempModal(false)}>
                        <Text style={styles.cancel}>Cancel</Text>
                        </Pressable>

                        <Pressable style={styles.saveBtn}>
                        <Text style={styles.saveText}>Add</Text>
                        </Pressable>
                    </View>
                    </View>
                </View>
                </Modal>


        <Pressable style={styles.saveBtn}>
          <Text style={styles.saveText}>SAVE</Text>
        </Pressable>

      </ScrollView>
    </Screen>
  );
}
