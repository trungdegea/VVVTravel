import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView, Text, FlatList, Dimensions } from "react-native";

// styles
import { styles } from "./style";

// components
import Category from "./Category";

// utilities
import { splitToSubArrays } from "../../utilities";

const Categories = ({ data }) => {
  // console.log(data);
  // use states
  const [categorySlider, setCategorySlider] = useState([]);
  const [activeDot, setActiveDot] = useState(0);

  // use effects
  useEffect(() => {
    setCategorySlider(splitToSubArrays(data));
    return () => {};
  }, [data]);

  const { width, height } = Dimensions.get("window");

  const renderSlider = useCallback(
    ({ item }) => {
      return (
        <SafeAreaView style={{ ...styles.categoriesContainer, width: width }}>
          {item &&
            item.map((cate) => (
              <Category
                iconColor={"black"}
                backgroundIconColor={"orange"}
                iconName={"local-dining"}
                key={cate.id}
              >
                {cate.name}
              </Category>
            ))}
        </SafeAreaView>
      );
    },
    [categorySlider]
  );

  const changeDot = ({ nativeEvent }) => {
    const curr = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (activeDot !== curr) {
      setActiveDot(curr);
    }
  };

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
        {categorySlider &&
          categorySlider.length > 1 &&
          categorySlider.map((_, index) => (
            <SafeAreaView
              style={activeDot === index ? styles.dot_active : styles.dot}
              key={index}
            ></SafeAreaView>
          ))}
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Categories;
