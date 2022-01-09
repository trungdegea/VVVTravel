import React, { useLayoutEffect, useState } from "react";
import {
  Animated,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import http from "../../utilities/http";

import BookedTogether from "../../components/BookedTogether";
import DatePicker from "../../components/DatePicker";
import Expect from "../../components/Expect";
import GoogleMap from "../../components/GoogleMap";
import HeaderPackage from "../../components/Headers/package";
import PackageInfo from "../../components/PackageInfo";
import Review from "../../components/Review";
import Slider from "../../components/Slider";
import { getPackageData } from "../../redux/actions/package";
import { formatPrice } from "../../utilities/index";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
// import { SliderBox } from "react-native-image-slider-box";

export default function Packagedetail({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [comments, setComments] = useState([]);
  const [date, setDate] = useState((new Date()).toISOString().substring(0, 10));
  const navigation = useNavigation();
  const auth = useSelector((state) => state.auth);

  const showConfirmPopup = () => {
    setShowPopup(!showPopup);
  };
  const addtoCarts = async () => {
    if (auth.isLogged && date && quantity) {
      const result = await http.post("/carts", {
        product: id,
        quantity: quantity,
        date: date,
      });
      navigation.goBack();
    } else {
      navigation.navigate("AccountStack", {
        screen: "SignIn",
      });
    }
  };

  useLayoutEffect(() => {
    const getdataProduct = async () => {
      const packageData = await getPackageData(id);
      setProduct(packageData);
      setName(packageData.name);
      setImages(packageData?.images);
      setComments(packageData.comments);
    };
    getdataProduct();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container_body}>
        <SafeAreaView style={styles.body}>
          <HeaderPackage navigation={navigation} />
          <Slider images={images} />
          <PackageInfo name={product.name} />
          <DatePicker date={date} setDate={setDate} />
          <Text style={styles.quantity_title}>Quantity</Text>
          <TextInput
            style={styles.quantity}
            placeholde="input your quantity"
            onChangeText={(value) =>
              setQuantity(parseInt(value) > 1 ? parseInt(value) : 1)
            }
            keyboardType="number-pad"
            keyboardAppearance="dark"
            defaultValue="1"
          />
          <Review comments={comments} name={product.name} id={id} />
          <BookedTogether />
          <GoogleMap />
          <Expect decription={product?.description} images={images} />
        </SafeAreaView>
      </ScrollView>
      <Animated.View style={styles.footer}>
        {showPopup ? (
          <View style={styles.popup}>
            <Button
              onPress={addtoCarts}
              style={styles.btn_confirm}
              title="Yes"
              color="#fcc630"
            />
            <Button
              onPress={showConfirmPopup}
              style={styles.btn_confirm}
              title="No"
              color="#7d796e"
            />
          </View>
        ) : (
          <View></View>
        )}
        <TouchableOpacity style={styles.footer_btn} onPress={showConfirmPopup}>
          <Text style={styles.price}>{formatPrice(product?.price)}</Text>
          <Text style={styles.btn_add}>Add To Cart</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  container_body: {
    flex: 9,
  },
  body: {
    flex: 1,
    marginBottom: 30,
  },
  footer: {
    flex: 1,
    position: "absolute",
    width: "100%",
    bottom: 0,
    overflow: "hidden",
  },
  footer_btn: {
    backgroundColor: "orange",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
  },
  btn_add: {
    color: "#fff",
    fontSize: 20,
  },
  popup: {
    flex: 1,
    // flexDirection: "row",
    width: "100%",
    height: 60,
  },
  btn_confirm: {},
  quantity_title: {
    paddingHorizontal: 20,
    fontSize: 20,
  },
  quantity: {
    paddingHorizontal: 20,
    borderColor: "#000",
    borderWidth: 1,
    marginHorizontal: 20,
    height: 40,
  },
});
