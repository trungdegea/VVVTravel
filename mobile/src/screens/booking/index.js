import React, { useLayoutEffect, useState } from "react";
import http from "../../utilities/http";
import {
  SafeAreaView,
  Text,
  ScrollView,
  Animated,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import HeaderBooking from "../../components/Headers/booking";
import HeaderBookingScroll from "../../components/Headers/bookingScroll";
import BlankBooking from "../../components/Blank/booking";
import {API_URL} from "@env";

const HEADER_MIN_HEIGHT = 80;
const HEADER_MAX_HEIGHT = 150;
const HEADER_SCROLL_OFFSET = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
import { useDispatch, useSelector } from "react-redux";

const Booking = ({ navigation }) => {
  const [scrollOffsetY, setScrollOffsetY] = useState(new Animated.Value(0));
  const auth = useSelector((state) => state.auth);

  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    const getData = async () => {
      if (auth.isLogged) {
        const data = await http.get("/orders");
        setProducts(data);
      } else {
      }
    };
    getData();
  }, []);

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

        {/* <CartItem /> */}

        {products?.length ? (
          products.map((product, index) => (
            <TouchableOpacity style={styles.box} key={index}>
              <View style={styles.box_left}>
                <Image
                  source={{
                    uri: product?.items[0]?.product?.images.length
                      ? API_URL + product?.items[0]?.product?.images[0].url
                      : "https://aphoto.vn/wp-content/uploads/2019/01/anhdep6.jpg",
                  }}
                  style={{ width: 150, height: 100 }}
                />
                <Text style={styles.text}>
                  Status:{" "}
                  <Text style={styles.info}>{product?.items[0].status}</Text>
                </Text>
              </View>
              <View style={styles.box_right}>
                <Text style={styles.text}>
                  Name: {product?.items[0]?.product.name}
                </Text>
                <Text style={styles.text}>
                  Quantity: {product?.items[0]?.quantity}
                </Text>
                <Text style={styles.text}>
                  Date: {product.created_at.slice(0, 10)}
                </Text>
                <Text style={styles.text}>
                  Price: {product?.items[0]?.product.price}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <BlankBooking />
        )}
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

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box_left: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  box_right: {
    paddingVertical: 20,
    marginRight: 50,
  },
  text: {
    flex: 1,
    width: "90%",
    fontSize: 18,
    overflow: "hidden",
    flexWrap: "wrap",
    color: "#000",
  },
  info: {
    color: "#a88400",
    fontWeight: "bold",
  },
});

export default Booking;
