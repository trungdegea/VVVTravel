import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

// options
import { tabBarOption } from "./option";

// shared
import CustomedHeader from "../../shared/header";

// screens
import Home from "../../screens/home";
import Deals from "../../screens/deals";
import Wishes from "../../screens/wishes";
import Booking from "../../screens/booking";
import Account from "../../screens/account";
import HomeStack from "../homestack";

const Tab = createBottomTabNavigator();

const Root = () => {
  const createIcon = (name, color, focused) => {
    name += !focused ? "-outline" : "";
    return <Ionicons name={name} size={24} color={color} />;
  };

  const labelOnActive = (name, color, focused) => {
    return (
      <Text
        style={{
          fontWeight: focused ? "bold" : "normal",
          color: color,
          fontSize: focused ? 14 : 12,
        }}
      >
        {name}
      </Text>
    );
  };

  return (
    <Tab.Navigator screenOptions={{ ...tabBarOption, header: () => {} }}>
      <Tab.Screen
        name="Explore"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return createIcon("map", color, focused);
          },
          tabBarLabel: ({ color, focused }) => {
            return labelOnActive("Explore", color, focused);
          },
          // header: ({}) => {
          //   <CustomedHeader/>
          // }
        }}
      />
      <Tab.Screen
        name="Deals"
        component={Deals}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return createIcon("airplane", color, focused);
          },
          tabBarLabel: ({ color, focused }) => {
            return labelOnActive("Deals", color, focused);
          },
        }}
      />
      <Tab.Screen
        name="Wishes"
        component={Wishes}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return createIcon("heart", color, focused);
          },
          tabBarLabel: ({ color, focused }) => {
            return labelOnActive("Wishes", color, focused);
          },
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          title: "Booking",
          tabBarIcon: ({ color, focused }) => {
            return createIcon("newspaper", color, focused);
          },
          tabBarLabel: ({ color, focused }) => {
            return labelOnActive("Booking", color, focused);
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return createIcon("person", color, focused);
          },
          tabBarLabel: ({ color, focused }) => {
            return labelOnActive("Account", color, focused);
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Root;
