import React from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions,} from "react-native";
import { Theme } from "../../constants";
import Button from "../../shared/button";

const {width, height} = Dimensions.get("window");

const CartFooter = () => {
  return (
    <SafeAreaView style={[styles.footerContainer, styles.myFlex]}>
      <SafeAreaView>
        <Text style={[styles.total]}>Total (1 item)</Text>
        <Text style={[styles.price]}>₫ 11,900,200</Text>
      </SafeAreaView>
      <Button title="Book now" bgColor={Theme.COLORS.PRIMARY} textColor="#fff" />
    </SafeAreaView>
  );
};

export default CartFooter;

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    width: "100%",
    height: 70,
    backgroundColor: "white",
    top: height - 70,
    left: 0,
    borderTopWidth: 1,
    borderTopColor: Theme.COLORS.BORDER,
    zIndex: 1000,
    paddingHorizontal: 15,
    elevation: 8,
  },
  myFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Book: {
    fontSize: 700,
    color: Theme.COLORS.PRIMARY,
  },
  total: {
    color: Theme.COLORS.MUTED,
    fontSize: 14,
    fontWeight: "600",
  },
  price: {
    color: Theme.COLORS.PRIMARY,
    fontSize: 16,
    fontWeight: "bold",
  },
});