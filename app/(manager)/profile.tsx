import { View, Text, ScrollView,Pressable,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import ProfileItem from "../components/site/ProfileItem";
import { styles } from "../styles/Site/profile.styles";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Profile() {
    const router = useRouter();
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={22} color="#000" />
          </Pressable>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {/* User Card */}
        <View style={styles.userCard}>
                        <Image
                source={require("../../assets/images/manager.png")} // change path if needed
                style={styles.userAvatar}
                resizeMode="cover"
                />

          <View>
            <Text style={styles.userName}>Rahul Mehter</Text>
            <Text style={styles.userPhone}>+91 784367302</Text>
          </View>
        </View>

        {/* ACCOUNT */}
        <Text style={styles.sectionTitle}>ACCOUNT</Text>
        <View style={styles.sectionBox}>
          <ProfileItem icon="person-outline" label="My Profile" />
          <ProfileItem
            icon="notifications-outline"
            label="Notifications"
            badge="5"
          />
          <ProfileItem icon="settings-outline" label="Settings" />
        </View>

        {/* REPORTS & DATA */}
        <Text style={styles.sectionTitle}>REPORTS & DATA</Text>
        <View style={styles.sectionBox}>
          <ProfileItem icon="document-text-outline" label="My DPR History" />
          <ProfileItem icon="bar-chart-outline" label="Dashboard" />
          <ProfileItem icon="receipt-outline" label="Invoices" />
          <ProfileItem
            icon="sync-outline"
            label="Offline Sync Status"
            badge="3"
          />
        </View>

        {/* SUPPORT */}
        <Text style={styles.sectionTitle}>SUPPORT</Text>
        <View style={styles.sectionBox}>
          <ProfileItem icon="help-circle-outline" label="Help & Support" />
        </View>

        {/* Logout */}
        <View style={styles.logoutBox}>
          <Ionicons name="log-out-outline" size={18} color="red" />
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
