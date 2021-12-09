import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  map_frame: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  topic_map: {
    borderLeftWidth: 5,
    borderLeftColor: "orange",
  },
  topic: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  map: {
    width: Dimensions.get("window").width * 0.85,
    height: Dimensions.get("window").height * 0.3,
  },
});
