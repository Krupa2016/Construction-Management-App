import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await AsyncStorage.getItem("isLoggedIn");
      const savedRole = await AsyncStorage.getItem("userRole");

      setIsLoggedIn(loggedIn === "true");
      setRole(savedRole);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return <View />; // splash / loader later
  }

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  if (role === "manager") {
    return <Redirect href="/(manager)/home" />;
  }

  if (role === "site engineer") {
    return <Redirect href="/(site)/home" />;
  }

  if (role === "owner") {
    return <Redirect href="/(owner)/home" />;
  }

  // fallback safety
  return <Redirect href="/login" />;
}
