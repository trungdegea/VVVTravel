import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const OfferCard = ({ image, title, price, voucher, rating, location }) => {
  return (
    <View style={styles.cardContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    width: 150,
    height: 220,
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
  },
});

export default OfferCard;