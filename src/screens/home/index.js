import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

// styles
import { style as globalStyle } from "../../styles/index";

// components
import Categories from "../../components/Categories";
import RecentlyViewed from "../../components/RecentlyViewed/home";
import Title from "../../components/Title";

const Home = () => {
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
          <RecentlyViewed></RecentlyViewed>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
