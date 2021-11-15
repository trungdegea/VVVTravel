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

const HeaderAccountScroll = ({ top, opacity }) => {
  return (
    <Animated.View
      style={[styles.headerContainer, {top: top, opacity: opacity}]}
    >
      <SafeAreaView style={[styles.topNav]}>
        <Text style={[styles.heading]}>Bookings</Text>
        <TouchableOpacity>
          <AnimatedIcon color={Theme.COLORS.BLACK} size={20} name={"cart-outline"} />
        </TouchableOpacity>
      </SafeAreaView>
    </Animated.View>
  );
};

export default HeaderAccountScroll;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    width: "100%",
    top: -70,
    left: 0,
    overflow: "hidden",
    height: 70,
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: "#fff"
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
  }
});
