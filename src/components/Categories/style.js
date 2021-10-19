import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  area: {
    paddingVertical: 20,
    backgroundColor: "white",
    borderRadius: 24,
  },
  categoriesContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    marginHorizontal: 5,
    width: 8,
    height: 8,
    backgroundColor: "rgba(200, 200, 200, .5)",
    borderRadius: 999,
  },
  dot_active: {
    marginHorizontal: 5,
    width: 10,
    height: 10,
    backgroundColor: "#ff7a00",
    borderRadius: 9999,
  },
});