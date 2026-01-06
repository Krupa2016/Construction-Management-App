import { View, Text, ScrollView, Pressable,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import Screen from "../../components/Screen";
import { styles as siteStyles } from "../../styles/Site/project.styles";
import { styles as managerStyles } from "../../styles/Manager/managerProject.styles";
import { styles as ownerStyles } from "../../styles/Owner/OwnerProject.styles";
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
      <ScrollView contentContainerStyle={ownerStyles.container}>
        {/* Header */}
        <View style={siteStyles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} />
          </Pressable>

          <View>
            <Text style={siteStyles.projectName}>{project.name}</Text>
            <View style={siteStyles.locationRow}>
              <Ionicons name="location-outline" size={14} color="#666" />
              <Text style={siteStyles.location}>{project.location}</Text>
            </View>
          </View>
        </View>

        {/* Project Status */}
        <View style={siteStyles.card}>
          <Text style={siteStyles.cardTitle}>Project Status</Text>

          <View style={siteStyles.progressRow}>
            <Text style={siteStyles.smallText}>Work Completed</Text>
            <Text style={siteStyles.percent}>{project.progress}%</Text>
          </View>

          <View style={siteStyles.progressBg}>
            <View
              style={[
                siteStyles.progressFill,
                { width: `${project.progress}%` },
              ]}
            />
          </View>

          <View style={siteStyles.statsRow}>
            <View style={siteStyles.statBox}>
              <Text style={siteStyles.statValue}>{project.tasks}</Text>
              <Text style={siteStyles.statLabel}>Tasks</Text>
            </View>

            <View>
              <Text style={siteStyles.statLabel}>Start Date</Text>
              <Text style={siteStyles.statValueSmall}>
                {project.startDate}
              </Text>
            </View>

            <View>
              <Text style={siteStyles.statLabel}>Planned End</Text>
              <Text style={siteStyles.statValueSmall}>
                {project.endDate}
              </Text>
            </View>
          </View>
          <Pressable style={siteStyles.linkRow}>
            <Ionicons name="home-outline" size={18} />
            <Text style={siteStyles.linkText}>View Site Plan</Text>
          </Pressable>

                        {/* Offline Sync Status */}
              <View style={ownerStyles.syncCard}>
                <View style={ownerStyles.syncHeader}>
                  <Ionicons name="sync-outline" size={20} color="#1E3A8A" />
                  <Text style={ownerStyles.syncTitle}>Offline Sync Status</Text>
                </View>

                <View style={ownerStyles.syncRow}>
                  <View style={ownerStyles.syncItem}>
                    <Text style={ownerStyles.syncValue}>2 hrs ago</Text>
                    <Text style={ownerStyles.syncLabel}>Last Synced</Text>
                  </View>

                  <View style={ownerStyles.syncDivider} />

                  <View style={ownerStyles.syncItem}>
                    <Text style={ownerStyles.syncValue}>3</Text>
                    <Text style={ownerStyles.syncLabel}>Pending Updates</Text>
                  </View>
                </View>

                <Text style={ownerStyles.syncNote}>
                  Data will automatically sync when internet is available
                </Text>
              </View>


        </View>










        {/* Overview */}
        <Text style={managerStyles.sectionTitle}>Project Overview</Text>

        <View style={managerStyles.statsGrid}>

                    {/* Work Completed */}
                    <View style={managerStyles.statCard}>
                        <Ionicons name="pie-chart-outline" size={26} color="#4F46E5" />
                        <Text style={managerStyles.statValue}>{project.progress}%</Text>
                        <Text style={managerStyles.statLabel}>Work Completed</Text>
                    </View>

                    {/* Assigned Workers */}
                    <View style={managerStyles.statCard}>
                        <Ionicons name="people-outline" size={26} color="#111827" />
                        <Text style={managerStyles.statValue}>{project.workers}</Text>
                        <Text style={managerStyles.statLabel}>Assigned Workers</Text>
                    </View>

                    {/* Materials Used */}
                    <View style={managerStyles.statCard}>
                        <Ionicons name="cart-outline" size={26} color="#F59E0B" />
                        <Text style={managerStyles.statValue}>₹ {project.materialCost}L</Text>
                        <Text style={managerStyles.statLabel}>Materials Used</Text>
                    </View>

                    {/* Pending Tasks */}
                    <View style={managerStyles.statCard}>
                        <Ionicons name="refresh-outline" size={26} color="#F97316" />
                        <Text style={managerStyles.statValue}>{project.pendingTasks}</Text>
                        <Text style={managerStyles.statLabel}>Pending Tasks</Text>
                    </View>

         </View>



                  {/* Project Risks */}
                  <View style={ownerStyles.riskCard}>
                    <View style={ownerStyles.riskHeader}>
                      <Ionicons name="warning-outline" size={18} color="#B45309" />
                      <Text style={ownerStyles.riskTitle}>Project Risks</Text>
                    </View>

                    <View style={ownerStyles.riskItem}>
                      <Ionicons name="cube-outline" size={16} color="#92400E" />
                      <Text style={ownerStyles.riskText}>
                        Cement stock low (approx. 3 days remaining)
                      </Text>
                    </View>

                    <View style={ownerStyles.riskItem}>
                      <Ionicons name="people-outline" size={16} color="#92400E" />
                      <Text style={ownerStyles.riskText}>
                        Labour efficiency dropped by 8% this week
                      </Text>
                    </View>

                    <View style={ownerStyles.riskItem}>
                      <Ionicons name="time-outline" size={16} color="#92400E" />
                      <Text style={ownerStyles.riskText}>
                        Finishing phase delayed by 5 days
                      </Text>
                    </View>
                  </View>







            <View style={ownerStyles.imagewrapper }>
 
                     <Image
                       source={require("../../../assets/images/budget_analysis.png")}
                       style={{  height: 300, width: "89%", marginLeft: -60,marginTop: -40,}}
                       resizeMode="contain"
                     />

                     {/* Deviation from Plan */}
                  <View style={ownerStyles.deviationCard}>
                    <View style={ownerStyles.deviationHeader}>
                      <Ionicons name="trending-down-outline" size={20} color="#7C2D12" />
                      <Text style={ownerStyles.deviationTitle}>Deviation from Plan</Text>
                    </View>

                    <View style={ownerStyles.deviationRow}>
                      <View style={ownerStyles.deviationItem}>
                        <Text style={ownerStyles.deviationValue}>+4 days</Text>
                        <Text style={ownerStyles.deviationLabel}>Schedule Delay</Text>
                      </View>

                      <View style={ownerStyles.deviationDivider} />

                      <View style={ownerStyles.deviationItem}>
                        <Text style={ownerStyles.deviationValue}>+₹1.2L</Text>
                        <Text style={ownerStyles.deviationLabel}>Over Budget</Text>
                      </View>
                    </View>
                  </View>
            </View>
                  



          <View style={ownerStyles.imagewrapper}>
                     <Image
                       source={require("../../../assets/images/labour_usage.png")}
                       style={{  height: 300, width: "89%", marginLeft: -60,}}
                       resizeMode="contain"
                     />
           </View>



           <View style={ownerStyles.imagewrapper}>
                     <Image
                       source={require("../../../assets/images/material_used.png")}
                        style={{  height: 300, width: "89%", marginLeft: -60,}}
                       resizeMode="contain"
                     />
                   </View>




      </ScrollView>
    </Screen>
  );
}
