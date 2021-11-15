import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import { Theme, Images } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const HeaderSetting = () => {
  return (
    <SafeAreaView style={[styles.headerContainer]}>
      <Text style={[styles.heading]}>Bookings</Text>
      <TouchableOpacity>
        <Ionicons name="cart-outline" color={Theme.COLORS.BLACK} size={20}></Ionicons>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderSetting;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    overflow: "hidden",
    height: 100,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  }
  
});
