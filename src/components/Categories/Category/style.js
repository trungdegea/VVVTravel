import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoryContainer: {
    width: "25%",
    height: 115,
    paddingVertical: 7.5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryIconBox: {
    width: 56,
    padding: 10,
    borderRadius: 8,
    aspectRatio: 1,
  },
  categoryIcon: {
    fontSize: 36,
  },
  categoryName: {
    width: "100%",
    textAlign: "center",
  },
});
