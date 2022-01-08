import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Account from "../../screens/account";
import SignIn from "../../screens/signIn";
import SignUp from "../../screens/signUp";
import EditAccount from "../../screens/editAccount";
import Profile from "../../screens/profile";

const Stack = createNativeStackNavigator();
const tabHiddenRoutes = ["SignIn", "SignUp"];

const AccountStack = ({ navigation, route }) => {
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
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit Account" component={EditAccount} />
    </Stack.Navigator>
  );
};

export default AccountStack;
