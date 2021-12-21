import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "./style";
import OfferCard from "../Cards/offerCard";
const ListOffers = [
  "All",
  "Food & Dining",
  "Staycations",
  "Attractions & tickets",
  "Tours & sightseeing",
  "Fun & culture",
  "Relaxation & health",
];
const data = [
  {
    id: "1",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum qua troi luon ne asd",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
    rating: 4.3,
  },
  {
    id: "2",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
    rating: 4.3,
  },
  {
    id: "3",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
    rating: 4.3,
  },
  {
    id: "4",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
    rating: 4.3,
  },
  {
    id: "5",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
    rating: 4.3,
  },
  {
    id: "6",
    img: "https://picsum.photos/400/300",
    package: "lorem ipsum",
    voucher: 0.75,
    price: "200000",
    location: "Ha Noi",
    rating: 4.3,
  },
];
export default function Offers() {
  const renderList = ({ item }) => (
    <View style={styles.offerList}>
      <Text style={styles.offerList_item}>{item}</Text>
    </View>
  );

  const renderToursList = ({ item }) => (
    <View style={styles.offers}>
      <OfferCard
        image={item.img}
        title={item.package}
        price={item.price}
        voucher={item.voucher}
        rating={item.rating}
        location={item.location}
      />
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Offers we love</Text>
      </View>
      <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={ListOffers}
          renderItem={renderList}
          keyExtractor={((_, index) => index.toString())}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.toursList}>
        <FlatList
          data={data}
          renderItem={renderToursList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}
