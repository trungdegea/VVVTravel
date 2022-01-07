import React, { useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, Image } from "react-native";

// components
import LargeCard from "../Cards/large";

const ProductsInCate = ({ data }) => {
  useEffect(() => {}, [data]);
  return (
    <>
      {data?.length > 0 &&
        data.map((item) => (
          <SafeAreaView style={styles.item} key={item.id}>
            <LargeCard
              image={`http://103.101.161.57:1338${item.images[0].url}`}
              title={item.name}
              price={item.price}
              rate="3"
              numOfReviews="100"
            />
          </SafeAreaView>
        ))}
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
