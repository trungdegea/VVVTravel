import React, { useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderAccount from "../../components/Headers/account";
import HeaderAccountScroll from "../../components/Headers/accountScroll";
import { Ionicons } from "@expo/vector-icons";
import { Theme, Images } from "../../constants";
import { styles } from "./style";

const HEADER_MIN_HEIGHT = 80;
const HEADER_MAX_HEIGHT = 200;
const HEADER_SCROLL_OFFSET = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Account = ({ navigation }) => {
  const [scrollOffsetY, setScrollOffsetY] = useState(new Animated.Value(0));


  // get value on scrolling
  const opacity = scrollOffsetY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });
  const color = scrollOffsetY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: ["#fff", "#fff", Theme.COLORS.BLACK],
    extrapolate: "clamp",
  });
  const bgColor = scrollOffsetY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: [
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 1)",
    ],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView>
      {/* body */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* header top */}
        <HeaderAccount navigation={navigation} />
        <SafeAreaView style={[styles.container]}>
          <TouchableOpacity style={[styles.row]}>
            <SafeAreaView style={[styles.rowTitle, { flex: 1 }]}>
              <Ionicons
                name="md-chatbox-ellipses-outline"
                style={[{ marginRight: 8 }]}
                size={20}
                color={Theme.COLORS.PRIMARY}
              />
              <Text style={[styles.black, { fontSize: 14, flex: 1 }]}>
                Review
              </Text>
            </SafeAreaView>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color={Theme.COLORS.MUTED}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.row]}>
            <SafeAreaView style={[styles.rowTitle, { flex: 1 }]}>
              <Ionicons
                name="wallet-outline"
                style={[{ marginRight: 8 }]}
                size={20}
                color={Theme.COLORS.PRIMARY}
              />
              <Text style={[styles.black, { fontSize: 14, flex: 1 }]}>
                Manage payment methods
              </Text>
            </SafeAreaView>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color={Theme.COLORS.MUTED}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.row]}>
            <SafeAreaView style={[styles.rowTitle, { flex: 1 }]}>
              <Ionicons
                name="md-person-outline"
                style={[{ marginRight: 8 }]}
                size={20}
                color={Theme.COLORS.PRIMARY}
              />
              <Text style={[styles.black, { fontSize: 14, flex: 1 }]}>
                Manage booking info
              </Text>
            </SafeAreaView>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color={Theme.COLORS.MUTED}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.row]}>
            <SafeAreaView style={[styles.rowTitle, { flex: 1 }]}>
              <Ionicons
                name="card-outline"
                style={[{ marginRight: 8 }]}
                size={20}
                color={Theme.COLORS.PRIMARY}
              />
              <Text style={[styles.black, { fontSize: 14, flex: 1 }]}>
                My YCARD
              </Text>
            </SafeAreaView>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color={Theme.COLORS.MUTED}
            />
          </TouchableOpacity>
        </SafeAreaView>

        {/* banner */}
        <SafeAreaView style={[styles.container, { paddingVertical: 0 }]}>
          <TouchableOpacity style={[styles.row, { paddingVertical: 0 }]}>
            <SafeAreaView style={{ flex: 1 }}>
              <Text style={styles.text1Banner}>Share joy & get rewarded</Text>
              <Text style={styles.text2Banner}>
                Get ₫75.000 for each successful referral!
              </Text>
            </SafeAreaView>
            <Image source={Images.saveMoney} style={styles.imgBanner} />
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={[styles.container, { marginBottom: 30 }]}>
          <TouchableOpacity style={[styles.row]}>
            <SafeAreaView style={[styles.rowTitle, { flex: 1 }]}>
              <Ionicons
                name="earth-outline"
                style={[{ marginRight: 8 }]}
                size={20}
                color={Theme.COLORS.PRIMARY}
              />
              <Text style={[styles.black, { fontSize: 14, flex: 1 }]}>
                Countriy/region, language & currency
              </Text>
            </SafeAreaView>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color={Theme.COLORS.MUTED}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.row]}>
            <SafeAreaView style={[styles.rowTitle, { flex: 1 }]}>
              <Ionicons
                name="desktop-outline"
                style={[{ marginRight: 8 }]}
                size={20}
                color={Theme.COLORS.PRIMARY}
              />
              <Text style={[styles.black, { fontSize: 14, flex: 1 }]}>
                Manage login methods
              </Text>
            </SafeAreaView>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color={Theme.COLORS.MUTED}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.row]}>
            <SafeAreaView style={[styles.rowTitle, { flex: 1 }]}>
              <Ionicons
                name="help-circle-outline"
                style={[{ marginRight: 8 }]}
                size={20}
                color={Theme.COLORS.PRIMARY}
              />
              <Text style={[styles.black, { fontSize: 14, flex: 1 }]}>
                Help center
              </Text>
            </SafeAreaView>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color={Theme.COLORS.MUTED}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.row]}>
            <SafeAreaView style={[styles.rowTitle, { flex: 1 }]}>
              <Ionicons
                name="phone-portrait-outline"
                style={[{ marginRight: 8 }]}
                size={20}
                color={Theme.COLORS.PRIMARY}
              />
              <Text style={[styles.black, { fontSize: 14, flex: 1 }]}>
                About us
              </Text>
            </SafeAreaView>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color={Theme.COLORS.MUTED}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>

      {/* header */}
      <HeaderAccountScroll
        navigation={navigation}
        bgColor={bgColor}
        color={color}
        opacity={opacity}
      />
    </SafeAreaView>
  );
};

export default Account;
