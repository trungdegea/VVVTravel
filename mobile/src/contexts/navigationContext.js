import React, { createContext, useContext } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children, ...props }) => {
  return <NavigationContext.Provider value={props}>{children}</NavigationContext.Provider>;
};

const useNavigation = () => {
  const navigationContext = useContext(NavigationContext);
  return navigationContext ? navigationContext : null;
}

export {NavigationProvider, useNavigation};
