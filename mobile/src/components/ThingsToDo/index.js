import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, Image } from "react-native";

// components
import Card from "../Cards/medium";



const ThingsToDo = ({data}) => {
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.item}>
        <Card
          id = {item.id}
          image={item.img}
          title={item.name}
          price={item.price}
          rating={item.rating ? item.rating : 0}
          location={item.location?.name}
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
