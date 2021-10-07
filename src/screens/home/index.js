import React from "react";
import { View, Text } from "react-native";


// styles
import {style as globalStyle} from "../../styles/index";

// components
import Categories from "../../components/Categories";

const Home = () => {
  return (
    <>
      <View style={globalStyle.gap_sm}></View>
      <Categories></Categories>
    </>
  );
};

export default Home;
