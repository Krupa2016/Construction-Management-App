import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: "#F6F6F6",
  },

  /* ---------- Header ---------- */
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  /* ---------- Summary Cards ---------- */
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 14,
    marginHorizontal: 4,
    alignItems: "center",
    elevation: 3,
  },

  summaryCardGreen: {
    flex: 1,
    backgroundColor: "#E7F8EF",
    borderRadius: 12,
    paddingVertical: 14,
    marginHorizontal: 4,
    alignItems: "center",
    elevation: 3,
  },

  summaryCardRed: {
    flex: 1,
    backgroundColor: "#FDECEC",
    borderRadius: 12,
    paddingVertical: 14,
    marginHorizontal: 4,
    alignItems: "center",
    elevation: 3,
  },

  summaryValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  summaryLabel: {
    fontSize: 12,
    marginTop: 4,
    color: "#555",
  },

  /* ---------- Section ---------- */
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },

  /* ---------- Day Card ---------- */
  dayCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 18,
    elevation: 4,
  },

  dayHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  date: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },

  checkin: {
    fontSize: 12,
    color: "#666",
  },

  countRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  countText: {
    fontSize: 12,
    color: "#444",
  },

  /* ---------- Worker Row ---------- */
  workerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },

  workerName: {
    flex: 2,
    fontSize: 14,
    color: "#111",
    fontWeight: "500",
  },

  workerRole: {
    flex: 1.5,
    fontSize: 12,
    color: "#666",
  },

  present: {
    fontSize: 12,
    fontWeight: "600",
    color: "#16A34A",
  },

  absent: {
    fontSize: 12,
    fontWeight: "600",
    color: "#DC2626",
  },

  halfDay: {
    fontSize: 12,
    fontWeight: "600",
    color: "#D97706",
  },



  /* ---------- Previous Attendance ---------- */
previousCard: {
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  padding: 14,
  marginBottom: 12,
  elevation: 3,
},

previousHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 8,
},

previousDate: {
  fontSize: 14,
  fontWeight: "600",
  color: "#111",
},

previousCounts: {
  flexDirection: "row",
  justifyContent: "space-between",
},

});
