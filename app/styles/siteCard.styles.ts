import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    elevation: 2,
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

  /* Status badge */
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
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginVertical: 6,
  },
  location: {
    fontSize: 12,
    color: "#666",
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
