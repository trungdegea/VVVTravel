import React from "react";
import { StyleSheet, Text, SafeAreaView, Animated, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";


const HeaderAccountScroll = ({ bgColor, color }) => {
  return (
    <Animated.View
      style={[styles.headerContainer, { backgroundColor: bgColor }]}
    >
      <SafeAreaView style={styles.topNav}>
        <Feather name="mail" size={20} color={color} />
        <Feather name="hexagon" size={20} color={color} />
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
    height: 70,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
