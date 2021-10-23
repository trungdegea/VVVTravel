import React from "react";
import {
  FlatList,
  ListViewBase,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";

export default function PackageInfo() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.packagename}>
            Fairmont Singapore Couple & Family Staycation
          </Text>
        </View>
        <View style={styles.overrate}>
          <View style={styles.overrate_child}>
            <MaterialIcons name="star-rate" size={24} color="yellow" />
            <Text>4.6(1,234 reviews)</Text>
          </View>
          <View style={styles.overrate_child}>
            <MaterialIcons name="people" size={24} />
            <Text>9K+ Booked</Text>
          </View>
        </View>

        <View style={styles.voucher}>
          <AntDesign
            name="notification"
            size={24}
            color="black"
            style={{
              transform: [{ rotateY: "180deg" }],
            }}
          />
          <Text style={styles.voucher_info}>
            Get a FREE $50 VVVTravel Hotel voucher for your next booking (with a
            minimum spend of $200 limited to 1 voucher per VVVtravel user) when
            you use least $50 of your SingaporeRediscovers Vouchers on a
            VVVTravel staycation Hello
          </Text>
        </View>

        <View>
          <Text>Get a FREE $50 V</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
