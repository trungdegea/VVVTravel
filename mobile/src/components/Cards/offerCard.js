import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const OfferCard = ({ image, title, price, voucher, rating, location }) => {
  
  const navigation = useNavigation();

  const pressHandler = () => {
    // navigation.navigate("package", {})
  }

  return (
    <TouchableOpacity onPress={pressHandler}>
      <SafeAreaView style={styles.cardContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.rating}>
          <Ionicons name="star" size={16} style={styles.star} color="#ff7a00" />{" "}
          {rating}
        </Text>
        <Text style={styles.price}>{price * voucher} ₫</Text>
        <Text style={styles.pricereal}>{price} ₫</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    width: 150,
    height: 240,
    backgroundColor: "white",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, .4)",
    shadowRadius: 5,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 4 / 3,
  },
  rating: {
    fontWeight: "bold",
    paddingHorizontal: 7,
    height: 20,
    color: "#ff7a00",
  },
  star: {
    paddingRight: 10,
  },
  title: {
    fontWeight: "bold",
    paddingHorizontal: 7,
    height: 40,
  },
  location: {
    paddingHorizontal: 7,
    opacity: 0.5,
  },
  price: {
    fontWeight: "bold",
    paddingHorizontal: 7,
  },
  pricereal: {
    color: "gray",
    textDecorationLine: "line-through",
    paddingHorizontal: 7,
  },
});

export default OfferCard;
