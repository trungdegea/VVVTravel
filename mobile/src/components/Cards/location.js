import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { API_URL } from "@env";

const Location = ({ image, name }) => {
  // console.log("image2", name);
  const imageUrl = image?.length
    ? API_URL + image[0].url
    : "https://via.placeholder.com/400x300.png";
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("LocationDetail", { name });
  };

  return (
    <TouchableOpacity onPress={pressHandler}>
      <SafeAreaView style={styles.cardContainer}>
        <Image source={{ uri: imageUrl }} style={styles.img} />
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
