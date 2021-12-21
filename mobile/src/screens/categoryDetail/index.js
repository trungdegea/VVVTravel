import React, { useState } from "react";
import { View, ScrollView, Animated } from "react-native";

// styles
import { style as globalStyle } from "../../styles/index";

// components
import Categories from "../../components/Categories";
import RecentlyViewed from "../../components/RecentlyViewed/home";
import AwesomeDeals from "../../components/AwesomeDeals";
import Title from "../../components/Title";
import ThingsToDo from "../../components/ThingsToDo";
import Destinations from "../../components/Destinations";
import HeaderLocation from "../../components/Headers/location";
import Slider from "../../components/Slider";
import { Theme } from "../../constants";
import ProductsInCate from "../../components/ProductsInCate";

const HEADER_SCROLL_OFFSET = 70;

const CategoryDetail = ({ route, navigation }) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));


  // fake data
  const [images, setImages] = useState([
    {
      id: 0,
      url: "https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2021_09_20/world_tourism_day_2021_to_focus_on_tourism_for_inclusive_growth.jpg",
      decription: "dicription bla bla bla bla 0",
    },
    {
      id: 1,
      url: "https://unctad.org/sites/default/files/2021-08/2021-08-03_commentary_tourism_1200x675.jpg",
      decription: "dicription bla bla bla bla 1",
    },
    {
      id: 2,
      url: "https://vir.com.vn/stores/news_dataimages/hung/052021/04/08/vietnams-mice-tourism-expected-to-explode-after-covid-19.jpg",
      decription: "dicription bla bla bla bla 2",
    },
    {
      id: 3,
      url: "https://vir.com.vn/stores/news_dataimages/hung/052021/04/08/vietnams-mice-tourism-expected-to-explode-after-covid-19.jpg",
      decription: "dicription bla bla bla bla 3",
    },
  ]);
  const categories = [
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
  const item = [
    {
      id: 0,
      name: "lorem ipsum qua troi luon ne asd",
      thumb: "https://picsum.photos/400/300",
      price: 2000000,
      rate: 4.2,
      numOfRates: 20000,
    },
    {
      id: 1,
      name: "lorem ipsum qua troi luon ne asd",
      thumb: "https://picsum.photos/400/300",
      price: 2000000,
      rate: 4.2,
      numOfRates: 20000,
    },
    {
      id: 2,
      name: "lorem ipsum qua troi luon ne asd",
      thumb: "https://picsum.photos/400/300",
      price: 2000000,
      rate: 4.2,
      numOfRates: 20000,
    },
    {
      id: 3,
      name: "lorem ipsum qua troi luon ne asd",
      thumb: "https://picsum.photos/400/300",
      price: 2000000,
      rate: 4.2,
      numOfRates: 20000,
    },
    {
      id: 4,
      name: "lorem ipsum qua troi luon ne asd",
      thumb: "https://picsum.photos/400/300",
      price: 2000000,
      rate: 4.2,
      numOfRates: 20000,
    },
    {
      id: 5,
      name: "lorem ipsum qua troi luon ne asd",
      thumb: "https://picsum.photos/400/300",
      price: 2000000,
      rate: 4.2,
      numOfRates: 20000,
    },
    {
      id: 6,
      name: "lorem ipsum qua troi luon ne asd",
      thumb: "https://picsum.photos/400/300",
      price: 2000000,
      rate: 4.2,
      numOfRates: 20000,
    },
    {
      id: 7,
      name: "lorem ipsum qua troi luon ne asd",
      thumb: "https://picsum.photos/400/300",
      price: 2000000,
      rate: 4.2,
      numOfRates: 20000,
    },
  ];

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
        <Slider images={images} />

        {/* Categories */}
        <View style={globalStyle.gap_sm}></View>
        <Categories data={categories} />

        {/* Categories */}
        <View style={globalStyle.gap_sm}></View>
        <ProductsInCate data={item} />

        <View style={globalStyle.gap_md}></View>
      </ScrollView>
    </>
  );
};

export default CategoryDetail;
