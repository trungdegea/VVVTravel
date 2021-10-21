import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, Image } from "react-native";

// components
import Card from "../Cards/medium";

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

const ThingsToDo = () => {
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.item}>
        <Card
          image={item.img}
          title={item.package}
          price={item.price}
          rating={item.rating}
          location={item.location}
        />
      </SafeAreaView>
    );
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.area}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  area: {
    marginBottom: 20,
    paddingHorizontal: -5,
  },
  item: {
    marginHorizontal: 5,
  },
});

export default ThingsToDo;
