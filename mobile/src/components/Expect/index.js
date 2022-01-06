import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { API_URL } from "@env";
import { styles } from "./style";

export default function Expect({ description, images }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topic}>
          <Text style={styles.topic_expect}>What To Expect</Text>
        </View>
        <View>
          <Text style={styles.description_heading}>
            {description
              ? description
              : "San Francisco is a city in the U.S. state of California. It is famous for the Golden Gate Bridge. With a population of 744,041, San Francisco is the 13th largest city in the United States, and the 4th largest city in California behind Los Angeles, San Diego, and San Jose."}
          </Text>

          {images.map((image) => (
            <View style={styles.description_image} key={image.id}>
              <Image
                source={{
                  uri: image?.url
                    ? API_URL + image.url
                    : "https://placekitten.com/512/512",
                }}
                style={styles.image}
              />
              <Text style={styles.description_image_content}>
                {image.previewUrl ? image.previewUrl : "Meta description photo"}
              </Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}
