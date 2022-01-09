import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LoginForm from "../../components/Forms/Login";
import BasicHeader from "../../components/Headers/basic";
import {useNavigation} from "@react-navigation/core";


import {styles} from "./style"

const SignIn = () => {

  const {isLogged} = useSelector(state => state.auth);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (isLogged) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Account" }],
      });
    }
  }, []);

  return (
    <SafeAreaView>
      {/* header */}
      <BasicHeader title="Sign In" />

      {/* body */}
      <ScrollView style={[{ paddingTop: 80 }]}>
        <SafeAreaView style={[styles.container]}>
          <LoginForm />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;


