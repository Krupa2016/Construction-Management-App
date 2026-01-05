import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 120,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
  },

  statusRow: {
    marginTop: 12,
  },

  offlineBadge: {
    backgroundColor: "#FFE6A1",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    borderRadius: 12,
    fontSize: 12,
  },

  siteName: {
    fontSize: 16,
    marginTop: 6,
  },

 mapBox: {
  height: 160,
  borderRadius: 12,
  overflow: "hidden",
  marginTop: 12,
  marginBottom: 20,
},

mapImage: {
  width: "100%",
  height: "100%",
},

  checkInBtn: {
    backgroundColor: "#F5C400",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  sectionTitle: {
    marginTop: 20,
    fontWeight: "600",
  },

  workerCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
    elevation: 2,
  },

  workerName: {
    fontWeight: "600",
  },

  attendanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  present: { backgroundColor: "#DFF5E1", padding: 6, borderRadius: 8 },
  absent: { backgroundColor: "#FFDADA", padding: 6, borderRadius: 8 },
  half: { backgroundColor: "#FFF1C1", padding: 6, borderRadius: 8 },

  summaryBox: {
    backgroundColor: "#FFE28A",
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
  },

  total: {
    marginTop: 10,
    fontWeight: "600",
  },

  addTemp: {
    marginTop: 8,
  },


  workerHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

workerRole: {
  fontSize: 12,
  color: "#666",
},

wageText: {
  marginTop: 4,
  fontSize: 12,
  color: "#444",
},


// summaryy card
summaryContainer: {
  marginTop: 20,
  marginBottom: 10,
},

summaryTitle: {
  fontSize: 16,
  fontWeight: "600",
  marginBottom: 8,
  color: "#333",
},

summaryCard: {
  backgroundColor: "#fff",
  borderRadius: 14,
  padding: 14,
  shadowColor: "#000",
  shadowOpacity: 0.06,
  shadowRadius: 8,
  elevation: 3,
},

summaryRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginVertical: 6,
},

summaryRole: {
  fontSize: 14,
  color: "#444",
},

summaryCount: {
  fontSize: 14,
  fontWeight: "600",
  color: "#000",
},

divider: {
  height: 1,
  backgroundColor: "#eee",
  marginVertical: 10,
},

totalText: {
  fontSize: 13,
  color: "#666",
},

presentText: {
  fontSize: 13,
  color: "#2e7d32",
  marginTop: 4,
},

bold: {
  fontWeight: "700",
},

addTempBtn: {
  marginTop: 14,
  backgroundColor: "#fff3cd",
  borderRadius: 10,
  paddingVertical: 12,
  alignItems: "center",
  marginBottom: 20,
},

addTempText: {
  color: "#f5a400",
  fontWeight: "600",
},


modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.4)",
  justifyContent: "center",
  alignItems: "center",
},

modalBox: {
  width: "85%",
  backgroundColor: "#fff",
  borderRadius: 16,
  padding: 16,
},

modalTitle: {
  fontSize: 16,
  fontWeight: "700",
  marginBottom: 12,
},

input: {
  backgroundColor: "#f5f5f5",
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 10,
  marginBottom: 10,
},

modalActions: {
  flexDirection: "row",
  justifyContent: "flex-end",
  marginTop: 10,
},

cancel: {
  marginRight: 20,
  color: "#888",
},

saveBtn: {
  backgroundColor: "#f5c400",
  paddingHorizontal: 18,
  paddingVertical: 8,
  borderRadius: 8,
    alignItems: "center",
},

saveText: {
  fontWeight: "600",
},


});


