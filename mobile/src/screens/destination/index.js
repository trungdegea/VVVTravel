import React from "react";
import {
  View,
  Text,
  ScrollView,
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

const Home = ({ navigation }) => {
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* Categories */}
        <View style={globalStyle.gap_sm}></View>
        <Categories></Categories>

        {/* Recently viewed */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Recently Viewed" hasMore={true}></Title>
          <View style={globalStyle.gap_sm}></View>
          <RecentlyViewed />
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
          <ThingsToDo />
        </View>

        {/* Incredible destinations */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Incredible destinations"></Title>
          <View style={globalStyle.gap_sm}></View>
          <Destinations />
        </View>

        <View style={globalStyle.gap_sm}></View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("package", { msg: "From Screen Home" })
          }
        >
          <Text>Click Me!</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Home;
