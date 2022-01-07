import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/auth";
import {useNavigation} from "@react-navigation/core";

export default function EditAccount() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const gotoReset = () => {
    navigation.navigate("");
  };
  const logout = async () => {
    dispatch(await logOut());
    navigation.reset({
      index: 0,
      routes: [{
        name: "HomeStack",
        params: {
          screen: "Home",
        }
      }]
    })
  }
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
      <TouchableOpacity style={styles.element} onPress={logout}>
        <Text style={styles.name_element}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
