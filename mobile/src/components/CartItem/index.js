import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Theme } from "../../constants";
import { API_URL } from "@env";

const CartItem = ({ canChange, product }) => {
  const image = product?.product.images.length
    ? API_URL + product?.product.images[0].url
    : "https://placekitten.com/512/512";
  return (
    <SafeAreaView style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <Image source={{ uri: image }} style={[styles.thumb]} />
        <SafeAreaView style={styles.info}>
          <Text style={styles.name}>{product?.product?.name}</Text>
          <SafeAreaView style={styles.myFlex}>
            <Text> x{product?.quantity} </Text>
            <Text>{product?.product?.price}</Text>
          </SafeAreaView>
        </SafeAreaView>
      </TouchableOpacity>
      <SafeAreaView
        style={[styles.myFlex, { justifyContent: "space-between" }]}
      >
        <Text>{product?.date}</Text>
        <SafeAreaView style={styles.myFlex}>
          {canChange && (
            <TouchableOpacity style={styles.delBtn}>
              <Text>Modify</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.delBtn}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    marginBottom: 10,
  },
  thumb: {
    width: 80,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 6,
  },
  info: {
    paddingLeft: 15,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "justify",
  },
  myFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  delBtn: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderColor: Theme.COLORS.BLACK,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 10,
  },
});
