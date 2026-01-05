import { StyleSheet } from "react-native";
import TaskCard from "../components/TaskCard";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: "#F9FAFB",
  },

   header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",

  },


  addNew: {
    flexDirection: "row",
    alignItems: "center",
  },

  addNewText: {
    fontSize: 14,
    marginLeft: 6,
    color: "#2563EB",
    fontWeight: "500",
  },

  formCard: {
    backgroundColor: "#FACC15", // yellow
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },

  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#1F2937",
    marginBottom: 6,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#FEF08A",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#111827",
  },

  textarea: {
    height: 80,
    textAlignVertical: "top",
  },

  photoBox: {
    height: 120,
    backgroundColor: "#FEF08A",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },

  saveBtn: {
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "#FBBF24",
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 2,
  },

  saveText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  
   section: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 10,
    color: "#626c83ff",
  },

  completedCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
    elevation: 1,
  },

  taskTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },

  taskDesc: {
    fontSize: 12,
    color: "#4B5563",
    marginBottom: 8,
  },

  photosRow: {
    flexDirection: "row",
    gap: 8,
  },

  photoThumb: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
  },

  taskCard: {
    marginBottom: 12,
    elevation: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
  },


  statusBadge: {
  alignSelf: "flex-start",
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 10,
  marginBottom: 6,
},

pending: {
  backgroundColor: "#FEF3C7",
},

approved: {
  backgroundColor: "#DCFCE7",
},

});
