import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, Image } from "react-native";

// components
import LargeCard from "../Cards/large";

const ProductsInCate = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.item}>
        <LargeCard
          image={item.thumb}
          title={item.name}
          price={item.price}
          rate={item.rate}
          numOfReviews={item.numOfRates}
        />
      </SafeAreaView>
    );
  };

  return (
    <>
      {data?.length > 0 && data.map((item) => (
        <SafeAreaView style={styles.item} key={item.id}>
          <LargeCard
            image={item.thumb}
            title={item.name}
            price={item.price}
            rate={item.rate}
            numOfReviews={item.numOfRates}
          />
        </SafeAreaView>
      ))}
      
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.area}
        keyExtractor={(item, index) => index.toString()}
      /> */}
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

export default ProductsInCate;
