import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { padding: 16 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  company: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  formCard: {
    backgroundColor: "#FEF3C7",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
  },

  dropdown: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },

  itemsCard: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    elevation: 3,
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  itemName: { fontWeight: "600" },
  qty: { color: "#555" },
  amount: { fontWeight: "600" },

  addItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderTopWidth: 1,
    paddingTop: 10,
  },

  totalText: { fontWeight: "700" },
  totalAmount: { fontWeight: "700" },

  generateBtn: {
    backgroundColor: "#FACC15",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  generateText: {
    fontWeight: "700",
  },

  modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.4)",
  justifyContent: "flex-end",
},

modalCard: {
  backgroundColor: "#fff",
  padding: 16,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
},

modalTitle: {
  fontSize: 16,
  fontWeight: "600",
  marginBottom: 10,
},

input: {
  backgroundColor: "#f5f5f5",
  borderRadius: 8,
  padding: 10,
  marginBottom: 10,
},

modalActions: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 10,
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
