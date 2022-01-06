import { Dimensions, StyleSheet } from "react-native";

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
    marginBottom: 10,
  },
  topic_expect: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  description_heading: {
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 10,
  },
  description_image: {
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.4,
  },
  description_image_content: {
    paddingVertical: 2,
    color: "gray",
  },
});
