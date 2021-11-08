import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
} from "react-native";
import HeaderAccount from "../../components/Headers/account";
import HeaderAccountScroll from "../../components/Headers/accountScroll";
import { Theme } from "../../constants";


const HEADER_MIN_HEIGHT = 80;
const HEADER_MAX_HEIGHT = 200;
const HEADER_SCROLL_OFFSET = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const data = Array.from({ length: 30 });

const Account = () => {
  const [scrollOffsetY, setScrollOffsetY] = useState(new Animated.Value(0));

  // get value on scrolling
  const color = scrollOffsetY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: [
      "white",
      "white",
      Theme.COLORS.BLACK,
    ],
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
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* header top */}
        <HeaderAccount />

        <SafeAreaView>
          <Text>There is account page!</Text>
        </SafeAreaView>
        {data.map((_, i) => (
          <SafeAreaView key={i} style={styles.row}>
            <Text>{i}</Text>
          </SafeAreaView>
        ))}
      </ScrollView>
      {/* header */}

      <HeaderAccountScroll bgColor={bgColor} color={color} />
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
});
