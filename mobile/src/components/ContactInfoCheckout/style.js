import { StyleSheet } from "react-native";
import { Theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginBottom: 10,
    paddingBottom: 20,
  },
  header: {
    padding: 10,
    marginLeft: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderLeftWidth: 5,
    borderLeftColor: "orange",
  },
  nameheader: {
    fontWeight: "bold",
    fontSize: 18,
  },
  decription: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: "#757474",
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    fontSize: 18,
    borderColor: "#949191",
    color: Theme.COLORS.BLACK,
    marginBottom: 10,
  },
  namecontact: {
    paddingHorizontal: 10,
  },
  country: {
    paddingBottom: 10,
  },
  phonenumber: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  picker: {
    width: 80,
  },
  inputPhonenumber: {
    margin: 12,
    borderBottomWidth: 1,
    borderColor: "#949191",
    paddingVertical: 10,
    color: Theme.COLORS.BLACK,
  },
  totalContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  totalPrice: {
    color: Theme.COLORS.PRIMARY,
    fontWeight: "bold",
    fontSize: 20,
  },
});
