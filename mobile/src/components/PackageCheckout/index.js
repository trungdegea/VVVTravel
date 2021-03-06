import React from "react";
import {
  SafeAreaView,
  Text
} from "react-native";
import { styles } from "./style";

const PackageCheckout = ({ data }) => {
  const booking = () => {};

  return (
    <SafeAreaView style={styles.container}>
      {data &&
        data.map((item, index) => (
          <SafeAreaView style={styles.package} key={index}>
            <Text style={styles.name}>{item?.product.name}</Text>
            <Text style={styles.decription}>{item?.product.description}</Text>
            <Text style={[styles.voucher, {fontStyle: "italic"}]}>{item?.product.price} đ</Text>
            <Text style={styles.voucher}>{item.quantity} x People</Text>
            <Text style={styles.date}>{item?.date}</Text>
            <Text style={styles.price}>{item?.product.price * item.quantity} đ</Text>
            {/* <TouchableOpacity style={styles.btn} onPress={booking}>
              <AntDesign name="pluscircleo" size={20} color="orange" />
              <Text style={styles.btn_name}>Enter booking info</Text>
            </TouchableOpacity> */}
          </SafeAreaView>
        ))}
    </SafeAreaView>
  );
};
export default PackageCheckout;
