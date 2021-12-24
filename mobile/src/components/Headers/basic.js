import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../../constants";
import { useNavigation } from "@react-navigation/core";

export default function BasicHeader({title}) {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.headerContainer]}>
      <SafeAreaView style={[styles.myFlex]}>
        <TouchableOpacity onPress={navigation.goBack} style={[styles.back]}>
          <Ionicons
            name="arrow-back"
            color={Theme.COLORS.BLACK}
            size={20}
          ></Ionicons>
        </TouchableOpacity>
        <Text style={[styles.heading]}>{title || "Home"}</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    overflow: "hidden",
    height: 60,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white",
    zIndex: 1000,
    borderBottomColor: Theme.COLORS.BORDER,
    borderBottomWidth: 1,
    elevation: 8,
  },
  heading: {
    fontSize: 20,
  },
  myFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    marginRight: 15,
  },
});
