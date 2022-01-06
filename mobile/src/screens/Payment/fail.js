import React, { useLayoutEffect, useCallback } from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Theme } from "../../constants";
import Button from "../../shared/button";
import { useNavigation } from "@react-navigation/core";

const { width, height } = Dimensions.get("window");

const Failed = () => {
  const navigation = useNavigation();


  const goHome = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "Home",
        },
      ],
    });
  }, []);

  useLayoutEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      goHome
    );

    return () => backHandler.remove();
  });

  return (
    <SafeAreaView style={styles.statusContainer}>
      <SafeAreaView style={styles.header}>
        <AntDesign name="closecircleo" size={50} color={Theme.COLORS.WHITE} />
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <Text style={[styles.quote]}>
          We're very sorry about this inconvenience. Hope you enjoy our sites.
          Stay safe, stay merry.
        </Text>
        <SafeAreaView style={styles.btnContainer}>
          <Button
            textColor={Theme.COLORS.WHITE}
            bgColor={Theme.COLORS.ERROR}
            title={"GO HOME"}
            onPress={goHome}
          />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Failed;

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
    backgroundColor: Theme.COLORS.ERROR,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    padding: 20,
  },
  quote: {
    textAlign: "center",
    fontSize: 16,
  },
  btnContainer: {
    width: 120,
    alignSelf: "center",
    marginTop: 30,
  },
});
