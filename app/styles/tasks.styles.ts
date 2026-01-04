import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 90, // 👈 avoids tab overlap
  },
  header: {
    fontWeight: "700",
    marginBottom: 20,
     flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  title: { fontSize: 22, fontWeight: "600" },

  section: {
    fontSize: 13,
    color: "#777",
    marginBottom: 16,
  },
});
