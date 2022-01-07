import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";

export default function CheckoutHeader({ navigation }) {
  const gotoHome = () => {
    navigation.navigate("HomeStack", {
      screen: "Home",
    });
  };
  return (
    <SafeAreaView style={[styles.headerContainer]}>
      <SafeAreaView style={[styles.myFlex]}>
        <TouchableOpacity onPress={gotoHome} style={[styles.back]}>
          <Ionicons
            name="arrow-back"
            color={Theme.COLORS.BLACK}
            size={20}
          ></Ionicons>
        </TouchableOpacity>
        <Text style={[styles.heading]}>Complete booking</Text>
      </SafeAreaView>
      <TouchableOpacity>
        <FontAwesome name="question-circle-o" size={20} color="black" />
      </TouchableOpacity>
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
