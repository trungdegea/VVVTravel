import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import SignUpForm from "../../components/Forms/SignUp";
import BasicHeader from "../../components/Headers/basic";
import { style } from "../../styles";


import {styles} from "./style"

const SignUp = () => {
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


