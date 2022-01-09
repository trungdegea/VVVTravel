import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Theme } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const HeaderBooking = ({navigation}) => {
  const goToCart = () => {
    navigation.navigate("Cart", { data: "this is how to pass data" });
  };
  return (
    <SafeAreaView style={[styles.headerContainer]}>
      <Text style={[styles.heading]}>Bookings</Text>
      <TouchableOpacity onPress={goToCart} style={[styles.goToCart]}>
        <Ionicons name="cart-outline" color={Theme.COLORS.BLACK} size={20}></Ionicons>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderBooking;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    overflow: "hidden",
    height: 80,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  goToCart: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  
});
