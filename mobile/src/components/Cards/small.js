import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const SmallCard = ({ id, image, title, price }) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("package", { id });
  };
  return (
    <TouchableOpacity onPress={pressHandler}>
      <SafeAreaView style={styles.cardContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>{price} ₫</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    width: 105,
    height: 150,
    backgroundColor: "white",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, .4)",
    shadowRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 4 / 3,
  },
  title: {
    fontWeight: "bold",
    paddingHorizontal: 7,
    height: 40,
  },
  price: {
    fontWeight: "bold",
    paddingHorizontal: 7,
  },
});

export default SmallCard;
