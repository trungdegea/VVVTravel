import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import { Images, Theme } from "../../constants";
import Button from "../../shared/button";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage, forgot } from "../../redux/actions/auth";
import { useNavigation } from "@react-navigation/core";
import SmallLoading from "../Loading/small";

const ForgotForm = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  const inputRef = useRef({
    identifier: "",
    password: "",
  });

  useEffect(() => {
    dispatch(clearMessage());
    return () => {
      setIsLoading(false);
    };
  }, []);

  const inputBlurHandler = () => {
    Keyboard.dismiss();
  };
  const onEmailChange = useCallback((text) => {
    inputRef.current.identifier = text;
  }, []);
  const onSubmit = useCallback(async () => {
    let hasErr = false;
    if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(inputRef?.current?.identifier)
    ) {
      setEmailErr("Email layout is not correct!!!!");
      hasErr = true;
    } else {
      setEmailErr("");
    }

    if (!hasErr) {
      setIsLoading(true);
      const result = dispatch(
        await forgot(inputRef.current.identifier)
      );
      if (!result.payload.err) {
        Alert.alert(
          "Send reset request successfully",
          "Please check your email to get reset token",
          [
            {
              text: "OK",
              onPress: () => navigation.reset({
                index: 0,
                routes: [
                  {name: "Account"},
                  {name: "Reset"}
                ]
              }),
            },
          ]
        );
        
      } else {
        setIsLoading(false);
      }
    }
  });
  const backToSignIn = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[styles.box]}>
      <Image source={Images.vvvLogo} style={[styles.logo]} />
      <Text
        style={[
          styles.errors,
          { textAlign: "center", marginBottom: 10, fontSize: 16 },
        ]}
      >
        {auth?.message}
      </Text>
      <SafeAreaView style={[styles.formGroup]}>
        <Text style={[styles.label]}>Email</Text>
        <Text style={[styles.errors]}>{emailErr}</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            keyboardType={"email-address"}
            style={[styles.textInput]}
            onBlur={inputBlurHandler}
            onChangeText={onEmailChange}
            autoComplete={"email"}
            placeholder={"bob@email.com"}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
      {isLoading ? (
        <SmallLoading size={50} padding={0} />
      ) : (
        <>
          <SafeAreaView style={[styles.formGroup]}>
            <Button
              title={"RESET PASSWORD"}
              bgColor={Theme.COLORS.PRIMARY}
              textColor={Theme.COLORS.WHITE}
              onPress={onSubmit}
            />
          </SafeAreaView>
          <SafeAreaView style={[styles.formGroup]}>
            <Text
              onPress={backToSignIn}
              style={{
                textAlign: "center",
                color: Theme.COLORS.INFO,
                fontStyle: "italic",
              }}
            >
              Remember your password? Back to sign in
            </Text>
          </SafeAreaView>
        </>
      )}
    </SafeAreaView>
  );
};

export default ForgotForm;

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  logo: {
    width: 260,
    height: 80,
    alignSelf: "center",
    resizeMode: "contain",
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
  },
  textInput: {
    width: "100%",
    height: 40,
    borderRadius: 4,
    borderColor: Theme.COLORS.BORDER,
    borderWidth: 1,
    backgroundColor: Theme.COLORS.INPUT_IDLE,
    paddingHorizontal: 15,
  },
  errors: {
    color: Theme.COLORS.ERROR,
    fontStyle: "italic",
  },
});
