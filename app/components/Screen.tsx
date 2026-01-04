import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

export default function Screen({ children }: { children: React.ReactNode }) {
  let tabBarHeight = 0;

  try {
    tabBarHeight = useBottomTabBarHeight();
  } catch (e) {
    // Not inside a tab screen → ignore
    tabBarHeight = 0;
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom: tabBarHeight,
      }}
    >
      {children}
    </SafeAreaView>
  );
}
