import { View, Text, ScrollView,Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import { styles } from "../styles/Manager/managerAttendance.styles";
import { useRouter } from "expo-router";


export default function ManagerAttendance() {

    const router = useRouter();

    const ATTENDANCE_DATA = [
  {
    date: "24 Feb 2026",
    checkInTime: "09:12 AM",
    present: 600,
    absent: 50,
    halfDay: 20,
    workers: [
      { name: "Raj Kumar", role: "Mason", status: "Present", wage: 400 },
      { name: "Ramesh Rao", role: "Carpenter", status: "Absent", wage: 350 },
      { name: "Arpit Singh", role: "Plumber", status: "Half Day", wage: 400 },
    ],
  },
];


const ATTENDANCE_HISTORY = [
  {
    date: "24 Feb 2026",
    isToday: true,
    present: 600,
    absent: 50,
    halfDay: 20,
    workers: [
      { name: "Raj Kumar", role: "Mason", status: "Present" },
      { name: "Ramesh Rao", role: "Helper", status: "Absent" },
    ],
  },
  {
    date: "23 Feb 2026",
    present: 580,
    absent: 70,
    halfDay: 15,
  },
  {
    date: "22 Feb 2026",
    present: 580,
    absent: 60,
    halfDay: 10,
  },
    {
    date: "21 Feb 2026",
    present: 560,
    absent: 90,
    halfDay: 20,
  },
    {
    date: "20 Feb 2026",
    present: 450,
    absent: 90,
    halfDay: 15,
  },
];


  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
            <Pressable onPress={() => router.back()}>
                          <Ionicons name="arrow-back" size={22} color="#000" />
                      </Pressable>
          <Text style={styles.title}>Attendance</Text>
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>650</Text>
            <Text style={styles.summaryLabel}>Total</Text>
          </View>

          <View style={styles.summaryCardGreen}>
            <Text style={styles.summaryValue}>600</Text>
            <Text style={styles.summaryLabel}>Present</Text>
          </View>

          <View style={styles.summaryCardRed}>
            <Text style={styles.summaryValue}>50</Text>
            <Text style={styles.summaryLabel}>Absent</Text>
          </View>
        </View>

        {/* Attendance Today */}
        <Text style={styles.sectionTitle}>Today's Attendance Records</Text>
        <View style={styles.dayCard}>
          <View style={styles.dayHeader}>
            <Text style={styles.date}>24 Feb 2026</Text>
            <Text style={styles.checkin}>Check-in: 09:12 AM</Text>
          </View>

          <View style={styles.countRow}>
            <Text>Present: 600</Text>
            <Text>Absent: 50</Text>
            <Text>Half Day: 20</Text>
          </View>

          {/* Worker List */}
          <View style={styles.workerRow}>
            <Text style={styles.workerName}>Raj Kumar</Text>
            <Text style={styles.workerRole}>Mason</Text>
            <Text style={styles.present}>Present</Text>
          </View>

          <View style={styles.workerRow}>
            <Text style={styles.workerName}>Ramesh Rao</Text>
            <Text style={styles.workerRole}>Carpenter</Text>
            <Text style={styles.absent}>Absent</Text>
          </View>
        </View>


            {/* perivous attendance */}
            <Text style={styles.sectionTitle}>Previous Attendance</Text>

            {ATTENDANCE_HISTORY.filter(d => !d.isToday).map((day, index) => (
            <View key={index} style={styles.previousCard}>
                <View style={styles.previousHeader}>
                <Text style={styles.previousDate}>{day.date}</Text>
                <Ionicons name="chevron-forward" size={18} color="#777" />
                </View>

                <View style={styles.previousCounts}>
                <Text style={styles.present}>Present: {day.present}</Text>
                <Text style={styles.absent}>Absent: {day.absent}</Text>
                <Text style={styles.halfDay}>Half Day: {day.halfDay}</Text>
                </View>
            </View>
            ))}


      </ScrollView>
    </Screen>
  );
}
