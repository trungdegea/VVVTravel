import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";

const data = {
  url: "https://meta.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-42.jpg",
  family_name: "",
  first_name: "",
  country: "",
  title: "",
  country_code: "",
  phone_number: "",
  email: "vvvtravel@touring.com",
};
import CountryPicker, {
  getAllCountries,
  getCallingCode,
} from "react-native-country-picker-modal";
export default function Profile() {
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity>
        <View style={styles.img_frame}>
          <Image style={styles.img} source={{ uri: data.url }} />
          <Feather
            style={styles.iconedit}
            name="edit"
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>
      <View style={styles.input_frame}>
        <Text style={styles.topic_name}>
          Full name (as it appears on travel document)
        </Text>
        <TextInput style={styles.input} value={"please enter"} />
      </View>

      <View style={styles.input_frame}>
        <Text style={styles.topic_name}>
          Phone Number (In case of emergency)
        </Text>
        <TextInput style={styles.input} value={"please enter"} />
      </View>
      <View style={styles.input_frame}>
        <Text style={styles.topic_name}>Email (To Reveive Voucher)</Text>
        <TextInput style={styles.input} value={data.email} />
      </View>
    </ScrollView>
  );
}
