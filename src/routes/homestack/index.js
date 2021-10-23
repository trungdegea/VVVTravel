import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/home";
import Packagedetail from "../../screens/packagedetail";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="package" component={Packagedetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
