import React from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Theme } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const HeaderReviews = ({ productName }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.headerContainer]}>
      <SafeAreaView style={[styles.myFlex]}>
        <TouchableOpacity onPress={navigation.goBack} style={[styles.back]}>
          <Ionicons
            name="arrow-back"
            color={Theme.COLORS.PRIMARY}
            size={32}
          ></Ionicons>
        </TouchableOpacity>
        <Text style={styles.packagename}>
          {productName ? productName : "Product Package"}
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default HeaderReviews;

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
  back: {
    marginRight: 15,
    paddingVertical: 10,
  },
  packagename: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
});
