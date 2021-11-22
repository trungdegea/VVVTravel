import React from "react";
import { View, Text, ScrollView } from "react-native";
import HotDealsToday from "../../components/HotDealsToday";
import Offers from "../../components/Offers";
import VoucherList from "../../components/VoucherList";

const Deals = () => {
  return (
    <ScrollView>
      <VoucherList />
      <HotDealsToday />
      <Offers />
    </ScrollView>
  );
};

export default Deals;
