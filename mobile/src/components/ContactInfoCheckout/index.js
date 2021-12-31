import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Picker,
  StyleSheet,
} from "react-native";
import { styles } from "./style";
import DropDownPicker from "react-native-dropdown-picker";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../shared/button";
import { Theme } from "../../constants";
import { useNavigation } from "@react-navigation/core";

export default function ContactInfoCheckout() {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [textfirst, setTextfirst] = useState(
    "Please use English characters only"
  );
  const [textsecond, setTextsecond] = useState(
    "Please use English characters only"
  );
  const [phonenumber, setPhonenumber] = useState(
    "Please enter your phone number"
  );
  const [email, setEmail] = useState("Please enter your email");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("+84");
  const [items, setItems] = useState([
    { label: "+60", value: "+60" },
    { label: "+72", value: "+72" },
    { label: "+84", value: "+84" },
    { label: "+85", value: "+85" },
    { label: "+86", value: "+86" },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nameheader}>Contact info</Text>
      </View>
      <Text style={styles.decription}>
        We'll only contact you about updates to your booking
      </Text>
      <View style={styles.namecontact}>
        <Text>Full name</Text>
        <TextInput
          defaultValue={auth.user.username || ""}
          style={styles.input}
        />
      </View>
      <View style={styles.phonenumber}>
        <Text style={styles.country}>Country/region</Text>
        <DropDownPicker
          style={styles.picker}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          autoScroll={true}
          disableBorderRadius={true}
        />
        <TextInput
          value={phonenumber}
          style={[styles.inputPhonenumber, { marginHorizontal: 0 }]}
        />
      </View>
      <View style={styles.namecontact}>
        <Text style={styles.country}>Email(for updates on your booking)</Text>
        <TextInput
          defaultValue={auth.user.email}
          style={[styles.inputPhonenumber, { marginHorizontal: 0 }]}
        />
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>2500000 đ</Text>
      </View>
      <View style={[{paddingHorizontal: 10}]}>
        <Button
          title={"Checkout"}
          bgColor={Theme.COLORS.PRIMARY}
          textColor={Theme.COLORS.WHITE}
          onPress={() => {navigation.navigate("MyStripeCheckout");}}
        />
      </View>
    </SafeAreaView>
  );
}
