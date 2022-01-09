import React from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";

// styles
import { styles } from "./style";

const CategoryLoading = () => {
  return (
    <TouchableOpacity style={styles.categoryContainer}>
      <View
        style={{
          ...styles.categoryIconBox,
          backgroundColor: "grey",
          elevation: 4,
        }}
      >
        <SafeAreaView
          style={{
            width: 56,
            height: 56,
            borderRadius: 999,
            backgroundColor: "grey",
          }}
        ></SafeAreaView>
      </View>
      <SafeAreaView
        style={{ width: 50, height: 20, backgroundColor: "grey" }}
      ></SafeAreaView>
    </TouchableOpacity>
  );
};

export default CategoryLoading;
