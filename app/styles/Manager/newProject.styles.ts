import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
  },

  card: {
    backgroundColor: "#FFC83D",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#FFE88A",
    borderRadius: 6,
    padding: 10,
    marginBottom: 14,
  },

  textArea: {
    height: 70,
    textAlignVertical: "top",
  },

  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFE88A",
    borderRadius: 6,
    padding: 10,
    marginBottom: 14,
  },

  dropdownText: {
    color: "#555",
  },

  saveBtn: {
    backgroundColor: "#FFC83D",
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 6,
    elevation: 2,
  },

  saveText: {
    fontWeight: "600",
  },
});
