import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../../constants";
const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const HeaderBookingScroll = ({ top, opacity, navigation }) => {
  const goToCart = () => {
    navigation.navigate("Cart", {data: "this is how to pass data"});
  }
  return (
    <Animated.View
      style={[styles.headerContainer, {top: top, opacity: opacity}]}
    >
      <SafeAreaView style={[styles.topNav]}>
        <Text style={[styles.heading]}>Bookings</Text>
        <TouchableOpacity onPress={goToCart}>
          <AnimatedIcon color={Theme.COLORS.BLACK} size={20} name={"cart-outline"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </Animated.View>
  );
};

export default HeaderBookingScroll;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    width: "100%",
    top: -60,
    left: 0,
    overflow: "hidden",
    height: 60,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#fff",
    elevation: 8,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
