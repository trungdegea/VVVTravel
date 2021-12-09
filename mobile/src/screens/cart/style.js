import { StyleSheet } from "react-native";
import { Theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    borderRadius: 8,
    shadowColor: Theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    marginTop: 30,
    paddingVertical: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});
