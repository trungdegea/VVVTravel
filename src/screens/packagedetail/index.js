import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import BookedTogether from "../../components/BookedTogether";
import DatePicker from "../../components/DatePicker";
import Expect from "../../components/Expect";
import GoogleMap from "../../components/GoogleMap";
import PackageInfo from "../../components/PackageInfo";
import Review from "../../components/Review";
import Slider from "../../components/Slider";
// import { SliderBox } from "react-native-image-slider-box";

export default function Packagedetail() {
  const [images, setImages] = useState([
    {
      id: 0,
      url: "https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2021_09_20/world_tourism_day_2021_to_focus_on_tourism_for_inclusive_growth.jpg",
      decription: "dicription bla bla bla bla 0",
    },
    {
      id: 1,
      url: "https://unctad.org/sites/default/files/2021-08/2021-08-03_commentary_tourism_1200x675.jpg",
      decription: "dicription bla bla bla bla 1",
    },
    {
      id: 2,
      url: "https://vir.com.vn/stores/news_dataimages/hung/052021/04/08/vietnams-mice-tourism-expected-to-explode-after-covid-19.jpg",
      decription: "dicription bla bla bla bla 2",
    },
    {
      id: 3,
      url: "https://vir.com.vn/stores/news_dataimages/hung/052021/04/08/vietnams-mice-tourism-expected-to-explode-after-covid-19.jpg",
      decription: "dicription bla bla bla bla 3",
    },
  ]);
  const [date, setDate] = useState(new Date().toDateString());
  return (
    <ScrollView style={styles.container}>
      <Slider images={images} />
      <PackageInfo />
      <DatePicker date={date} setDate={setDate} />
      <Review />
      <BookedTogether />
      <GoogleMap />
      <Expect images={images} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
