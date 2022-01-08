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
          // backgroundColor: backgroundIconColor,
          elevation: 4
        }}
      >
        <Image source={{ uri: url }} style={{ width: 56, height: 56, borderRadius: 999,}} />
      </View>
      <Text style={styles.categoryName}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Category;
