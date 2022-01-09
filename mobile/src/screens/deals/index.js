import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import HotDealsToday from "../../components/HotDealsToday";
import Offers from "../../components/Offers";
import VoucherList from "../../components/VoucherList";

const Deals = () => {
  return (
    <ScrollView >
      <VoucherList />
      <HotDealsToday />
      <Offers />
      <SafeAreaView style={{height: 20}}></SafeAreaView>
    </ScrollView>
  );
};

export default Deals;
