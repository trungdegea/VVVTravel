import React, { useMemo, useRef, useState } from "react";
import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector } from "react-redux";
import Button from "../../shared/button";
import { Theme } from "../../constants";
import { useNavigation } from "@react-navigation/core";
import SmallLoading from "../Loading/small";
import axios from "../../utilities/http";

const castToOrderItems = (products = []) =>
  products.map(({ product, quantity }) => ({ product: product.id, quantity }));
const getTotal = (products = []) =>
  products.reduce((prev, { product }) => prev + product.price, 0);
const castToArrayCartIds = (products = []) => products.map(({ id }) => id);

export default function ContactInfoCheckout({ products }) {
  const navigation = useNavigation();
  const auth = useSelector((state) => state.auth);

  const orderItems = useMemo(() => castToOrderItems(products), [products]);
  const total = useMemo(() => getTotal(products), [products]);
  const cartIds = useMemo(() => castToArrayCartIds(products), [products]);
  console.log(cartIds);

  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef({
    email: auth.user.email,
    username: auth.user.username,
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("+84");
  const [items, setItems] = useState([
    { label: "+60", value: "+60" },
    { label: "+72", value: "+72" },
    { label: "+84", value: "+84" },
    { label: "+85", value: "+85" },
    { label: "+86", value: "+86" },
  ]);

  const createOrder = async () => {
    setIsLoading(true);
    try {
      const checkoutPromise = axios.post("/orders", {
        items: orderItems,
        username: inputRef.current.username,
        email: inputRef.current.email,
      });
      const removeCartsPromise = axios.post("/carts/deletes", {
        ids: cartIds,
      });

      const [{ transaction, id }, removeCartsCount] = await Promise.all([
        checkoutPromise,
        removeCartsPromise,
      ]);
      navigation.navigate("MyStripeCheckout", {
        transaction,
        orderId: id,
      });
    } catch (err) {
      Alert.alert(
        "Error",
        "An error occurred when server created checking out session!!",
        [
          {
            text: "Cancel",
            onPress: () => setIsLoading(false),
          },
        ],
        {
          cancelable: true,
          onDismiss: () => setIsLoading(true),
        }
      );
      setIsLoading(false);
    }
  };

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
          placeholder={"Please enter your fullname !!!"}
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
          style={[styles.inputPhonenumber, { marginHorizontal: 0 }]}
          placeholder={"Please enter your phone number !!!"}
        />
      </View>
      <View style={styles.namecontact}>
        <Text style={styles.country}>Email(for updates on your booking)</Text>
        <TextInput
          defaultValue={auth.user.email}
          style={[styles.inputPhonenumber, { marginHorizontal: 0 }]}
          placeholder={"Please enter your email !!!"}
        />
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>{total} đ</Text>
      </View>
      <View style={[{ paddingHorizontal: 10 }]}>
        {isLoading ? (
          <SmallLoading size={50} />
        ) : (
          <Button
            title={"Checkout"}
            bgColor={Theme.COLORS.PRIMARY}
            textColor={Theme.COLORS.WHITE}
            onPress={() => {
              createOrder();
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
