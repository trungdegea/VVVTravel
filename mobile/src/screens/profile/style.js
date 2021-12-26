import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  img_frame: {
    width: 100,
    height: 100,
    flexDirection: "row",
  },
  iconedit: {
    marginTop: "auto",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  input_frame: {
    paddingVertical: 10,
  },
  topic_name: {
    fontSize: 18,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    fontSize: 18,
    borderColor: "#949191",
    color: "#949191",
    marginBottom: 10,
  },
});
