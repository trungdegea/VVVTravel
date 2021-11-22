import React, { useRef, useState } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Card from "../../components/Cards/medium";

import { styles } from "./style";

const data = [
  {
    id: "1",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum qua troi luon ne asd",
    rating: 4.3,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "2",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    rating: 4.3,
    price: "200000",
    location: "Ha Noi",
  },
];
const data2 = [
  {
    id: "1",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum qua troi luon ne asd",
    rating: 4.3,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "2",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    rating: 4.3,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "3",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    rating: 4.3,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "4",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    rating: 4.3,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "5",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    rating: 4.3,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "6",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    rating: 4.3,
    price: "200000",
    location: "Ha Noi",
  },
];

const Tour = ({ image, location, title, price, voucher }) => {
  return (
    <View style={styles.tour}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.booking}>
          <TouchableOpacity style={styles.btnbook}>
            <Text style={styles.namebtn}>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Wishes = () => {
  const [click, setClick] = useState("saved");
  let content;
  const renderItem = ({ item }) => {
    return (
      <Tour
        image={item.img}
        location={item.location}
        title={item.package}
        price={item.price}
      />
    );
  };
  const handleWishes_saved = () => {
    setClick("saved");
  };
  const handleWishes_recently = () => {
    setClick("recently");
  };
  switch (click) {
    case "saved":
      content = <FlatList data={data} renderItem={renderItem} />;
      break;
    case "recently":
      content = <FlatList data={data2} renderItem={renderItem} />;
      break;
    default:
      break;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View stye={styles.header}>
          <Text style={styles.header_name}>Wishes</Text>
        </View>
        <View style={styles.option}>
          <TouchableOpacity
            style={
              click == "saved"
                ? styles.option_choose_active
                : styles.option_choose
            }
            onPress={handleWishes_saved}
          >
            <Text
              style={
                click == "saved" ? styles.option_active : styles.option_name
              }
            >
              Saved
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              click == "recently"
                ? styles.option_choose_active
                : styles.option_choose
            }
            onPress={handleWishes_recently}
          >
            <Text
              style={
                click == "recently" ? styles.option_active : styles.option_name
              }
            >
              Recently viewed
            </Text>
          </TouchableOpacity>
        </View>
        <View>{content}</View>
      </SafeAreaView>
    </>
  );
};

export default Wishes;
