import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
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
import HeaderHome from "../../components/Headers/home";


const Home = ({ navigation }) => {
  // fake data
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

  return (
    <>
      {/* header */}
      <HeaderHome navigation={navigation} />

      {/* body */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={[
          {
            paddingTop: 70,
          },
        ]}
      >
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

export default Home;
