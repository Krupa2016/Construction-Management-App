import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingBottom: 14,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  userCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 18,
    elevation: 2,
  },

  userName: {
    fontSize: 16,
    fontWeight: "600",
  },

  userPhone: {
    color: "#777",
    fontSize: 13,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#777",
    marginBottom: 6,
    marginTop: 10,
  },

  sectionBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 14,
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  itemText: {
    fontSize: 14,
  },

  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  badge: {
    backgroundColor: "red",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },

  logoutBox: {
    borderWidth: 1,
    borderColor: "#ffcccc",
    borderRadius: 10,
    padding: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 10,
  },

  logoutText: {
    color: "red",
    fontWeight: "600",
  },
});
