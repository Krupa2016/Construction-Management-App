import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import Screen from "../../components/Screen";
import { styles } from "../../styles/project.styles";
import { PROJECTS } from "../../data/project";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  // 🔑 Find the project using ID
  const project = PROJECTS.find((p) => p.id === id);

  // Safety check
  if (!project) {
    return (
      <Screen>
        <Text>Project not found</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} />
          </Pressable>

          <View>
            <Text style={styles.projectName}>{project.name}</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={14} color="#666" />
              <Text style={styles.location}>{project.location}</Text>
            </View>
          </View>
        </View>

        {/* Project Status */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Project Status</Text>

          <View style={styles.progressRow}>
            <Text style={styles.smallText}>Work Completed</Text>
            <Text style={styles.percent}>{project.progress}%</Text>
          </View>

          <View style={styles.progressBg}>
            <View
              style={[
                styles.progressFill,
                { width: `${project.progress}%` },
              ]}
            />
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{project.tasks}</Text>
              <Text style={styles.statLabel}>Tasks</Text>
            </View>

            <View>
              <Text style={styles.statLabel}>Start Date</Text>
              <Text style={styles.statValueSmall}>
                {project.startDate}
              </Text>
            </View>

            <View>
              <Text style={styles.statLabel}>Planned End</Text>
              <Text style={styles.statValueSmall}>
                {project.endDate}
              </Text>
            </View>
          </View>
          <Pressable style={styles.linkRow}>
            <Ionicons name="home-outline" size={18} />
            <Text style={styles.linkText}>View Site Plan</Text>
          </Pressable>
        </View>




        {/* Daily Tasks */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Daily Tasks</Text>

          <View style={styles.taskActions}>
            <Pressable style={[styles.actionBox, styles.yellow]}  onPress={() => router.push(`/project/attendance?id=${id}`)}>
              <Ionicons name="list-outline" size={40} />
              <Text style={styles.actionText}>Mark Attendance</Text>
            </Pressable>



            <Pressable style={[styles.actionBox, styles.blue]}>
              <Ionicons name="document-text-outline" size={40} />
              <Text style={styles.actionText}>Add DPR</Text>
            </Pressable>
          </View>

           {/* Upcoming Tasks */}
          <Text style={styles.subTitle}>Upcoming Tasks</Text>

          {["Plumbing", "Plaster", "Waterproofing", "Install pipes"].map(
            (task, index) => (
              <View key={index} style={styles.taskRow}>
                <Ionicons name="checkmark-circle-outline" size={18} />
                <Text style={styles.taskText}>{task}</Text>
                <Text style={styles.taskDate}>24 Feb 2025</Text>
              </View>
            )
          )}

          {/* Low stock */}
          <View style={styles.alertBox}>
            <Ionicons name="warning-outline" size={18} color="#B45309" />
            <View>
              <Text style={styles.alertTitle}>Low Stock</Text>
              <Text style={styles.alertText}>Material: Cement</Text>
              <Text style={styles.alertSub}>
                Min: 20 bags • Available: 12
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </Screen>
  );
}
