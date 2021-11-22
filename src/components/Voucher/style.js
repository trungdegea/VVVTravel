import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 10,
    backgroundColor: "orange",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  topic: {
    marginBottom: 2,
    alignItems: "center",
  },
  topic_name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    textAlignVertical: "center",
    alignItems: "center",
  },
  dashedline: {
    color: "#fff",
  },
  btnclaim: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 40,
    paddingVertical: 2,
    backgroundColor: "white",
  },
  btnname: {
    color: "orange",
    fontSize: 15,
    fontWeight: "bold",
  },
});
