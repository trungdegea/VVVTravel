import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import LoginForm from "../../components/Forms/Login";
import BasicHeader from "../../components/Headers/basic";


import {styles} from "./style"

const SignIn = () => {
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


