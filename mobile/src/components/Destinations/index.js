import React, { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";

// utilities
import { splitToSubArrays } from "../../utilities";

// components
import Location from "../Cards/location";

const Destinations = ({ data }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(splitToSubArrays(data, 2));
    return () => {};
  }, [data]);

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.locationGroup}>
        {item &&
          item.map((loc, index) => (
            <SafeAreaView style={styles.location} key={index}>
              <Location image={loc.images} name={loc.name} />
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
  },
});

export default Destinations;
