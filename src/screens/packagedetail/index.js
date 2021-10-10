import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import Slider from "../../components/Slider";
// import { SliderBox } from "react-native-image-slider-box";

export default function Packagedetail() {
  const [images, setImages] = useState([
    {
      id: 0,
      url: "https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2021_09_20/world_tourism_day_2021_to_focus_on_tourism_for_inclusive_growth.jpg",
    },
    {
      id: 1,
      url: "https://unctad.org/sites/default/files/2021-08/2021-08-03_commentary_tourism_1200x675.jpg",
    },
    {
      id: 2,
      url: "https://vir.com.vn/stores/news_dataimages/hung/052021/04/08/vietnams-mice-tourism-expected-to-explode-after-covid-19.jpg",
    },
    {
      id: 3,
      url: "https://vir.com.vn/stores/news_dataimages/hung/052021/04/08/vietnams-mice-tourism-expected-to-explode-after-covid-19.jpg",
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Slider images={images} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
