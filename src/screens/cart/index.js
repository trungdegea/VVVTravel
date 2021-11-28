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
import CartHeader from "../../components/Headers/cart";
import { styles } from "./style";
import BlankCart from "../../components/Blank/cart";
import CartItem from "../../components/CartItem";
import CartFooter from "../../components/Footers/cart";

const HEADER_MIN_HEIGHT = 80;
const HEADER_MAX_HEIGHT = 150;
const HEADER_SCROLL_OFFSET = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Cart = ({ navigation }) => {
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
      {/* header top */}
      <CartHeader navigation={navigation} />

      {/* body */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        style={[{ paddingTop: 80 }]}
      >
        <BlankCart />

        <CartItem canChange />
      </ScrollView>

      {/* footer */}
      <CartFooter/>
    </SafeAreaView>
  );
};

export default Cart;
