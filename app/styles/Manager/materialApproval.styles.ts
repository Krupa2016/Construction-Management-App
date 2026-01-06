import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
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
  material: {
    fontSize: 16,
    fontWeight: "700",
  },
  cost: {
    fontSize: 13,
    color: "#E11D48",
    fontWeight: "600",
  },
  meta: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  approve: {
    backgroundColor: "#15803D",
    paddingVertical: 8,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  reject: {
    backgroundColor: "#991B1B",
    paddingVertical: 8,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
  approvedBadge: {
    backgroundColor: "#16A34A",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
  },
});
