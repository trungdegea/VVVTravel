import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, SafeAreaView, Image, Touchable, TouchableOpacity } from "react-native";


const Location = ({ image, name }) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("LocationDetail", { name });    
  }

  return (
    <TouchableOpacity onPress={pressHandler}>
      <SafeAreaView style={styles.cardContainer}>
        <Image source={{ uri: image }} style={styles.img} />
        <Text style={styles.name}>{name}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default Location;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: "white",
    height: 60,
    width: 150,
    alignItems: "center",
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 6,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    flex: 1,
  },
});
