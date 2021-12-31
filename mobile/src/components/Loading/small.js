import React, { memo } from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";
import { Images } from "../../constants";

const SmallLoading = memo(({ padding, size }) => {
  const styles = StyleSheet.create({
    loadingContainer: {
      padding: padding || 0,
      alignSelf: "center",
    },
    loading: {
      width: size || 20,
      height: size || 20,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <SafeAreaView style={[styles.loadingContainer]}>
      <Image source={Images.loading} style={[styles.loading]} />
    </SafeAreaView>
  );
});

export default SmallLoading;
