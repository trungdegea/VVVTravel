import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const HeaderAccountScroll = ({ navigation, bgColor, color, opacity }) => {
  
  const { isLogged, user } = useSelector((state) => state.auth);

  const gotoEditAccount = () => {
    navigation.navigate(isLogged ? "Edit Account" : "SignIn");
  };
  return (
    <Animated.View
      style={[styles.headerContainer, { backgroundColor: bgColor }]}
    >
      <SafeAreaView style={[styles.topNav]}>
        <TouchableOpacity>
          <AnimatedIcon style={[{color: color}]} size={20} name={"mail"} />
        </TouchableOpacity>
        <Animated.Text style={[styles.title, {opacity: opacity, color: color}]}>
          Manage my info
        </Animated.Text>
        <TouchableOpacity onPress={gotoEditAccount}>
          <AnimatedIcon style={[{color: color}]} size={20} name={"hexagon"} />
        </TouchableOpacity>
      </SafeAreaView>
    </Animated.View>
  );
};

export default HeaderAccountScroll;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
    height: 60,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {},
});
