import React, { useState } from "react";
import {
  View,
  ScrollView,
  Animated
} from "react-native";

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

const HEADER_SCROLL_OFFSET = 70;

const LocationDetail = ({ navigation }) => {

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
  const destinations = [
    {
      id: "0",
      name: "Ha Noi",
      thumbnail: "https://picsum.photos/400",
    },
    {
      id: "1",
      name: "Ha Noi",
      thumbnail: "https://picsum.photos/400",
    },
    {
      id: "2",
      name: "Ha Noi",
      thumbnail: "https://picsum.photos/400",
    },
    {
      id: "3",
      name: "Ha Noi",
      thumbnail: "https://picsum.photos/400",
    },
    {
      id: "4",
      name: "Ha Noi",
      thumbnail: "https://picsum.photos/400",
    },
    {
      id: "5",
      name: "Ha Noi",
      thumbnail: "https://picsum.photos/400",
    },
    {
      id: "6",
      name: "Ha Noi",
      thumbnail: "https://picsum.photos/400",
    },
    {
      id: "7",
      name: "Kuralar Lumbur",
      thumbnail: "https://picsum.photos/400",
    },
    {
      id: "8",
      name: "HCMC",
      thumbnail: "https://picsum.photos/400",
    },
  ];
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
  const recentViews = [
    {
      id: "1",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum qua troi luon ne asd",
      price: "200000",
    },
    {
      id: "2",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      price: "200000",
    },
    {
      id: "3",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      price: "200000",
    },
    {
      id: "4",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      price: "200000",
    },
    {
      id: "5",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      price: "200000",
    },
    {
      id: "6",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      price: "200000",
    },
  ];
  const things = [
    {
      id: "1",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum qua troi luon ne asd",
      rating: 4.3,
      price: "200000",
      location: "Ha Noi",
    },
    {
      id: "2",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      rating: 4.3,
      price: "200000",
      location: "Ha Noi",
    },
    {
      id: "3",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      rating: 4.3,
      price: "200000",
      location: "Ha Noi",
    },
    {
      id: "4",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      rating: 4.3,
      price: "200000",
      location: "Ha Noi",
    },
    {
      id: "5",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      rating: 4.3,
      price: "200000",
      location: "Ha Noi",
    },
    {
      id: "6",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      rating: 4.3,
      price: "200000",
      location: "Ha Noi",
    },
  ];


  const headerBg = scrollY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"],
    extrapolate: "clamp",
  });
  const color = scrollY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", Theme.COLORS.BLACK],
    extrapolate: "clamp",
  });
  const searchBgColor = scrollY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: ["rgba(255, 255, 255, .3)", "rgba(255, 255, 255, .3)", "#ddd"],
    extrapolate: "clamp",
  });
  const focusSearchBgColor = scrollY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: [ "rgba(40, 40, 40, .5)", "rgba(40, 40, 40, .5)", Theme.COLORS.INPUT, ],
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

        {/* Recently viewed */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Recently Viewed" hasMore={true}></Title>
          <View style={globalStyle.gap_sm}></View>
          <RecentlyViewed data={recentViews} />
        </View>

        {/* Recently viewed */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Awesome deals" hasMore={true}></Title>
          <View style={globalStyle.gap_sm}></View>
          <AwesomeDeals />
        </View>

        {/* Top things to do */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Top things to do" hasMore></Title>
          <View style={globalStyle.gap_sm}></View>
          <ThingsToDo data={things} />
        </View>

        {/* Incredible destinations */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Incredible destinations"></Title>
          <View style={globalStyle.gap_sm}></View>
          <Destinations data={destinations} />
        </View>

        <View style={globalStyle.gap_lg}></View>
        <View style={globalStyle.gap_lg}></View>
      </ScrollView>
    </>
  );
};

export default LocationDetail;
