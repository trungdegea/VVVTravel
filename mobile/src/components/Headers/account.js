import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Theme, Images } from "../../constants";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

const HeaderAccount = () => {
  const navigation = useNavigation();
  const { isLogged, user } = useSelector((state) => state.auth);

  const goToInfo = useCallback(() => {
    navigation.navigate(isLogged ? "Profile" : "SignIn");
  }, [isLogged]) 

  return (
    <SafeAreaView style={[styles.headerContainer]}>
      <TouchableOpacity style={styles.header} onPress={goToInfo}>
        <SafeAreaView style={styles.avatarBox}>
          <Image source={Images.defaultAvatar} style={styles.avatar} />
        </SafeAreaView>
        {isLogged ? (
          <>
            <Text style={styles.username}>{user?.username}</Text>
            <SafeAreaView style={styles.infoBtn}>
              <Text style={styles.infoLink}>Manage my info</Text>
              <Entypo name="chevron-small-right" size={12} color="white" />
            </SafeAreaView>
          </>
        ) : (
          <Text style={styles.username}>Log in or sign up</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderAccount;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    overflow: "hidden",
    height: 180,
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
