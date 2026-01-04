import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import StockRequestCard from "../components/Stock/StockRequestCard";
import StockItem from "../components/Stock/StockItem";
import StockSummaryCard from "../components/Stock/StockSummaryCard";
import { styles } from "../styles/stock.styles";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Stock() {
  const CURRENT_STOCK = [
    { name: "Cement", available: "120 bags", required: "200 bags" },
    { name: "Steel", available: "8 tonnes", required: "10 tonnes" },
  ];

  const HISTORY = [
    {
      material: "Cement",
      qty: "100 bags",
      date: "10 Feb",
      status: "Pending",
    },
    {
      material: "Steel",
      qty: "10 tonnes",
      date: "10 Jan",
      status: "Approved",
    },
  ];

  const router = useRouter();

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}> 
              <Ionicons name="arrow-back" size={22} />
              </Pressable>
          <Text style={styles.title}>Material Request</Text>
        </View>       



        {/* Current Stock */}
        <Text style={styles.sectionTitle}>Current Stock</Text>
        {CURRENT_STOCK.map((item, index) => (
          <StockSummaryCard key={index} {...item} />
        ))}

        <Pressable style={styles.addNew}>
          <Ionicons name="add" size={18} />
          <Text>Add new</Text>
        </Pressable>

        {/* Request Form */}
        <StockRequestCard />

        {/* History */}
        <Text style={styles.sectionTitle}>History</Text>
        {HISTORY.map((item, index) => (
          <StockItem key={index} {...item} />
        ))}
      </ScrollView>
    </Screen>
  );
}
