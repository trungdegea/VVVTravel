import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: -5,
    paddingLeft: 5,
    paddingVertical: 20,
    backgroundColor: "white",
    borderRadius: 24,
    flex: 1,
    flexWrap: "wrap",
  },
  packagename: {
    fontWeight: "bold",
    fontSize: 20,
  },
  overrate: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    alignItems: "center",
  },
  overrate_child: {
    flex: 1,
    flexDirection: "row",
  },
  voucher: {
    backgroundColor: "#ffe4c4",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
  },
  voucher_info: {
    padding: 10,
    flex: 1,
  },
});
