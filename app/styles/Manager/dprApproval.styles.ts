import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { padding: 16 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  section: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 12,
    color: "#555",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  task: {
    fontSize: 16,
    fontWeight: "700",
  },

  date: {
    fontSize: 12,
    color: "#F97316",
    fontWeight: "600",
  },

  meta: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  },

  desc: {
    fontSize: 13,
    color: "#333",
    marginVertical: 6,
  },

  photoLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 6,
  },

  photoRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
  },

  photo: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: "#eee",
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  approve: {
    backgroundColor: "#15803D",
    width: "48%",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },

  reject: {
    backgroundColor: "#991B1B",
    width: "48%",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
