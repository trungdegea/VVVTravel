import React, { useState } from "react";
import { View, ScrollView, Animated, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

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

const LocationDetail = ({ route }) => {
  const dispatch = useDispatch();
  const dataHome = useSelector((state) => state.home);
  const { image, name, id } = route.params;
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

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
        <Slider images={image} />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        {/* Categories */}
        <View style={globalStyle.gap_sm}></View>
        <Categories data={dataHome.categories} />

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
          <ThingsToDo data={dataHome.products} />
        </View>

        {/* Other destinations */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Other destinations"></Title>
          <View style={globalStyle.gap_sm}></View>
          <Destinations
            data={dataHome.destinations.filter((location) => location.id != id)}
          />
        </View>

        <View style={globalStyle.gap_lg}></View>
        <View style={globalStyle.gap_lg}></View>
      </ScrollView>
    </>
  );
};

export default LocationDetail;
