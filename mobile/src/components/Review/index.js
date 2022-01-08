import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/core";

export default function Review({ comments, name }) {
  const navigation = useNavigation();
  const url = "https://image.vtc.vn/upload/2021/02/09/meo-16401545.PNG";
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topic}>
          <Text style={styles.topic_review}>Reviews</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.rating_point}>5.0</Text>
          <View style={styles.rating_star}>
            <View style={styles.rating_star_number}>
              <MaterialIcons name="star-rate" size={24} color="orange" />
              <MaterialIcons name="star-rate" size={24} color="orange" />
              <MaterialIcons name="star-rate" size={24} color="orange" />
              <MaterialIcons name="star-rate" size={24} color="orange" />
              <MaterialIcons name="star-rate" size={24} color="orange" />
            </View>
            <Text style={styles.rating_star_review}>1234 reviews</Text>
          </View>
        </View>
        <View style={styles.user}>
          <Image
            style={styles.logo}
            source={{
              uri: url,
            }}
          />
          <View style={styles.user_info}>
            <Text style={styles.user_name}>PHAM ANH TU</Text>
            <Text style={styles.user_date}>Oct 24, 2021</Text>
          </View>
        </View>
        <View style={styles.user_review}>
          <View style={styles.rating_star_number}>
            <MaterialIcons name="star-rate" size={18} color="orange" />
            <MaterialIcons name="star-rate" size={18} color="orange" />
            <MaterialIcons name="star-rate" size={18} color="orange" />
            <MaterialIcons name="star-rate" size={18} color="orange" />
            <MaterialIcons name="star-rate" size={18} color="orange" />
          </View>
          <Text style={styles.user_recommend}>Highly Recommended</Text>
        </View>
        <View>
          <Text style={styles.user_comment}>
            Love how clean and cosy it is! If you haven't use your SGrediscovery
            voucher you totally should use it here at Fairmont
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Reviews", { comments, name });
          }}
        >
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          <Text style={styles.namebtn}>Read all reviews</Text>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
