import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// styles
import { styles } from "./style";

const Category = ({ iconColor, backgroundIconColor, iconName, children }) => {
  return (
    <View style={styles.categoryContainer}>
      <View
        style={{
          ...styles.categoryIconBox,
          backgroundColor: backgroundIconColor,
        }}
      >
        <MaterialIcons
          name={iconName}
          style={styles.categoryIcon}
          color={iconColor}
        />
      </View>
      <Text style={styles.categoryName}>{children}</Text>
    </View>
  );
};

export default Category;
