import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { getDataHome } from "../../redux/actions/home";

const { width, height } = Dimensions.get("window");

const LargeCard = ({ image, title, price, rate, numOfReviews, id }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const pressHandler =  async () => {
    navigation.navigate("package", { id });
    const item = await AsyncStorage.getItem("recently");
    let newArr = [];
    if (item) {
      newArr = [item];
    }
    newArr.unshift(id);
    await AsyncStorage.setItem("recently", newArr.toString());
    dispatch(await getDataHome());
  };
  return (
    <TouchableOpacity onPress={pressHandler}>
      <SafeAreaView style={styles.cardContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <SafeAreaView style={[styles.reviews]}>
          <SafeAreaView style={[styles.rateContainer]}>
            <MaterialCommunityIcons
              name="star"
              size={20}
              color={Theme.COLORS.PRIMARY}
              style={[{ marginRight: 5 }]}
            />
            <Text style={[{ color: Theme.COLORS.PRIMARY, fontWeight: "bold" }]}>
              {rate}
            </Text>
          </SafeAreaView>
          <Text style={[{ color: Theme.COLORS.MUTED, fontStyle: "italic" }]}>
            {numOfReviews + (numOfReviews > 1 ? " reviews" : " reivew")}
          </Text>
        </SafeAreaView>
        <SafeAreaView style={[styles.priceContainer]}>
          <Text style={styles.price}>{price} ₫</Text>
          <Text style={[{ color: Theme.COLORS.MUTED, fontStyle: "italic" }]}>
            book now
          </Text>
        </SafeAreaView>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    width: "100%",
    height: width * 0.75 + 100, //image height + it's below stuffs
    backgroundColor: "white",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, .4)",
    shadowRadius: 5,
    overflow: "hidden",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 4 / 3,
  },
  title: {
    fontWeight: "bold",
    paddingHorizontal: 15,
    height: 40,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15,
  },
  price: {
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  reviews: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  rateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: Theme.COLORS.BG_PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    marginBottom: 10,
  },
});

export default LargeCard;
