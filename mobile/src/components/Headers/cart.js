import React from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Theme } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const HeaderCart = () => {
  const navigation = useNavigation();
  const selectAll = () => {};
  const deselectAll = () => {};
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
        <Text style={[styles.heading]}>Carts</Text>
      </SafeAreaView>
      <TouchableOpacity onPress={selectAll}>
        <Text> Select all </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderCart;

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
    fontSize: 24,
    fontWeight: "bold",
  },
  myFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    marginRight: 15,
  },
});
