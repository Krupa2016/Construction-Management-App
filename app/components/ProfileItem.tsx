import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/profile.styles";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  badge?: string;
};

export default function ProfileItem({ icon, label, badge }: Props) {
  return (
    <View style={styles.itemRow}>
      <View style={styles.itemLeft}>
        <Ionicons name={icon} size={18} color="#555" />
        <Text style={styles.itemText}>{label}</Text>
      </View>

      <View style={styles.itemRight}>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>
    </View>
  );
}
