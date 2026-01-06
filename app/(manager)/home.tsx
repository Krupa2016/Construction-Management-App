import { View, Text, ScrollView, Pressable,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Screen from "../components/Screen";
import SiteCard from "../components/site/SiteCard";
import { PROJECTS } from "../data/project";
import { styles } from "../styles/Manager/managerHome.styles";

export default function ManagerHome() {
  const router = useRouter();

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appName}>SiteSync</Text>

          <View style={styles.welcomeRow}>
           <Image
                source={require("../../assets/images/manager.png")} // change path if needed
                style={styles.userAvatar}
                resizeMode="cover"
                />

            <Text style={styles.welcomeText}>Welcome, Rahul</Text>
          </View>
        </View>

        {/* Select Site */}
        <Text style={styles.sectionTitle}>Select Site</Text>

        {/* Project List */}
        {PROJECTS.map((project) => (
          <SiteCard
            key={project.id}
            name={project.name}
            location={project.location}
            status={project.status}
            progress={project.progress}
            onPress={() =>
              router.push(`/(manager)/project/${project.id}`)
            }
          />
        ))}

        {/* New Project */}
        <Pressable
          style={styles.newProject}
          onPress={() => router.push("/(manager)/project/new_project")}
        >
          <Ionicons name="add-circle-outline" size={22} />
          <Text style={styles.newProjectText}>New Project</Text>
        </Pressable>

      </ScrollView>
    </Screen>
  );
}
