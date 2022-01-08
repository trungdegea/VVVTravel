import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

// styles
import { styles } from "./style";
import { useNavigation } from "@react-navigation/core";

const Category = ({ info, backgroundIconColor, url, children }) => {
  const navigation = useNavigation();

  const moveToCate = useCallback(() => {
    navigation.navigate("CategoryDetail", { info });
  }, []);

  return (
    <TouchableOpacity style={styles.categoryContainer} onPress={moveToCate}>
      <View
        style={{
          ...styles.categoryIconBox,
          backgroundColor: backgroundIconColor,
        }}
      >
        <Image source={{ uri: url }} style={{ width: 36, height: 36 }} />
      </View>
      <Text style={styles.categoryName}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Category;
