import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import ContactInfoCheckout from "../../components/ContactInfoCheckout";
import CheckoutHeader from "../../components/Headers/checkout";
import PackageCheckout from "../../components/PackageCheckout";
import {style} from "../../styles/index";


const data = [
  {
    name: "Klook Exclusive Joint Offer: Cordis, Hong Kong x Keigo Stay Together",
    decription: "Double Bubbles staycation + Superior Room .......",
    voucher: 1,
    time: "21 Dec 2021",
    price: 4179941,
  },
  {
    name: "Klook Exclusive Joint Offer: Cordis, Hong Kong x Keigo Stay Together",
    decription: "Double Bubbles staycation + Superior Room .......",
    voucher: 2,
    time: "21 Dec 2021",
    price: 5179941,
  },
  {
    name: "Klook Exclusive Joint Offer: Cordis, Hong Kong x Keigo Stay Together",
    decription: "Double Bubbles staycation + Superior Room .......",
    voucher: 3,
    time: "21 Dec 2021",
    price: 6179941,
  },
];

const Checkout = ({ navigation }) => {
  return (
    <SafeAreaView>
      {/*Header*/}
      <CheckoutHeader navigation={navigation} />
      {/*Body*/}
      <ScrollView style={[{ paddingTop: 60 }]}>
        <PackageCheckout data={data} />
        <ContactInfoCheckout />
        
        <SafeAreaView style={[style.gap_md]}></SafeAreaView>
        <SafeAreaView style={[style.gap_md]}></SafeAreaView>
        <SafeAreaView style={[style.gap_md]}></SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
