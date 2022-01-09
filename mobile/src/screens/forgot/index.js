import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ForgotForm from "../../components/Forms/ForgotFrom";
import BasicHeader from "../../components/Headers/basic";


import {styles} from "./style"

const Forgot = () => {
  return (
    <SafeAreaView>
      {/* header */}
      <BasicHeader title="Forgot password" />

      {/* body */}
      <ScrollView style={[{ paddingTop: 80 }]}>
        <SafeAreaView style={[styles.container]}>
          <ForgotForm />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forgot;


