import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { padding: 16},

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  title: { fontSize: 18, fontWeight: "600" },

  addNew: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginVertical: 10,
  },

  sectionTitle: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
  },

  requestCard: {
    backgroundColor: "#2ea82e",
    padding: 14,
    borderRadius: 10,
  },

  label: { color: "#000", marginBottom: 4 },

  input: {
    backgroundColor: "#cde88a",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },

  textArea: { height: 60 },

  saveBtn: {
    backgroundColor: "#FFC83D",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 6,
  },

  saveText: { fontWeight: "600" },

  summaryCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
  },

  historyCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
     elevation: 2,
  },

  materialName: { fontWeight: "600" },

  status: { fontWeight: "600" },
  approved: { color: "green" },
  pending: { color: "#3f51b5" },

  required: { color: "red" },
});
