import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ManagerTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f5c400",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: { height: 60, paddingBottom: 4 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Overview",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="speedometer-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="approvals"
        options={{
          title: "Approvals",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-done-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="invoices"
        options={{
          title: "Invoices",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />


      {/* HIDE project from tab bar */}
                  <Tabs.Screen
            name="project/[id]"
            options={{
              href: null,
            }}
          />

                  <Tabs.Screen
            name="project/material_approval"
            options={{
              href: null,
            }}
          />

                  <Tabs.Screen
            name="project/dpr_approval"
            options={{
              href: null,
            }}
          />

           <Tabs.Screen
            name="project/generate_invoice"
            options={{
              href: null,
            }}
          />

          
    </Tabs>
  );
}
