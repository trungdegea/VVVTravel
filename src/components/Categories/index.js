import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView, Text, FlatList, Dimensions } from "react-native";

// styles
import { styles } from "./style";

// components
import Category from "./Category";

// utilities
import { splitToSubArrays } from "../../utilities";

// fake data
const data = [
  {
    id: "1",
    name: "Food & Dinning",
    iconName: "fastfood",
    iconColor: "#ff7a00",
    backgroundIconColor: "rgba(255, 122, 0, .1)",
  },
  {
    id: "2",
    name: "Food & Dinning",
    iconName: "fastfood",
    iconColor: "#ff7a00",
    backgroundIconColor: "rgba(255, 122, 0, .1)",
  },
  {
    id: "3",
    name: "Food & Dinning",
    iconName: "fastfood",
    iconColor: "#ff7a00",
    backgroundIconColor: "rgba(255, 122, 0, .1)",
  },
  {
    id: "4",
    name: "Food & Dinning",
    iconName: "fastfood",
    iconColor: "#ff7a00",
    backgroundIconColor: "rgba(255, 122, 0, .1)",
  },
  {
    id: "5",
    name: "Food & Dinning",
    iconName: "fastfood",
    iconColor: "#ff7a00",
    backgroundIconColor: "rgba(255, 122, 0, .1)",
  },
  {
    id: "6",
    name: "Food & Dinning",
    iconName: "fastfood",
    iconColor: "#ff7a00",
    backgroundIconColor: "rgba(255, 122, 0, .1)",
  },
  {
    id: "7",
    name: "Food & Dinning",
    iconName: "fastfood",
    iconColor: "#ff7a00",
    backgroundIconColor: "rgba(255, 122, 0, .1)",
  },
  {
    id: "8",
    name: "Food & Dinning",
    iconName: "fastfood",
    iconColor: "#ff7a00",
    backgroundIconColor: "rgba(255, 122, 0, .1)",
  },
  {
    id: "9",
    name: "Food & Dinning",
    iconName: "fastfood",
    iconColor: "#ff7a00",
    backgroundIconColor: "rgba(255, 122, 0, .1)",
  },
  {
    id: "10",
    name: "Food & Dinning",
    iconName: "fastfood",
    iconColor: "#ff7a00",
    backgroundIconColor: "rgba(255, 122, 0, .1)",
  },
];

const Categories = () => {
  // use states
  const [categorySlider, setCategorySlider] = useState([]);
  const [activeDot, setActiveDot] = useState(0);

  // use effects
  useEffect(() => {
    setCategorySlider(splitToSubArrays(data));
    return () => {};
  }, []);



  const { width, height } = Dimensions.get("window");

  const renderSlider = useCallback(({ item }) => {
    return (
      <SafeAreaView style={{ ...styles.categoriesContainer, width: width }}>
        {item &&
          item.map((cate) => (
            <Category
              iconColor={cate.iconColor}
              backgroundIconColor={cate.backgroundIconColor}
              iconName={cate.iconName}
              key={cate.id}
            >
              {cate.name}
            </Category>
          ))}
      </SafeAreaView>
    );
  }, [categorySlider]);

  const changeDot = ({nativeEvent}) => {
    const curr = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (activeDot !== curr){
      setActiveDot(curr)
    }
  }

  return (
    <SafeAreaView style={styles.area}>
      <FlatList
        data={categorySlider}
        renderItem={renderSlider}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        scrollEnabled={true}
        onScroll={changeDot}
      ></FlatList>
      <SafeAreaView style={styles.dotContainer}>
        {(categorySlider && categorySlider.length > 1) &&
          categorySlider.map((_, index) => (
            <SafeAreaView style={activeDot === index ? styles.dot_active : styles.dot} key={index}></SafeAreaView>
          ))}
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Categories;
