import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_name: {
    margin: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  option: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  option_choose: {
    paddingHorizontal: 10,
    fontSize: 15,
  },
  option_choose_active: {
    paddingHorizontal: 10,
    fontSize: 15,

    borderBottomWidth: 1,
    borderBottomColor: "orange",
  },
  option_name: {
    fontSize: 15,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  option_active: {
    color: "orange",
  },
  tour: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 10,
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
    overflow: "hidden",
    width: Dimensions.get("window").width * 0.6,
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
