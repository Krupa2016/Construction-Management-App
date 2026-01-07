import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import { styles } from "../styles/Site/home.styles";
import { useRouter } from "expo-router";
import SiteCard from "../components/site/SiteCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/api";

export default function Home() {
  const router = useRouter();
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("API error:", err));
  }, []);

useEffect(() => {
  console.log("API URL:", API_URL);

  fetch(`${API_URL}/projects`)
    .then(res => {
      console.log("Response status:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("Projects from API:", data);
      setProjects(data);
    })
    .catch(err => console.error("Fetch error:", err));
}, []);


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

        {/* Site Cards (FROM BACKEND) */}
        {projects.map((site) => (
          <SiteCard
            key={site._id}   // 🔑 Mongo ObjectId
            name={site.name}
            location={site.location}
            status={site.status}
            progress={site.progress}
            onPress={() => {
              router.push({
                pathname: "/project/[id]",
                params: { id: site._id }, // 🔑 PASS REAL ObjectId
              });
            }}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}
