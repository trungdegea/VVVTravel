import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const styles = StyleSheet.create({
  wrap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.25,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    margin: 3,
    color: "#888",
  },
  dotActive: {
    margin: 3,
    color: "orange",
  },
});

export default function Slider({ images }) {
  const [active, setActive] = useState(0);
  const handleChange = ({ nativeEvent }) => {
    const slide = parseInt(
      Math.ceil(nativeEvent.contentOffset.x) /
        nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.wrap}
        pagingEnabled
        onScroll={handleChange}
      >
        {images.map((img) => (
          <Image
            key={img.id}
            resizeMode="stretch"
            source={{
              uri: img.url,
            }}
            style={styles.wrap}
          />
        ))}
      </ScrollView>
      <View style={styles.wrapDot}>
        {images.map((img) => (
          <Text
            key={img.id}
            style={active === img.id ? styles.dotActive : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </>
  );
}
