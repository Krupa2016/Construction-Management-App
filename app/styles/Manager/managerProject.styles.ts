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

});
