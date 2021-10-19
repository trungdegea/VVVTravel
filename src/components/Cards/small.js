import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native'

const SmallCard = ({image, title, price}) => {
  return (
    <SafeAreaView style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.price}>{price} ₫</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    width: 100,
    height: 140,
    backgroundColor: "white",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, .4)",
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 75,
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
