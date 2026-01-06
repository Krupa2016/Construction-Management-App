import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import Screen from "../../components/Screen";
import { styles } from "../../styles/Manager/materialApproval.styles";

const PENDING = [
  {
    id: 1,
    material: "Cement",
    qty: "100 bags",
    cost: "20,000",
    requestedBy: "Amit",
    date: "10 Jan",
  },
  {
    id: 2,
    material: "Steel",
    qty: "2 Tonnes",
    cost: "40,000",
    requestedBy: "Amit",
    date: "20 Jan",
  },
  {
    id: 3,
    material: "Sand",
    qty: "10 cubic meters",
    cost: "10,000",
    requestedBy: "Amit",
    date: "10 Jan",
  },
];

const APPROVED = [
  {
    id: 4,
    material: "Bricks",
    qty: "5000 pieces",
    requestedBy: "Amit",
    date: "10 Jan",
  },
];

export default function MaterialApproval() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} />
          </Pressable>
          <Text style={styles.title}>Material Approval</Text>
        </View>

        {/* Pending */}
        <Text style={styles.section}>
          <Ionicons name="time-outline" size={16} /> Pending Requests
        </Text>

        {PENDING.map(item => (
          <View key={item.id} style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.material}>{item.material}</Text>
              <Text style={styles.cost}>Cost : {item.cost}</Text>
            </View>

            <Text style={styles.meta}>Qty: {item.qty}</Text>
            <Text style={styles.meta}>Requested by: {item.requestedBy}</Text>
            <Text style={styles.meta}>Required: {item.date}</Text>

            <View style={styles.actionRow}>
              <Pressable style={styles.approve}>
                <Text style={styles.btnText}>Approve</Text>
              </Pressable>
              <Pressable style={styles.reject}>
                <Text style={styles.btnText}>Reject</Text>
              </Pressable>
            </View>
          </View>
        ))}

        {/* Approved */}
        <Text style={styles.section}>Approved Requests</Text>

        {APPROVED.map(item => (
          <View key={item.id} style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.material}>{item.material}</Text>
              <View style={styles.approvedBadge}>
                <Text style={styles.badgeText}>Approved</Text>
              </View>
            </View>

            <Text style={styles.meta}>Qty: {item.qty}</Text>
            <Text style={styles.meta}>Requested by: {item.requestedBy}</Text>
            <Text style={styles.meta}>Required: {item.date}</Text>
          </View>
        ))}

      </ScrollView>
    </Screen>
  );
}
