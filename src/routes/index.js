import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Root from "./root";
import HomeStack from "./homestack";

const Routes = () => {
  return (
    <NavigationContainer>
      <Root></Root>
    </NavigationContainer>
  );
};

export default Routes;
