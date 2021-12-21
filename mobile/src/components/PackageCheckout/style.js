import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebebeb",
  },
  package: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    marginVertical: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 5,
  },
  decription: {
    fontSize: 16,
    paddingVertical: 5,
  },
  voucher: {
    paddingVertical: 5,
  },
  date: {
    paddingVertical: 5,
  },
  price: {
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  btn: {
    borderColor: "orange",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_name: {
    color: "orange",
    paddingHorizontal: 10,
    fontSize: 18,
    paddingVertical: 2,
    fontWeight: "bold",
  },
});
