import React, { useEffect, useState } from "react";
import { View, ScrollView, Animated, Text } from "react-native";

// styles
import { style as globalStyle } from "../../styles/index";

// components
import Categories from "../../components/Categories";
import HeaderLocation from "../../components/Headers/location";
import Slider from "../../components/Slider";
import { Theme } from "../../constants";
import ProductsInCate from "../../components/ProductsInCate";
import { useSelector } from "react-redux";

const HEADER_SCROLL_OFFSET = 70;

const CategoryDetail = ({ route }) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const { info } = route.params;
  const dataHome = useSelector((state) => state.home);

  const headerBg = scrollY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: [
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 1)",
    ],
    extrapolate: "clamp",
  });
  const color = scrollY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: [
      "rgb(255, 255, 255)",
      "rgb(255, 255, 255)",
      Theme.COLORS.BLACK,
    ],
    extrapolate: "clamp",
  });
  const searchBgColor = scrollY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: ["rgba(255, 255, 255, .3)", "rgba(255, 255, 255, .3)", "#ddd"],
    extrapolate: "clamp",
  });
  const focusSearchBgColor = scrollY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: [
      "rgba(40, 40, 40, .5)",
      "rgba(40, 40, 40, .5)",
      Theme.COLORS.INPUT,
    ],
    extrapolate: "clamp",
  });

  return (
    <>
      {/* header */}
      <HeaderLocation
        bgColor={headerBg}
        color={color}
        searchBgColor={searchBgColor}
        focusSearchBgColor={focusSearchBgColor}
      />

      {/* body */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* slider */}
        <Slider images={info.banners} />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {info?.name}
        </Text>
        {/* Categories */}
        <View style={globalStyle.gap_sm}></View>
        <Categories
          data={dataHome.categories.filter((cate) => cate.id != info.id)}
        />

        {/* Categories */}
        <View style={globalStyle.gap_sm}></View>
        <ProductsInCate data={info.products} />

        <View style={globalStyle.gap_md}></View>
      </ScrollView>
    </>
  );
};

export default CategoryDetail;
