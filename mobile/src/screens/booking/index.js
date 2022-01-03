import React, { useState } from "react";
import { Dimensions } from "react-native";
import {
  SafeAreaView,
  Text,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderBooking from "../../components/Headers/booking";
import HeaderBookingScroll from "../../components/Headers/bookingScroll";
import { styles } from "./style";
import BlankBooking from "../../components/Blank/booking";
import CartItem from "../../components/CartItem";

const HEADER_MIN_HEIGHT = 80;
const HEADER_MAX_HEIGHT = 150;
const HEADER_SCROLL_OFFSET = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Booking = ({ navigation }) => {
  const [scrollOffsetY, setScrollOffsetY] = useState(new Animated.Value(0));

  // get value on scrolling
  const opacity = scrollOffsetY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });
  const top = scrollOffsetY.interpolate({
    inputRange: [0, 0.9 * HEADER_SCROLL_OFFSET, HEADER_SCROLL_OFFSET],
    outputRange: [-70, -70, 0],
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
        <HeaderBooking navigation={navigation} />

        <BlankBooking />

        {/* <CartItem /> */}
      </ScrollView>

      {/* header */}
      <HeaderBookingScroll
        top={top}
        opacity={opacity}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Booking;
