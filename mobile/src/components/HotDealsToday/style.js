import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  header: {
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  decription: {
    marginVertical: 5,
  },
  content: {
    backgroundColor: "orange",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tour: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
  },
  image: {
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").height * 0.2,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  info: {
    paddingHorizontal: 5,
  },
  location: {
    color: "gray",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    color: "gray",
  },
  booking: {
    flex: 1,
    flexDirection: "row",
    textAlignVertical: "center",
    alignItems: "center",
  },
  pricevoucher: {
    color: "red",
    fontSize: 12,
    textDecorationLine: "underline",
    marginRight: 5,
  },
  btnbook: {
    backgroundColor: "orange",
    borderRadius: 10,
  },
  namebtn: {
    fontSize: 15,
    color: "#fff",
    margin: 3,
  },
});
