import { View, Text, ScrollView, Pressable} from "react-native";
import Screen from "../components/Screen";
import TaskCard from "../components/site/TaskCard";
import { styles } from "../styles/Site/tasks.styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";  


const TASKS = [
  {
    id: 1,
    title: "Plumbing",
    startDate: "21 April 2025",
    endDate: "12 May 2025",
  },
  {
    id: 2,
    title: "Plaster",
    startDate: "18 June 2025",
    endDate: "12 July 2025",
  },
  {
    id: 3,
    title: "Install pipes",
    startDate: "27 August 2025",
    endDate: "10 September 2025",
  },
  {
    id: 4,
    title: "Waterproofing",
     startDate: "12 August 2025",
    endDate: "29 September 2025",
  },
 {
    id: 5,
    title: "Plumbing",
    startDate: "21 April 2025",
    endDate: "12 May 2025",
  },
  {
    id: 6,
    title: "Plaster",
    startDate: "21 April 2025",
    endDate: "12 May 2025",
  },
  

];

export default function Tasks() {
  const router = useRouter();
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
          <View style={styles.header}>
          <Pressable onPress={() => router.back()}> 
              <Ionicons name="arrow-back" size={22} />
              </Pressable>
          <Text style={styles.title}>Tasks</Text>
        </View>       
    

     
        <Text style={styles.section}>Upcoming Tasks</Text>

        {TASKS.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            startDate={task.startDate}
            endDate={task.endDate}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}
