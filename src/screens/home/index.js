import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

// styles
import { style as globalStyle } from "../../styles/index";

// components
import Categories from "../../components/Categories";

const Home = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={globalStyle.gap_sm}></View>
        <Categories></Categories>
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
