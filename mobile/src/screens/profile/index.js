import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";

const data = {
  url: "https://meta.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-42.jpg",
  fullname: "john",
  country: "",
  title: "",
  country_code: "",
  phone_number: "19001080",
  email: "vvvtravel@touring.com",
};
export default function Profile() {
  const [image, setImage] = useState(data.url);
  const [fullName, onChangeFullName] = useState(data.fullname);
  const [phoneNumber, onChangePhoneNumber] = useState(data.phone_number);
  const [email, onChangeEmail] = useState(data.email);

  useEffect(() => {
    const checkRequest = async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permisson denied!");
      }
    };
    if (Platform.OS !== "web") {
      checkRequest();
    }
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const saveData = () => {};
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.img_frame}>
          <Image style={styles.img} source={{ uri: image }} />
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
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={onChangeFullName}
        />
      </View>

      <View style={styles.input_frame}>
        <Text style={styles.topic_name}>
          Phone Number (In case of emergency)
        </Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
        />
      </View>
      <View style={styles.input_frame}>
        <Text style={styles.topic_name}>Email (To Reveive Voucher)</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
        />
      </View>
      <TouchableOpacity>
        <Button onPress={saveData} title="Save" color={"orange"}></Button>
      </TouchableOpacity>
    </ScrollView>
  );
}
