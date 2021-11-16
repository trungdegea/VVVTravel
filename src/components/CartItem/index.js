import React from "react";
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Theme } from "../../constants";

const CartItem = () => {
  return (
    <SafeAreaView style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <Image source={{ uri: "https://placekitten.com/512/512" }} style={[styles.thumb]} />
        <SafeAreaView style={styles.info}>
          <Text style={styles.name}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Moles reiciendis ex !</Text>
          <SafeAreaView style={styles.myFlex}>
            <Text>x2 </Text>
            <Text>₫ 4,000,000</Text>
          </SafeAreaView>
        </SafeAreaView>
      </TouchableOpacity>
      <SafeAreaView style={[styles.myFlex, {justifyContent: "flex-end"}]}>
        <TouchableOpacity style={styles.delBtn}>
          <Text>Modify</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delBtn}>
          <Text>Delete</Text>
        </TouchableOpacity>
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
  },
  item: {
    flexDirection: "row",
    marginBottom: 10,
  },
  thumb:{
    width: 80,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 6
  },
  info: {
    paddingLeft: 15,
    flex: 1,
  },
  name:{
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
  }
});
