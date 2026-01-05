import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginBottom: 16,
  },

  projectName: {
    fontSize: 18,
    fontWeight: "700",
  },

  locationRow: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },

  location: {
    fontSize: 12,
    color: "#666",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  percent: {
    fontWeight: "600",
  },

  progressBg: {
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 6,
    marginVertical: 8,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#6D5BD0",
    borderRadius: 6,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  statBox: {
    alignItems: "center",
  },

  statValue: {
    fontSize: 22,
    fontWeight: "700",
  },

  statValueSmall: {
    fontSize: 14,
    fontWeight: "600",
  },

  statLabel: {
    fontSize: 12,
    color: "#666",
  },

  linkRow: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    marginTop: 12,
  },

  linkText: {
    fontWeight: "600",
  },

  taskActions: {
    flexDirection: "row",
    gap: 12,
  },

  actionBox: {
    flex: 1,
    height: 100,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  yellow: {
    backgroundColor: "#FFD66B",
  },

  blue: {
    backgroundColor: "#7DA0FA",
  },

  actionText: {
    marginTop: 6,
    fontWeight: "600",
  },

  subTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: "700",
  },

  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  taskText: {
    flex: 1,
    marginLeft: 6,
  },

  taskDate: {
    fontSize: 12,
    color: "#666",
  },

  alertBox: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#FEF3C7",
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },

  alertTitle: {
    fontWeight: "700",
  },

  alertText: {
    fontSize: 15,
  },

  alertSub: {
    marginTop: 4,
    fontSize: 12,
    color: "#555",
  },

  smallText: {
    fontSize: 12,
    color: "#666",
  },
});
