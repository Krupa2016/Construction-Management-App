import { View, Text, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import Screen from "../../components/Screen";
import { PROJECTS } from "../../data/project";
import { styles } from "../../styles/Manager/managerProject.styles";

export default function ManagerProjectPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

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
      <ScrollView contentContainerStyle={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} />
          </Pressable>
          <Text style={styles.title}>{project.name}</Text>
        </View>

        {/* Overview */}
        <Text style={styles.sectionTitle}>Project Overview</Text>

        <View style={styles.statsGrid}>

                    {/* Work Completed */}
                    <View style={styles.statCard}>
                        <Ionicons name="pie-chart-outline" size={26} color="#4F46E5" />
                        <Text style={styles.statValue}>{project.progress}%</Text>
                        <Text style={styles.statLabel}>Work Completed</Text>
                    </View>

                    {/* Assigned Workers */}
                    <View style={styles.statCard}>
                        <Ionicons name="people-outline" size={26} color="#111827" />
                        <Text style={styles.statValue}>{project.workers}</Text>
                        <Text style={styles.statLabel}>Assigned Workers</Text>
                    </View>

                    {/* Materials Used */}
                    <View style={styles.statCard}>
                        <Ionicons name="cart-outline" size={26} color="#F59E0B" />
                        <Text style={styles.statValue}>₹ {project.materialCost}L</Text>
                        <Text style={styles.statLabel}>Materials Used</Text>
                    </View>

                    {/* Pending Tasks */}
                    <View style={styles.statCard}>
                        <Ionicons name="refresh-outline" size={26} color="#F97316" />
                        <Text style={styles.statValue}>{project.pendingTasks}</Text>
                        <Text style={styles.statLabel}>Pending Tasks</Text>
                    </View>

                    </View>


        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <Pressable
          style={styles.actionBtn}
          onPress={() =>
            router.push(`/(manager)/dpr-approval?id=${project.id}`)
          }
        >
          <Ionicons name="document-text-outline" size={20} />
          <Text style={styles.actionText}>Approve DPR</Text>
        </Pressable>

        <Pressable
          style={styles.actionBtn}
          onPress={() =>
            router.push(`/(manager)/project/material_approval?id=${project.id}`)
          }
        >
          <Ionicons name="cart-outline" size={20} />
          <Text style={styles.actionText}>Approve Material</Text>
        </Pressable>




        <Pressable
          style={styles.actionBtn}
          onPress={() =>
            router.push(`/(manager)/invoice?id=${project.id}`)
          }
        >
          <Ionicons name="receipt-outline" size={20} />
          <Text style={styles.actionText}>Generate Invoice</Text>
        </Pressable>

      </ScrollView>
    </Screen>
  );
}
