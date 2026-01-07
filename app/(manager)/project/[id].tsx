import { View, Text, Pressable, ScrollView , Image} from "react-native";
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

        <View style={{ marginTop: 24 }}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

                <Pressable
                  style={styles.actionBtn}
                  onPress={() =>
                  router.push(`/(manager)/project/dpr_approval?id=${project.id}`)
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
                  router.push(`/(manager)/project/generate_invoice?id=${project.id}`)
                  }
                >
                  <Ionicons name="receipt-outline" size={20} />
                  <Text style={styles.actionText}>Generate Invoice</Text>
                </Pressable>

        </View>
      



                 {/* Manager Insights */}
                  <View style={styles.managerInsightCard}>
                    <Text style={styles.insightTitle}>Manager Insights</Text>

                    <View style={styles.insightRow}>
                      <Ionicons name="time-outline" size={16} color="#EA580C" />
                      <Text style={styles.insightText}>
                        Project running 4 days behind schedule
                      </Text>
                    </View>

                    <View style={styles.insightRow}>
                      <Ionicons name="cash-outline" size={16} color="#B45309" />
                      <Text style={styles.insightText}>
                        Material cost exceeded budget by ₹1.2L
                      </Text>
                    </View>

                    <View style={styles.insightRow}>
                      <Ionicons name="people-outline" size={16} color="#7C3AED" />
                      <Text style={styles.insightText}>
                        Labour efficiency dropped by 6% this week
                      </Text>
                    </View>
                  </View>







          <View style={styles.imagewrapper}>
            <Image
              source={require("../../../assets/images/labour_usage.png")}
              style={styles.userAvatar}
              resizeMode="contain"
            />

            
                        {/* Safety & Compliance */}
              <View style={styles.safetyCard}>
                <View style={styles.safetyHeader}>
                  <Ionicons name="shield-checkmark-outline" size={18} color="#065F46" />
                  <Text style={styles.safetyTitle}>Safety & Compliance</Text>
                </View>

                <View style={styles.safetyRow}>
                  <Ionicons name="checkmark-circle-outline" size={16} color="#16A34A" />
                  <Text style={styles.safetyText}>
                    42 days without safety incident
                  </Text>
                </View>

                <View style={styles.safetyRow}>
                  <Ionicons name="clipboard-outline" size={16} color="#16A34A" />
                  <Text style={styles.safetyText}>
                    Safety checks completed for this week
                  </Text>
                </View>

                <View style={styles.safetyRow}>
                  <Ionicons name="document-text-outline" size={16} color="#16A34A" />
                  <Text style={styles.safetyText}>
                    Insurance & labour compliance active
                  </Text>
                </View>
              </View>
          </View>


                    <View style={styles.imagewrapper}>
            <Image
              source={require("../../../assets/images/material_used.png")}
              style={styles.userAvatar}
              resizeMode="contain"
            />
            

             {/* Material Insights */}
              <View style={styles.mCard}>
                <Text style={styles.mTitle}>Material Insights</Text>

                <View style={styles.mRow}>
                  <Ionicons name="trending-up-outline" size={16} color="#DC2626" />
                  <Text style={styles.mText}>
                    Cement usage highest (↑ 18% this month)
                  </Text>
                </View>

                <View style={styles.mRow}>
                  <Ionicons name="warning-outline" size={16} color="#F59E0B" />
                  <Text style={styles.mText}>
                    Steel stock low – approx. 4 days remaining
                  </Text>
                </View>

                <View style={styles.mRow}>
                  <Ionicons name="cart-outline" size={16} color="#2563EB" />
                  <Text style={styles.mText}>
                    Recommended to reorder Cement & Steel this week
                  </Text>
                </View>
              </View>
          </View>


             
 



      </ScrollView>
    </Screen>
  );
}
