import React from "react";
import { StyleSheet, Text, SafeAreaView, Animated, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
const AnimatedIcon = Animated.createAnimatedComponent(Feather);


const HeaderAccountScroll = ({ bgColor, color, opacity }) => {
  return (
    <Animated.View style={[styles.headerContainer, {backgroundColor: bgColor}]}>
      <SafeAreaView style={[styles.topNav]}>
        <AnimatedIcon style={[{color: color}]} size={20} name={"mail"} />
        <Animated.Text style={[styles.title, {opacity: opacity, color: color}]}>
          Manage my info
        </Animated.Text>
        <AnimatedIcon style={[{color: color}]} size={20} name={"hexagon"} />
      </SafeAreaView>
    </Animated.View>
  );
};

export default HeaderAccountScroll;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
    height: 60,
    paddingHorizontal: 15,
    justifyContent: "center",
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
  icon: {},
});
