import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Deals from "../../screens/deals";

const Stack = createNativeStackNavigator();

const DealStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fa9025",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="DealsPage" component={Deals} />
    </Stack.Navigator>
  );
};

export default DealStack;
