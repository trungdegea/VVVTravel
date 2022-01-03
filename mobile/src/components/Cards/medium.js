import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Card = ({ id, image, title, price, rating, location }) => {
  const navigation = useNavigation();
  const auth = useSelector((state) => state.auth);

  const pressHandler = async () => {
    navigation.navigate("package", { id });
    // console.log(auth.isLogged);
    if (auth.isLogged) {
      const item = await AsyncStorage.getItem("recently");
      // console.log("item", item);
      const newArr = [item];
      newArr.unshift(id);
      await AsyncStorage.setItem("recently", newArr.toString());
    }
  };

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
        <Text style={styles.price}>{price} ₫</Text>
      </SafeAreaView>
    </TouchableOpacity>
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
});

export default Card;
