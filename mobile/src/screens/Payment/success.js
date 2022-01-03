import React from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Theme } from "../../constants";
import Button from "../../shared/button";
import { useNavigation } from "@react-navigation/core";

const {width, height} = Dimensions.get("window");

const Success = () => {

  const navigation = useNavigation();

  const goHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "Home",
        }
      ]
    })
  }

  return (
    <SafeAreaView style={styles.statusContainer}>
      <SafeAreaView style={styles.header}>
        <AntDesign name="checkcircleo" size={50} color={Theme.COLORS.WHITE} />
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <Text style={[styles.quote]}>
          Thanks for your order. We hope that you're gonna have good trips. Stay
          safe, stay merry.
        </Text>
        <SafeAreaView style={styles.btnContainer}>
          <Button
            textColor={Theme.COLORS.WHITE}
            bgColor={Theme.COLORS.SUCCESS}
            title={"GO HOME"}
            onPress={goHome}
          />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Success;

const styles = StyleSheet.create({
  statusContainer: {
    width: 0.8 * width,
    alignSelf: "center",
    height: 300,
    backgroundColor: Theme.COLORS.WHITE,
    marginTop: 100,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 8,
  },
  header: {
    height: 100,
    width: "100%",
    backgroundColor: Theme.COLORS.SUCCESS,
    justifyContent: "center",
    alignItems: "center",
  },
  body:{
    padding: 20
  },
  quote:{
    textAlign: "center",
    fontSize: 16,
  },
  btnContainer: {
    width: 120,
    alignSelf: "center",
    marginTop: 30,
  }
});
