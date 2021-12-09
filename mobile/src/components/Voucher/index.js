import React from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";

export default function Voucher({ name, decription }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topic}>
          <Text style={styles.topic_name}>{name}</Text>
        </View>
        <View style={styles.content}>
          <Text>{decription}</Text>
          <Text style={styles.dashedline}>---------------------------</Text>
        </View>
        <TouchableOpacity style={styles.btnclaim}>
          <Text style={styles.btnname}>Claim</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
