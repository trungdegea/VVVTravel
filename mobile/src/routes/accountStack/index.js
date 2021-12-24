import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../../screens/account";
import Profile from "../../screens/profile";
import EditAccount from "../../screens/editAccount";

const Stack = createNativeStackNavigator();

const accountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit Account" component={EditAccount} />
    </Stack.Navigator>
  );
};

export default accountStack;
