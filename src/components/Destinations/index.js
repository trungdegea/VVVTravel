import React, { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

// utilities
import { splitToSubArrays } from "../../utilities";

// components
import Location from "../Cards/location";

const data = [
  {
    id: "0",
    name: "Ha Noi",
    thumbnail: "https://picsum.photos/400",
  },
  {
    id: "1",
    name: "Ha Noi",
    thumbnail: "https://picsum.photos/400",
  },
  {
    id: "2",
    name: "Ha Noi",
    thumbnail: "https://picsum.photos/400",
  },
  {
    id: "3",
    name: "Ha Noi",
    thumbnail: "https://picsum.photos/400",
  },
  {
    id: "4",
    name: "Ha Noi",
    thumbnail: "https://picsum.photos/400",
  },
  {
    id: "5",
    name: "Ha Noi",
    thumbnail: "https://picsum.photos/400",
  },
  {
    id: "6",
    name: "Ha Noi",
    thumbnail: "https://picsum.photos/400",
  },
  {
    id: "7",
    name: "Kuralar Lumbur",
    thumbnail: "https://picsum.photos/400",
  },
  {
    id: "8",
    name: "HCMC",
    thumbnail: "https://picsum.photos/400",
  },
];

const Destinations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(splitToSubArrays(data, 2));
    return () => {};
  }, []);

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.locationGroup}>
        {item &&
          item.map((loc, index) => (
            <SafeAreaView style={styles.location} key={index}>
              <Location image={loc.thumbnail} name={loc.name} />
            </SafeAreaView>
          ))}
      </SafeAreaView>
    );
  };

  return (
    <>
      <FlatList
        data={locations}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.area}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  area: {
    marginBottom: 20,
    paddingHorizontal: -5,
  },
  locationGroup: {
    paddingHorizontal: 5,
  },
  location: {
    paddingVertical: 5,
  }
});

export default Destinations;
