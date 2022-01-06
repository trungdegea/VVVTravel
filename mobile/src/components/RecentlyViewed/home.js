import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, Image } from "react-native";
import { API_URL } from "@env";

// components
import SmallCard from "../Cards/small";

const RecentlyViewed = ({ data }) => {
  const renderItem = ({ item }) => {
    const image = item?.images?.length
      ? API_URL + item.images[0].url
      : "https://via.placeholder.com/400x300.png";
    return (
      <SafeAreaView style={styles.item}>
        <SmallCard
          id={item?.id}
          image={image}
          title={item?.name}
          price={item?.price}
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

export default RecentlyViewed;
