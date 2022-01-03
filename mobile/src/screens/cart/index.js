import React, { useEffect, useState } from "react";
import { Button, Dimensions, View } from "react-native";
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
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../redux/actions/carts";
import { useNavigation } from "@react-navigation/core";
import { style } from "../../styles/index";

const HEADER_MIN_HEIGHT = 80;
const HEADER_MAX_HEIGHT = 150;
const HEADER_SCROLL_OFFSET = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();

  useEffect(() => {
    setIsLogged(auth.isLogged);
  }, [auth]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCartData();
        setProducts(data);
      } catch (error) {}
    };
    getData();
  }, []);
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
      {isLogged ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
            { useNativeDriver: false }
          )}
          style={[{ paddingTop: 80 }]}
        >
          {products.length ? (
            products.map((product) => <CartItem canChange product={product} />)
          ) : (
            <BlankCart />
          )}
          <SafeAreaView style={[style.gap_xl]}></SafeAreaView>
          <SafeAreaView style={[style.gap_xl]}></SafeAreaView>
          <SafeAreaView style={[style.gap_xl]}></SafeAreaView>
          <SafeAreaView style={[style.gap_sm]}></SafeAreaView>
        </ScrollView>
      ) : (
        <SafeAreaView style={[{ paddingTop: 80 }]}>
          <Text>Please Login to see your carts</Text>
          <Button
            onPress={() => {
              navigation.navigate("SignIn");
            }}
            title="go to Login"
            color="#841584"
          />
        </SafeAreaView>
      )}

      {products.length && isLogged ? (
        <CartFooter products={products} navigation={navigation} />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default Cart;
