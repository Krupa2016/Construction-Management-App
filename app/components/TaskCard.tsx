import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/taskCard.styles";

type TaskCardProps = {
  title: string;
  startDate: string;
  endDate: string;
};

export default function TaskCard({ title, startDate, endDate }: TaskCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Ionicons name="calendar-outline" size={22} color="#444" />
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>Start Date : {startDate}</Text>
        <Text style={styles.date}>Expected End Date : {endDate}</Text>
      </View>
    </View>
  );
}
