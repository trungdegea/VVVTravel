import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, Alert, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";
import { useDispatch } from "react-redux";
import { forgot, logOut } from "../../redux/actions/auth";
import {useNavigation} from "@react-navigation/core";
import {useSelector} from "react-redux";
import BasicHeader from "../../components/Headers/basic";
import { Images } from "../../constants";

export default function EditAccount() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    return () => setIsLoading(false);
  }, []);

  const gotoReset = async () => {
    setIsLoading(true);
    const result = dispatch(await forgot(auth.user.email));
    if (!result.payload.err) {
      Alert.alert(
        "Send reset request successfully",
        "Please check your email to get reset token",
        [
          {
            text: "OK",
            onPress: () =>
              navigation.reset({
                index: 0,
                routes: [{ name: "Account" }, { name: "Reset" }],
              }),
          },
        ]
      );
    } else {
      setIsLoading(false);
    }
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
    <SafeAreaView>
      <BasicHeader title="Account setting" />
      {isLoading && (
        <SafeAreaView style={styles.loadingLayer}>
          <Image source={Images.loading} style={{ width: 100, height: 100 }} />
        </SafeAreaView>
      )}
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
    </SafeAreaView>
  );
}
