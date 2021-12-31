// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Routes from "./src/routes";


export default function App() {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <Routes></Routes>
    </Provider>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#f7f7f7",
  },
});
