import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { styles } from "./styles/login.styles";
import Screen from "./components/Screen";

export default function LoginScreen() {
  // ---------- LOGIC ----------
  const router = useRouter();

  const [role, setRole] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!role) {
      alert("Please select your role");
      return;
    }

    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    // 🔗 Later: real auth (Firebase / API)
    console.log({ role, email, password });

    // Temporary success navigation
    router.replace("/(site)/home");
  };

  // ---------- UI ----------
  return (
    <Screen>
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.appTitle}>SiteSync</Text>

      {/* Heading */}
      <Text style={styles.heading}>Choose Your Role</Text>

      {/* Role Selector */}
      <View style={styles.roleRow}>
        {["Site Engineer", "Manager", "Owner"].map((item) => (
          <Pressable
            key={item}
            onPress={() => setRole(item)}
            style={[
              styles.roleCard,
              role === item && styles.roleSelected,
            ]}
          >
            <Text style={styles.roleText}>{item}</Text>
          </Pressable>
        ))}
      </View>

      {/* Email */}
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Forgot password */}
      <Pressable>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </Pressable>

      {/* Login Button */}
      <Pressable style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </Pressable>

      {/* OR Divider */}
      <View style={styles.orRow}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Bottom Actions */}
      <View style={styles.bottomRow}>
        <Pressable style={styles.secondaryBtn}>
          <Text>Sign Up</Text>
        </Pressable>

        <Pressable style={styles.secondaryBtn}>
          <Text>Request Demo</Text>
        </Pressable>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        By logging in, you agree to our{" "}
        <Text style={styles.link}>Terms & Privacy Policy</Text>
      </Text>
    </View>
    </Screen>
  );
}
