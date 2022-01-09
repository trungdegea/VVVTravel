import React, { useLayoutEffect } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import SignUpForm from "../../components/Forms/SignUp";
import BasicHeader from "../../components/Headers/basic";
import { style } from "../../styles";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

import { styles } from "./style";

const SignUp = () => {
  const { isLogged } = useSelector((state) => state.auth);
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
      <BasicHeader title="Sign Up" />

      {/* body */}
      <ScrollView style={[{ paddingTop: 70 }]}>
        <SafeAreaView style={[styles.container]}>
          <SignUpForm />
        </SafeAreaView>

        {/* ending gap */}
        <SafeAreaView style={style.gap_xl}></SafeAreaView>
        <SafeAreaView style={style.gap_xl}></SafeAreaView>
        <SafeAreaView style={style.gap_md}></SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
