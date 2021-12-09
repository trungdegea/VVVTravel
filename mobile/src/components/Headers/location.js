import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Animated } from "react-native";
import { Theme } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../../shared/SearchBar";
import { useNavigation } from "@react-navigation/core";

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);
const {width, height} = Dimensions.get("window");

const HeaderLocation = ({ bgColor, color, searchBgColor, focusSearchBgColor }) => {

  const navigation = useNavigation();
  const goToCart = () => {
    navigation.navigate("Cart", { data: "this is how to pass data" });
  };



  return (
    <Animated.View
      style={[styles.headerContainer, { backgroundColor: bgColor || "white" }]}
    >
      <TouchableOpacity onPress={navigation.goBack} style={[styles.back]}>
        <AnimatedIcon
          name="arrow-back"
          size={20}
          style={[{ color: color || "white" }]}
        ></AnimatedIcon>
      </TouchableOpacity>
      <SearchBar
        width={width - 110}
        idleBg={searchBgColor}
        focusBg={focusSearchBgColor}
        color={color}
        focusColor={color}
        placeholderTextColor={color}
      />
      <TouchableOpacity onPress={goToCart} style={[styles.carts]}>
        <AnimatedIcon
          name="cart-outline"
          size={20}
          style={[{ color: color || "white" }]}
        ></AnimatedIcon>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default HeaderLocation;

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
    zIndex: 1000,
  },
  myFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  carts: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
