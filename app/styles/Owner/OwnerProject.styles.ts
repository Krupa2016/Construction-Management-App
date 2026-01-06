import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    
  },

  imagewrapper:{
alignItems: "center", justifyContent: "center", backgroundColor: "#fff", padding: 10, borderRadius: 12, marginTop: 20,paddingBottom: -100,elevation: 3,
  },
riskCard: {
  backgroundColor: "#FEF3C7",
  borderRadius: 12,
  padding: 14,
  marginBottom: 20,
  borderLeftWidth: 4,
  borderLeftColor: "#F59E0B",
  marginTop: 15,
},

riskHeader: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 10,
},

riskTitle: {
  fontSize: 16,
  fontWeight: "600",
  marginLeft: 6,
  color: "#92400E",
},

riskItem: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 8,
},

riskText: {
  fontSize: 13,
  marginLeft: 8,
  color: "#78350F",
  flex: 1,
},


deviationCard: {
  backgroundColor: "#FFF7ED",
  borderRadius: 12,
  padding: 16,
  marginBottom: 20,

  width: "100%",
  height: 120,
},

deviationHeader: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 14,
},

deviationTitle: {
  fontSize: 16,
  fontWeight: "600",
  marginLeft: 8,
  color: "#7C2D12",
},

deviationRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

deviationItem: {
  flex: 1,
  alignItems: "center",
},

deviationValue: {
  fontSize: 20,
  fontWeight: "700",
  color: "#9A3412",
  marginBottom: 4,
},

deviationLabel: {
  fontSize: 12,
  color: "#7C2D12",
},

deviationDivider: {
  width: 1,
  height: 40,
  backgroundColor: "#FED7AA",
},






syncCard: {
  backgroundColor: "#EFF6FF",
  borderRadius: 12,
  padding: 16,
  marginBottom: 20,
  marginTop: 10,
},

syncHeader: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 12,
},

syncTitle: {
  fontSize: 16,
  fontWeight: "600",
  marginLeft: 8,
  color: "#1E3A8A",
},

syncRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

syncItem: {
  flex: 1,
  alignItems: "center",
},

syncValue: {
  fontSize: 18,
  fontWeight: "700",
  color: "#1D4ED8",
  marginBottom: 4,
},

syncLabel: {
  fontSize: 12,
  color: "#1E40AF",
},

syncDivider: {
  width: 1,
  height: 40,
  backgroundColor: "#BFDBFE",
},

syncNote: {
  fontSize: 11,
  color: "#1E40AF",
  marginTop: 10,
  textAlign: "center",
},

});