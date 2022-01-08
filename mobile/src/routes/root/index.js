import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

// options
import { tabBarOption } from "./option";

// shared
import CustomedHeader from "../../shared/header";

// screens
import Wishes from "../../screens/wishes";
import HomeStack from "../homestack";
import DealStack from "../dealstack";
import BookingStack from "../bookingStack";
import AccountStack from "../accountStack";

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

  const StackListener = ({ navigation, route }) => ({
    tabPress: () => navigation.navigate(route.name),
  });

  return (
    <Tab.Navigator screenOptions={{ ...tabBarOption, header: () => {} }}>
      <Tab.Screen
        name="HomeStack"
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
        name="DealStack"
        component={DealStack}
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
        name="BookingStack"
        component={BookingStack}
        options={{
          title: "BookingStack",
          tabBarIcon: ({ color, focused }) => {
            return createIcon("newspaper", color, focused);
          },
          tabBarLabel: ({ color, focused }) => {
            return labelOnActive("Booking", color, focused);
          },
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return createIcon("person", color, focused);
          },
          tabBarLabel: ({ color, focused }) => {
            return labelOnActive("Account", color, focused);
          },
          unmountOnBlur: true,
        }}
        // listeners={StackListener}
      />
    </Tab.Navigator>
  );
};

export default Root;
