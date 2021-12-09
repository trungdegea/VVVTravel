import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, } from "react-native";
import { Theme } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../../shared/SearchBar";

const {width, height} = Dimensions.get("window");

const HeaderDestination = ({ navigation }) => {
  const goToCart = () => {
    navigation.navigate("Cart", { data: "this is how to pass data" });
  };
  return (
    <SafeAreaView style={[styles.headerContainer]}>
      <SearchBar width={width - 80} />
      <TouchableOpacity onPress={goToCart} style={[styles.carts]}>
        <Ionicons
          name="cart-outline"
          color={Theme.COLORS.WHITE}
          size={20}
        ></Ionicons>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderDestination;

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
    backgroundColor: Theme.COLORS.PRIMARY,
    zIndex: 1000,
    borderBottomColor: Theme.COLORS.PRIMARY,
    borderBottomWidth: 1,
    elevation: 8,
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
