import React from "react";
import {
  FlatList,
  ListViewBase,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  MaterialIcons,
  Feather,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

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
            <MaterialIcons name="people" size={24} color="gray" />
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

        <View style={styles.rules}>
          <View style={styles.rules_info}>
            <FontAwesome5 name="clock" size={24} color="black" />
            <Text style={styles.rules_name}>Available from 21 Nov</Text>
          </View>
          <View style={styles.rules_info}>
            <Ionicons name="flash" size={24} color="black" />
            <Text style={styles.rules_name}>Instant Confirmation</Text>
          </View>
          <View style={styles.rules_info}>
            <FontAwesome5 name="comment-dollar" size={24} color="black" />
            <Text style={styles.rules_name}>No Canclellation</Text>
          </View>
          <View style={styles.rules_info}>
            <Feather name="printer" size={24} color="black" />
            <Text style={styles.rules_name}>
              Show mobile or printed voucher
            </Text>
          </View>
          <View style={styles.rules_info}>
            <FontAwesome5 name="globe-americas" size={24} color="black" />
            <Text style={styles.rules_name}>Englishh</Text>
          </View>
        </View>

        <View style={styles.benefit}>
          <View style={styles.benefit_info}>
            <Entypo name="dot-single" size={28} color="black" />
            <Text>
              1-night or 2-night stay in spacious Fairmont Room or luxurious
              Signature King Suite for 2 adults and 2 children below 12
            </Text>
          </View>
          <View style={styles.benefit_info}>
            <Entypo name="dot-single" size={28} color="black" />
            <Text>
              For the 3D2N stay, your 2nd night is at a 50% off room rate! Do
              note that the 2nd night is room only without any other inclusions.
              However, an extra bed for child will be provided even for both
              nights
            </Text>
          </View>
          <View style={styles.benefit_info}>
            <Entypo name="dot-single" size={28} color="black" />
            <Text>
              The hotel is rated 5 stars, ensuring a stylish and luxurious
              staycation
            </Text>
          </View>
          <View style={styles.benefit_info}>
            <Entypo name="dot-single" size={28} color="black" />
            <Text>
              At least one of the guiest have to bbe aged 21 years old or above
              to be eligible to check-in and register for a room
            </Text>
          </View>
          <View style={styles.benefit_info}>
            <Entypo name="dot-single" size={28} color="black" />
            <Text>
              The hotel is rated 5 stars, ensuring a stylish and luxurious
              staycation
            </Text>
          </View>
          <View style={styles.benefit_info}>
            <Entypo name="dot-single" size={28} color="black" />
            <Text>
              At least one of the guiest have to bbe aged 21 years old or above
              to be eligible to check-in and register for a room
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
