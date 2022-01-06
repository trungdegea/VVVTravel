import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/home";
import Packagedetail from "../../screens/packagedetail";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Cart from "../../screens/cart";
import LocationDetail from "../../screens/locationDetail";
import Checkout from "../../screens/checkout";
import CategoryDetail from "../../screens/categoryDetail";
import MyStripeCheckout from "../../screens/StripeCheckout";
import Success from "../../screens/Payment/success";
import Failed from "../../screens/Payment/fail";
import Reviews from "../../screens/Reviews";

const Stack = createNativeStackNavigator();
const tabHiddenRoutes = [
  "package",
  "Destination",
  "Category",
  "Cart",
  "LocationDetail",
  "CategoryDetail",
  "Checkout",
  "MyStripeCheckout",
  "Success",
  "Failed",
];

const HomeStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
    return () => {};
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
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="LocationDetail" component={LocationDetail} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
      <Stack.Screen name="MyStripeCheckout" component={MyStripeCheckout} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Failed" component={Failed} />
      <Stack.Screen name="Reviews" component={Reviews} />
    </Stack.Navigator>
  );
};

export default HomeStack;
