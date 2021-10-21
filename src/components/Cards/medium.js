import React from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Card = ({ image, title, price, rating, location }) => {
  return (
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
      <Text style={styles.price}>{price} ₫</Text>
    </SafeAreaView>
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
    opacity: .5
  },
  price: {
    fontWeight: "bold",
    paddingHorizontal: 7,
  },
});

export default Card;
