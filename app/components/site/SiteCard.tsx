import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/Site/siteCard.styles";


type SiteCardProps = {
  name: string;
  location: string;
  status: "On Track" | "Delayed" | "Ahead";
  progress: number;
  onPress?: () => void;
};

export default function SiteCard({
  name,
  location,
  status,
  progress,
  onPress,
}: SiteCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      {/* Header */}
      <View style={styles.cardHeader}>
        <Text style={styles.siteName}>{name}</Text>


        <View
          style={[
            styles.statusBadge,
            status === "On Track" && styles.onTrack,
            status === "Delayed" && styles.delayed,
            status === "Ahead" && styles.ahead,
          ]}
        >
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      {/* Location */}
      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={14} color="#888" />
        <Text style={styles.location}>{location}</Text>
      </View>

      {/* Progress */}
      <View style={styles.progressRow}>
        <Text style={styles.progressLabel}>Progress</Text>
        <Text style={styles.progressPercent}>{progress}%</Text>
      </View>

      <View style={styles.progressBg}>
        <View
          style={[
            styles.progressFill,
            { width: `${progress}%` },
          ]}
        />
      </View>
    </Pressable>
  );
}
