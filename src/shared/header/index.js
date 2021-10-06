import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text>Customed Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue"
  }
})

export default Header;
