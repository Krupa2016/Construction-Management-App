import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { PROJECTS } from "../data/project";
import { Ionicons } from "@expo/vector-icons";

export default function ProjectScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <Screen>
        <Text>Project not found</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.projectName}>{project.name}</Text>

        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={14} color="#666" />
          <Text style={styles.location}>{project.location}</Text>
        </View>

        {/* Status */}
        <View
          style={[
            styles.statusBadge,
            project.status === "On Track" && styles.onTrack,
            project.status === "Delayed" && styles.delayed,
            project.status === "Ahead" && styles.ahead,
          ]}
        >
          <Text style={styles.statusText}>{project.status}</Text>
        </View>

        {/* Progress */}
        <View style={styles.progressRow}>
          <Text style={styles.progressLabel}>Progress</Text>
          <Text style={styles.progressPercent}>{project.progress}%</Text>
        </View>

        <View style={styles.progressBg}>
          <View
            style={[
              styles.progressFill,
              { width: `${project.progress}%` },
            ]}
          />
        </View>

        {/* Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actionsGrid}>
          <ActionCard icon="clipboard-outline" label="Tasks" />
          <ActionCard icon="people-outline" label="Attendance" />
          <ActionCard icon="cube-outline" label="Stock" />
          <ActionCard icon="warning-outline" label="Incidents" />
        </View>
      </View>
    </Screen>
  );
}

function ActionCard({ icon, label }: { icon: any; label: string }) {
  return (
    <View style={styles.actionCard}>
      <Ionicons name={icon} size={26} color="#7b61ff" />
      <Text style={styles.actionText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  projectName: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 8,
  },
  location: {
    fontSize: 13,
    color: "#666",
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    marginBottom: 14,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  onTrack: {
    backgroundColor: "#2ecc71",
  },
  delayed: {
    backgroundColor: "#e74c3c",
  },
  ahead: {
    backgroundColor: "#3498db",
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  progressLabel: {
    fontSize: 13,
    color: "#666",
  },
  progressPercent: {
    fontSize: 13,
    fontWeight: "600",
  },
  progressBg: {
    height: 8,
    backgroundColor: "#eee",
    borderRadius: 6,
    marginBottom: 20,
  },
  progressFill: {
    height: 8,
    backgroundColor: "#7b61ff",
    borderRadius: 6,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },

  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  actionCard: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    elevation: 2,
  },
  actionText: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "500",
  },
});
