import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import { Theme, Images } from "../../constants";
import { Entypo } from "@expo/vector-icons"; 

const HeaderAccount = () => {
  return (
    <SafeAreaView style={[styles.headerContainer]}>
      <TouchableOpacity style={styles.header}>
        <SafeAreaView style={styles.avatarBox}>
          <Image source={Images.defaultAvatar} style={styles.avatar} />
        </SafeAreaView>
        <Text style={styles.username}>Phạm Anh Tú</Text>
        <SafeAreaView style={styles.infoBtn}>
          <Text style={styles.infoLink}>Manage my info</Text>
          <Entypo name="chevron-small-right" size={12} color="white" />
        </SafeAreaView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderAccount;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    overflow: "hidden",
    height: 200,
    backgroundColor: Theme.COLORS.PRIMARY,
    padding: 20,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  avatarBox: {
    width: 70,
    height: 70,
    overflow: "hidden",
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  infoBtn: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  infoLink: {
    color: "white",
    fontSize: 12,
  },
});
