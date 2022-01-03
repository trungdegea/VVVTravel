import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// styles
import { styles } from "./style";
import { useNavigation } from "@react-navigation/core";

const Category = ({ iconColor, backgroundIconColor, iconName, children }) => {
  const navigation = useNavigation();

  const moveToCate = useCallback(() => {
    navigation.navigate("CategoryDetail", { message: "1" });
  }, []);

  return (
    <TouchableOpacity style={styles.categoryContainer} onPress={moveToCate}>
      <View
        style={{
          ...styles.categoryIconBox,
          // backgroundColor: backgroundIconColor,
        }}
      >
        {/* <MaterialIcons
          name={iconName}
          style={styles.categoryIcon}
          color={iconColor}
        /> */}
        <Image
          source={require("../../../../assets/icons/truck.svg")}
          style={{ width: 36, height: 36 }}
        />
      </View>
      <Text style={styles.categoryName}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Category;
