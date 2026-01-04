import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 24,
  },

  /* Header */
  header: {
    marginBottom: 20,
  },
  appName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },
  welcomeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },

  /* Section */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#000",
  },

  /* Card */
  card: {
    backgroundColor: "#fee3a4ff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  siteName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  /* Status */
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#fff",
  },
  onTrack: {
    backgroundColor: "#2ecc71",
  },
  delayed: {
    backgroundColor: "#e74c3c",
  },
  ahead: {
    backgroundColor: "#3498db",
  },

  /* Location */
  location: {
    fontSize: 12,
    color: "#666",
    marginVertical: 6,
    // marginLeft: 10,
    marginTop:2,
  },

  locationRow: {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
  marginVertical: 6,
},



  /* Progress */
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  progressLabel: {
    fontSize: 12,
    color: "#666",
  },
  progressPercent: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
  },
  progressBg: {
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 6,
    overflow: "hidden",
  },
  progressFill: {
    height: 6,
    backgroundColor: "#7b61ff",
    borderRadius: 6,
  },
});
