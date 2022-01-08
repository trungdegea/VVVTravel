import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
  element: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#FFF",
    padding: 20,
  },
  name_element: {
    fontSize: 20,
    marginRight: "auto",
  },
  loadingLayer: {
    zIndex: 1001,
    width,
    height,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, .3)",
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
