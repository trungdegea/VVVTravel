import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

export default function EditAccount({ navigation }) {
  const gotoReset = () => {
    navigation.navigate("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.element} onPress={gotoReset}>
        <Text style={styles.name_element}>Change Password</Text>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.element}>
        <Text style={styles.name_element}>Notification</Text>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.element}>
        <Text style={styles.name_element}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
