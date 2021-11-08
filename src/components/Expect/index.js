import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "./style";

export default function Expect({ images }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topic}>
          <Text style={styles.topic_expect}>What To Expect</Text>
        </View>
        <View>
          <Text style={styles.decription_heading}>
            San Francisco is a city in the U.S. state of California. It is
            famous for the Golden Gate Bridge. With a population of 744,041, San
            Francisco is the 13th largest city in the United States, and the 4th
            largest city in California behind Los Angeles, San Diego, and San
            Jose.
          </Text>

          {images.map((image) => (
            <View style={styles.decription_image} key={image.id}>
              <Image
                source={{
                  uri: image.url,
                }}
                style={styles.image}
              />
              <Text style={styles.decription_image_content}>
                {image.decription}
              </Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}
