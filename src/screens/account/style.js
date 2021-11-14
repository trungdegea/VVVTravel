import {StyleSheet} from "react-native"
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
  row: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  black: {
    color: Theme.COLORS.BLACK,
  },
  imgBanner: {
    width: 96,
    resizeMode: "contain"
  },
  text1Banner: {
    fontSize: 16,
    fontWeight: "bold",
    color: Theme.COLORS.PRIMARY,
  },
  text2Banner: {
    fontSize: 12,
    color: Theme.COLORS.MUTED,
  },
});
