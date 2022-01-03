import React, { useEffect, useLayoutEffect, useState } from "react";
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

const HEADER_MIN_HEIGHT = 80;
const HEADER_MAX_HEIGHT = 150;
const HEADER_SCROLL_OFFSET = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Cart = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const data = useSelector((state) => state.carts);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const getData = async () => {
      dispatch(await getCartData());
    };
    getData();
  }, []);

  useEffect(() => {
    setProducts(data?.datacart || []);
  }, [data]);

  useEffect(() => {}, []);
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

  const gotoSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView>
      {/* header top */}
      <CartHeader navigation={navigation} />

      {/* body */}
      {auth.isLogged ? (
        <SafeAreaView style={[{ paddingTop: 200 }]}>
          {products ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
                { useNativeDriver: false }
              )}
              style={[{ paddingTop: 80 }]}
            >
              {products.map((product) => (
                <CartItem key={product.id} canChange product={product} />
              ))}
            </ScrollView>
          ) : (
            <BlankCart />
          )}
          <CartFooter products={products} navigation={navigation} />
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <Text
            style={[{ paddingTop: 200, flex: 1, alignItems: "center" }]}
          ></Text>
          <Button onPress={gotoSignIn} title="go to Login" color="#841584" />
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default Cart;
