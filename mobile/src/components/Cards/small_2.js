import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

const SmallCard = ({ title, badge, backgroundColor }) => {
  return (
    <SafeAreaView
      style={{ ...styles.cardContainer, backgroundColor: backgroundColor }}
    >
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={{ ...styles.badge, color: backgroundColor }}>
        {badge}
        <Ionicons name="play" size={14} color={backgroundColor} />
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    width: "100%",
    height: undefined,
    aspectRatio: 3 / 2,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, .4)",
    shadowRadius: 5,
    overflow: "hidden",
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    paddingHorizontal: 7,
    position: "absolute",
    top: 15,
    left: 15,
    color: "white",
  },
  badge: {
    fontWeight: "bold",
    paddingHorizontal: 7,
    position: "absolute",
    bottom: 15,
    left: 15,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
});

export default SmallCard;
