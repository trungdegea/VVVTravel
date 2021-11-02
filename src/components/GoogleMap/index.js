import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import MapView from "react-native-maps";
import { styles } from "./style";
export default function GoogleMap() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topic_map}>
          <Text style={styles.topic}>Map Location</Text>
        </View>

        <View style={styles.map_frame}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
