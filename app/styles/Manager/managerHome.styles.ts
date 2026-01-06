import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 80,
  },

  header: {
    marginBottom: 20,
  },

  appName: {
    fontSize: 22,
    fontWeight: "700",
  },

  welcomeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    // gap: 4,
  },

  welcomeText: {
    fontSize: 16,
    fontStyle: "italic",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },

  newProject: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
    alignSelf: "center",
  },

  newProjectText: {
    fontSize: 14,
    fontWeight: "500",
  },
   userAvatar: {
  width: 60,
  height:60,
  borderRadius: 5,
  marginRight: 12,
},
});
