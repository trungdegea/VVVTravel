import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: -5,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    flex: 1,
  },
  packagename: {
    fontWeight: "bold",
    fontSize: 20,
  },
  overrate: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  overrate_child: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  voucher: {
    backgroundColor: "#ffe4c4",
    marginLeft: 5,
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
  },
  voucher_info: {
    flex: 1,
    padding: 10,
    flexWrap: "wrap",
  },
  rules: {
    padding: 5,
    margin: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopColor: "gray",
    borderTopWidth: 1,
  },
  rules_info: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },
  rules_name: {
    paddingLeft: 10,
  },
  benefit: {
    flex: 1,
  },
  benefit_info: {
    flex: 1,
    flexDirection: "row",
    fontSize: 20,
    paddingVertical: 5,
  },
});
