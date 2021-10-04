import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "../../screens/home";
import Wishes from "../../screens/wishes";

const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => {
          <></>;
        }}
      />
      <Tab.Screen name="Wishes" component={Wishes} />
    </Tab.Navigator>
  );
};

export default Root;
