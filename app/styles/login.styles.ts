import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  appTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 40,
  },

  heading: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },

  roleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  roleCard: {
    width: "30%",
    height: 90,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  roleSelected: {
    borderWidth: 2,
    borderColor: "#f5c400",
  },

  roleText: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
  },

  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    elevation: 3,
  },

  forgot: {
    textAlign: "right",
    color: "#666",
    marginBottom: 25,
  },

  loginBtn: {
    backgroundColor: "#f5c400",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  loginText: {
    fontWeight: "700",
  },

  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },

  orText: {
    marginHorizontal: 10,
    color: "#666",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  secondaryBtn: {
    width: "48%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },

  link: {
    color: "#f5a000",
  },
});
