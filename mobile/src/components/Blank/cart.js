import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import { Images, Theme } from "../../constants";

const BlankBooking = () => {
  return (
    <SafeAreaView style={[styles.center]}>
      <SafeAreaView style={[styles.center]}>
        <Image source={Images.cart} style={styles.image} />
      </SafeAreaView>
      <Text style={[styles.text]}> Cart is empty!!! </Text>
    </SafeAreaView>
  );
};

export default BlankBooking;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 320,
    height: 290,
  },
  text: {
    marginTop: 10,
    color: Theme.COLORS.MUTED,
  },
});
