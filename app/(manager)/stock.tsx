import { View, Text, ScrollView,Pressable,_ScrollView } from "react-native";
import Screen from "../components/Screen";
import StockSummaryCard from "../components/site/StockSummaryCard";
import { styles } from "../styles/Site/stock.styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function StockScreen() {
    const stockData = [
  {
    name: "Cement Bags",
    available: "120 bags",
    required: "30 bags",
  },
  {
    name: "Steel Rods",
    available: "80 rods",
    required: "20 rods",
  },
  {
    name: "Bricks",
    available: "5,000 pcs",
    required: "1,000 pcs",
  },
  {
    name: "Sand",
    available: "12 tons",
    required: "3 tons",
  },


  {
    name: "Binding Wire",
    available: "25 kg",
    required: "8 kg",
  },
  {
    name: "Plywood Sheets",
    available: "60 sheets",
    required: "20 sheets",
  },
  
];

const router = useRouter();

  return (
    <Screen>
    

      <View style={styles.container}>
        {/* Page Title */}
         {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}> 
              <Ionicons name="arrow-back" size={22} />
              </Pressable>
          <Text style={styles.title}>Current Stock</Text>
        </View>     

        {/* Stock List */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {stockData.map((item, index) => (
            <StockSummaryCard
              key={index}
              name={item.name}
              available={item.available}
              required={item.required}
            />
          ))}
        </ScrollView>
      </View>
    </Screen>
  );
}
