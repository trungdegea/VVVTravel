import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import ContactInfoCheckout from "../../components/ContactInfoCheckout";
import CheckoutHeader from "../../components/Headers/checkout";
import PackageCheckout from "../../components/PackageCheckout";
import { style } from "../../styles/index";

const Checkout = ({ navigation, route }) => {
  const products = route.params.data;
  return (
    <SafeAreaView>
      {/*Header*/}
      <CheckoutHeader navigation={navigation} />
      {/*Body*/}
      <ScrollView style={[{ paddingTop: 60 }]}>
        <PackageCheckout data={products} />
        <ContactInfoCheckout products={products} />

        <SafeAreaView style={[style.gap_md]}></SafeAreaView>
        <SafeAreaView style={[style.gap_md]}></SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
