import React from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import Voucher from "../Voucher";

const vouchers = [
  {
    id: "1",
    name: "Voucher1",
    decription: "discount 50% for all tours...",
  },
  {
    id: "2",
    name: "Voucher2",
    decription: "discount 50% for all tours...",
  },
  {
    id: "3",
    name: "Voucher3",
    decription: "discount 50% for all tours...",
  },
];

const VoucherList = () => {
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <Voucher name={item.name} decription={item.decription} />
      </SafeAreaView>
    );
  };
  return (
    <>
      <FlatList
        data={vouchers}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        // keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default VoucherList;
