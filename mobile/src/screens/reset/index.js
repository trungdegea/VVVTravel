import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ResetForm from "../../components/Forms/ResetForm";
import BasicHeader from "../../components/Headers/basic";
import { style } from "../../styles";


import {styles} from "./style"

const Reset = () => {
  return (
    <SafeAreaView>
      {/* header */}
      <BasicHeader title="Reset password"/>

      {/* body */}
      <ScrollView style={[{ paddingTop: 70 }]}>
        <SafeAreaView style={[styles.container]}>
          <ResetForm />
        </SafeAreaView>

        {/* ending gap */}
        <SafeAreaView style={style.gap_xl}></SafeAreaView>
        <SafeAreaView style={style.gap_xl}></SafeAreaView>
        <SafeAreaView style={style.gap_md}></SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reset;


