import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import { formatPrice } from "../../utilities";

import { API_URL } from "@env";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

const Tour = ({ image, location, title, price, id }) => {
  const navigation = useNavigation();
  const img = image?.length
    ? API_URL + image[0].url
    : "https://via.placeholder.com/400x300.png";

  const gotoDetail = () => {
    console.log(id);
    navigation.navigate("HomeStack", {
      screen: "package",
      params: { id },
    });
  };
  return (
    <View style={styles.tour}>
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.price}>{formatPrice(price)}</Text>
        <View style={styles.booking}>
          <Text style={styles.pricevoucher}>
            From {formatPrice(price * 0.5)}
          </Text>
          <TouchableOpacity style={styles.btnbook} onPress={gotoDetail}>
            <Text style={styles.namebtn}>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function HotDealsToday() {
  const dataHome = useSelector((state) => state.home);
  const { products } = dataHome;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's hot deals</Text>
        <Text style={styles.decription}>
          11% off these experiences (ending soon!)
        </Text>
      </View>
      <SafeAreaView style={styles.content}>
        <Text>Ends in 1 day 18 : 55 : 42</Text>
        {products?.length &&
          products.map((item, index) => (
            <Tour
              key={item.id}
              image={item?.images}
              location={item?.location?.name}
              title={item?.name}
              price={item?.price}
              id={item?.id}
            />
          ))}
      </SafeAreaView>
    </SafeAreaView>
  );
}
