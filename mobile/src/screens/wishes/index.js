import React, { useRef, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { formatPrice } from "../../utilities";
import { API_URL } from "@env";

import { styles } from "./style";

const data = [];
import { useSelector } from "react-redux";

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
          <TouchableOpacity style={styles.btnbook} onPress={gotoDetail}>
            <Text style={styles.namebtn}>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Wishes = () => {
  const dataHome = useSelector((state) => state.home);
  const { dataRecently } = dataHome;
  const [click, setClick] = useState("saved");
  let content;
  const renderItem = ({ item }) => {
    return (
      <Tour
        image={item?.images}
        location={item?.location?.name}
        title={item?.name}
        price={item?.price}
        id={item?.id}
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
      content = (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      );
      break;
    case "recently":
      content = (
        <FlatList
          data={dataRecently}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      );
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
