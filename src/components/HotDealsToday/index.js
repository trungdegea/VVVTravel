import React from "react";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";

const data = [
  {
    id: "1",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum qua troi luon ne asd",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "2",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "3",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "4",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "5",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
  },
  {
    id: "6",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
  },
];

const Tour = ({ image, location, title, price, voucher }) => {
  return (
    <View style={styles.tour}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.booking}>
          <Text style={styles.pricevoucher}>From đ {price * voucher}</Text>
          <TouchableOpacity style={styles.btnbook}>
            <Text style={styles.namebtn}>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function HotDealsToday() {
  const renderItem = ({ item }) => (
    <Tour
      image={item.img}
      location={item.location}
      title={item.package}
      price={item.price}
      voucher={item.voucher}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's hot deals</Text>
        <Text style={styles.decription}>
          11% off these experiences (ending soon!)
        </Text>
      </View>
      <SafeAreaView style={styles.content}>
        <Text>Ends in 1 day 18 : 55 : 42</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}
