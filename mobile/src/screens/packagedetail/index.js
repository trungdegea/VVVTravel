import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BookedTogether from "../../components/BookedTogether";
import DatePicker from "../../components/DatePicker";
import Expect from "../../components/Expect";
import GoogleMap from "../../components/GoogleMap";
import HeaderPackage from "../../components/Headers/package";
import PackageInfo from "../../components/PackageInfo";
import Review from "../../components/Review";
import Slider from "../../components/Slider";
import { getPackageData } from "../../redux/actions/package";
// import { SliderBox } from "react-native-image-slider-box";

export default function Packagedetail({ navigation, route }) {
  const { id } = route.params;
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [date, setDate] = useState(new Date().toDateString());
  useLayoutEffect(() => {
    const getdataProduct = async () => {
      const packageData = await getPackageData(id);
      setProduct(packageData);
      setImages(packageData?.images);
    };
    getdataProduct();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.body}>
        <HeaderPackage navigation={navigation} />
        <Slider images={images} />
        <PackageInfo name={product.name} />
        <DatePicker date={date} setDate={setDate} />
        <Review />
        <BookedTogether />
        <GoogleMap />
        <Expect images={images} />
      </SafeAreaView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text>{product.price}</Text>
          <Text style={styles.btn_add}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  body: {
    flex: 9,
  },
  footer: {
    flex: 1,
    zIndex: 100,
    backgroundColor: "orange",
    height: 30,
  },
  btn_add: {
    color: "#fff",
    fontSize: 18,
  },
});
