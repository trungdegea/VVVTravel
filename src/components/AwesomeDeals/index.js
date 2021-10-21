import React from "react";
import { SafeAreaView, Text } from "react-native";

import SmallCard from "../Cards/small_2";

import { styles } from "./style";

const AwesomeDeals = () => {
  return (
    <SafeAreaView style={styles.area}>
      <SafeAreaView style={{ ...styles.item, paddingLeft: 0 }}>
        <SmallCard
          title="Promo code wallet"
          backgroundColor="#ff7a00"
          badge="SRV"
        />
      </SafeAreaView>
      <SafeAreaView style={{ ...styles.item, paddingRight: 0 }}>
        <SmallCard title="On sale" backgroundColor="pink" badge="Book now" />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default AwesomeDeals;
