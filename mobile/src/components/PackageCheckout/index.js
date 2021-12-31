import React from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

const PackageCheckout = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.package}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.decription}>{item.decription}</Text>
        <Text style={styles.voucher}>{item.voucher} x Voucher</Text>
        <Text style={styles.date}>{item.time}</Text>
        <Text style={styles.price}>đ {item.price}</Text>
        <TouchableOpacity style={styles.btn}>
          <AntDesign name="pluscircleo" size={20} color="orange" />
          <Text style={styles.btn_name}>Enter booking info</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      /> */}
      {data &&
        data.map((item, index) => (
          <SafeAreaView style={styles.package} key={index}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.decription}>{item.decription}</Text>
            <Text style={styles.voucher}>{item.voucher} x Voucher</Text>
            <Text style={styles.date}>{item.time}</Text>
            <Text style={styles.price}>{item.price} đ</Text>
            <TouchableOpacity style={styles.btn}>
              <AntDesign name="pluscircleo" size={20} color="orange" />
              <Text style={styles.btn_name}>Enter booking info</Text>
            </TouchableOpacity>
          </SafeAreaView>
        ))}
    </SafeAreaView>
  );
};
export default PackageCheckout;
