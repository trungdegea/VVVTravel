import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginBottom: 50,
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
    color: "#949191",
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
    padding: 10,
    color: "#949191",
  },
});
