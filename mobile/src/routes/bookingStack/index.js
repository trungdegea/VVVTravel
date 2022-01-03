import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Booking from "../../screens/booking";
import Cart from "../../screens/cart";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import SignIn from "../../screens/signIn";
import SignUp from "../../screens/signUp";
import Checkout from "../../screens/checkout";
import MyStripeCheckout from "../../screens/StripeCheckout";

const Stack = createNativeStackNavigator();
const tabHiddenRoutes = ["Cart", "Package"];

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
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Cart" component={Cart} />
      {/* <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="MyStripeCheckout" component={MyStripeCheckout} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
