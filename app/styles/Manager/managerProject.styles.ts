import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 80,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 12,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

 

statValue: {
  fontSize: 20,
  fontWeight: "700",
  marginTop: 4,
},


  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },

  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFD24D",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },

  actionText: {
    fontSize: 14,
    fontWeight: "600",
  },

  statCard: {
  width: "48%",
  backgroundColor: "#fff",
  borderRadius: 14,
  padding: 14,
  elevation: 3,
  gap: 6,                // 👈 spacing between icon & text
},



  imagewrapper:{
alignItems: "center", justifyContent: "center", backgroundColor: "#fff", padding: 10, borderRadius: 12, marginTop: 20,paddingBottom: -100,elevation: 3,
  },

userAvatar: {

  height: 300,
  width: "89%",
  marginLeft: -60,
  
},


safetyCard: {
  backgroundColor: "#ECFDF5",
  marginHorizontal: 16,
  padding: 14,
  borderRadius: 12,
  width: "90%",
  marginBottom: 20,
},

safetyHeader: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 10,
},

safetyTitle: {
  fontSize: 15,
  fontWeight: "600",
  color: "#065F46",
  marginLeft: 6,
},

safetyRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 8,
},

safetyText: {
  fontSize: 13,
  color: "#064E3B",
  marginLeft: 8,
  flex: 1,
},


insightCard: {
  backgroundColor: "#FFF7ED",
  // marginHorizontal: 16,
  marginTop: 12,
  padding: 14,
  borderRadius: 12,
},

managerInsightCard: {
  backgroundColor: "#4e46e57c",
  // marginHorizontal: 16,
  marginTop: 30,
  padding: 14,
  borderRadius: 12,

},

insightTitle: {
  fontSize: 15,
  fontWeight: "600",
  marginBottom: 10,
},

insightRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 8,
},

insightText: {
  fontSize: 13,
  marginLeft: 8,
  color: "#374151",
  flex: 1,
},



mCard: {
  backgroundColor: "#FFF7ED",
  marginHorizontal: 16,
  padding: 14,
  borderRadius: 12,
  width: "90%",
  marginBottom: 20,
},

mHeader: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 10,
},

mTitle: {
  fontSize: 15,
  fontWeight: "600",
  color: "#065F46",
  marginLeft: 6,
},

mRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 8,
},

mText: {
  fontSize: 13,
  color: "#064E3B",
  marginLeft: 8,
  flex: 1,
},

});
