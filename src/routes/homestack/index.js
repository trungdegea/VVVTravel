import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/home";
import Packagedetail from "../../screens/packagedetail";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Cart from "../../screens/cart";

const Stack = createNativeStackNavigator();
const tabHiddenRoutes = ["package", "Destination", "Category", "Cart",];

const HomeStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
    return () => {
      
    };
  }, [navigation, route]);
  
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {},
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="package" component={Packagedetail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default HomeStack;
