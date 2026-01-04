import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import { styles } from "../styles/home.styles";
import { useRouter } from "expo-router";
import SiteCard from "../components/SiteCard";
import { PROJECTS } from "../data/project";


export default function Home() {
  const router = useRouter();
const SITES = PROJECTS;

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appName}>SiteSync</Text>

          <View style={styles.welcomeRow}>
            <Ionicons name="construct-outline" size={36} color="#F5C400" />
            <Text style={styles.welcomeText}>Welcome, Amit</Text>
          </View>
        </View>

        {/* Select Site */}
        <Text style={styles.sectionTitle}>Select Site</Text>

        {/* Site Cards */}
        {SITES.map((site) => (
          <SiteCard
            key={site.id}
            name={site.name}
            location={site.location}
            status={site.status}
            progress={site.progress}
            onPress={() => {
             router.push({
                pathname: "/project/[id]",
                params: { id: site.id.toString() },
                });


            }}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}
