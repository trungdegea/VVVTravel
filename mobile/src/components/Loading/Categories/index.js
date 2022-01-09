import React, { useCallback } from "react";
import { SafeAreaView, Text, FlatList, Dimensions } from "react-native";

// styles
import { styles } from "./style";

// components
import CategoryLoading from "./Category";

// utilities

const CategoriesLoading = ({ data }) => {
  const { width, height } = Dimensions.get("window");
  const categorySlider = [[1, 2, 3, 4, 5, 6, 7, 8]];

  const renderSlider = useCallback(
    ({ item }) => {
      return (
        <SafeAreaView style={{ ...styles.categoriesContainer, width: width }}>
          {item && item.map((cate, index) => <CategoryLoading key={index} />)}
        </SafeAreaView>
      );
    },
    [categorySlider]
  );

  return (
    <SafeAreaView style={styles.area}>
      <FlatList
        data={categorySlider}
        renderItem={renderSlider}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
      ></FlatList>
    </SafeAreaView>
  );
};

export default CategoriesLoading;
