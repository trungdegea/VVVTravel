import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, Image } from "react-native";

// components
import SmallCard from "../Cards/small";


const RecentlyViewed = ({data}) => {
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.item}>
        <SmallCard image={item.img} title={item.package} price={item.price} />
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
