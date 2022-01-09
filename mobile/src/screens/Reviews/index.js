import React, { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import http from "../../utilities/http";
import HeaderReviews from "../../components/Headers/reviews";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

const clamp = (x, a, b) => Math.max(a, Math.min(x, b));

export default function Reviews({ route }) {
  const { comments, name, id } = route.params;
  const [text, setText] = useState(null);
  const [rate, setRate] = useState(null);
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const [actualComments, setActualComments] = useState(comments);
  const sendComment = async () => {
    if (auth.isLogged) {
      await http.post("/comments", { product: id, message: text, rate });
      const newcmts = [...actualComments];
      newcmts.push({ product: id, message: text, rate });
      setActualComments(newcmts);
    } else {
      navigation.navigate("AccountStack", {
        screen: "SignIn",
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderReviews productName={name} />
      <ScrollView style={styles.container}>
        {actualComments &&
          actualComments?.map((cmt, _index) => (
            <SafeAreaView style={styles.item} key={_index}>
              <View style={styles.listcomment}>
                <Text style={styles.name}>
                  {cmt?.user?.username ? cmt.user.username : "Anonymus user"}
                </Text>
                <Text style={styles.rate}>Rate: {cmt.rate}</Text>
                <Text style={styles.mess}>Message: {cmt.message}</Text>
              </View>
            </SafeAreaView>
          ))}

        <View style={{ marginBottom: 100 }}>
          <Text style={styles.topic}>comment</Text>
          <TextInput
            style={styles.input}
            placeholder="input your comment"
            onChangeText={setText}
          />

          <Text style={styles.topic}>Rate</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="number-pad"
            onChangeText={(val) => setRate(clamp(parseInt(val), 1, 5))}
          />

          <Button onPress={sendComment} title="Send" color="orange" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 70,
  },
  topic: {
    fontSize: 18,
  },
  listcomment: {
    flex: 1,
    borderBottomColor: "orange",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  input: {
    color: "#a6a6a6",
    borderWidth: 1,
    borderColor: "#000",
    fontSize: 20,
    lineHeight: 28,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  rate: {
    color: "orange",
    fontSize: 16,
  },
  mess: {
    flexWrap: "nowrap",
  },
});
