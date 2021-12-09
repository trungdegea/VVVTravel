import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  topic: {
    borderLeftWidth: 5,
    borderLeftColor: "orange",
    marginBottom: 5,
  },
  topic_review: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  rating: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  rating_point: {
    fontWeight: "500",
    fontSize: 36,
    marginRight: 20,
  },
  rating_star: {
    flex: 1,
  },
  rating_star_number: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
  },
  rating_star_review: {
    color: "gray",
    paddingHorizontal: 5,
  },
  user: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  user_info: {
    marginLeft: 15,
  },
  user_name: {
    fontSize: 20,
  },
  user_date: {
    color: "gray",
  },
  user_review: {
    flex: 1,
    flexDirection: "row",
  },
  user_comment: {
    fontSize: 18,
    fontWeight: "400",
  },
  user_recommend: {
    fontWeight: "bold",
  },
  btn: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopColor: "gray",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  namebtn: {
    fontSize: 18,
    fontWeight: "600",
  },
});
