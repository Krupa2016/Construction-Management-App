import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ManagerTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f5c400",
        tabBarInactiveTintColor: "#110e0eff",
        tabBarStyle: { height: 80, paddingBottom: 4, },
        tabBarLabelStyle: { fontSize: 13, fontWeight: "600", },     
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
                  name="attendance"
                  options={{
                    title: "Attendance",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="receipt-outline" size={size} color={color} />
                    ),
                  }}
                />


      <Tabs.Screen
        name="stock"
        options={{
          title: "Stock",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
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
            name="project/view_dpr"
            options={{
              href: null,
            }}
          />


          <Tabs.Screen
            name="project/view_invoice"
            options={{
              href: null,
            }}
          />



          
    </Tabs>
  );
}
