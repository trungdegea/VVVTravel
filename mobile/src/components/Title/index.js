import React from "react";
import { SafeAreaView, Text } from "react-native";

import { styles } from "./style";

const Title = ( {title, hasMore}) => {
  return (
    <>
      <SafeAreaView style={styles.titleContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
        {hasMore && <Text style={styles.seeMore}>View more</Text>}
      </SafeAreaView>
    </>
  );
};

export default Title;
