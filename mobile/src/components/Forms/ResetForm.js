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
  Alert,
} from "react-native";
import { Images, Theme } from "../../constants";
import Button from "../../shared/button";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage, reset } from "../../redux/actions/auth";
import { useNavigation } from "@react-navigation/core";
import SmallLoading from "../Loading/small";

const ResetForm = () => {
  const inputBlurHandler = () => {
    Keyboard.dismiss();
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(clearMessage());
    return () => {
      setIsLoading(false);
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [tokenErr, setTokenErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [refillPasswordErr, setRefillPasswordErr] = useState("");

  const inputRef = useRef({
    token: "",
    username: "",
    password: "",
    refillPassword: "",
  });

  const onTokenChange = useCallback((text) => {
    inputRef.current.token = text;
  }, []);
  const onPasswordChange = useCallback((text) => {
    inputRef.current.password = text;
    if (text === inputRef.current.refillPassword) {
      setRefillPasswordErr("");
    }
  }, []);
  const onRefillPasswordChange = useCallback((text) => {
    inputRef.current.refillPassword = text;
    if (text !== inputRef.current.password){
      setRefillPasswordErr("Refilled password does not match password");
    } else {
      setRefillPasswordErr("");
    }
  }, []);
  const onSubmit = useCallback(async () => {
    let hasErr = false;
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g.test(inputRef.current.password)){
      setPasswordErr("Password requires: At least eight characters, one uppercase letter, one lowercase letter and one number!!!!");
      hasErr = true;
    } else {
      setPasswordErr("");
    }
    if (inputRef.current.password !== inputRef.current.refillPassword) {
      setRefillPasswordErr("Refilled password does not match password");
      hasErr = true;
    } else {
      setRefillPasswordErr("");
    }

    if (!hasErr) {
      setIsLoading(true);
      const result = dispatch(
        await reset(inputRef.current.token, inputRef.current.password, inputRef.current.refillPassword)
      );
      if (!result.payload.err) {
        Alert.alert(
          "Successful reset password",
          "Enjoy our site",
          [
            {
              text: "OK",
              onPress: () => navigation.reset({
                index: 0,
                routes: [
                  {name: "Account"},
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
        <Text style={[styles.label]}>Reset token</Text>
        <Text style={[styles.errors]}>{tokenErr}</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            keyboardType={"default"}
            style={[styles.textInput]}
            onBlur={inputBlurHandler}
            onChangeText={onTokenChange}
            placeholder={"Your reset token"}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={[styles.formGroup]}>
        <Text style={[styles.label]}>Password</Text>
        <Text style={[styles.errors]}>{passwordErr}</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            secureTextEntry={true}
            keyboardType={"default"}
            style={[styles.textInput]}
            onBlur={inputBlurHandler}
            onChangeText={onPasswordChange}
            placeholder={"********"}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={[styles.formGroup]}>
        <Text style={[styles.label]}>Refill password</Text>
        <Text style={[styles.errors]}>{refillPasswordErr}</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            secureTextEntry={true}
            keyboardType={"default"}
            style={[styles.textInput]}
            onBlur={inputBlurHandler}
            onChangeText={onRefillPasswordChange}
            placeholder={"********"}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>

      {isLoading ? (
        <SmallLoading size={50} padding={0} />
      ) : (
        <>
          <SafeAreaView style={[styles.formGroup]}>
            <Button
              title={"RESET"}
              bgColor={Theme.COLORS.PRIMARY}
              textColor={Theme.COLORS.WHITE}
              onPress={onSubmit}
            />
          </SafeAreaView>
        </>
      )}
    </SafeAreaView>
  );
};

export default ResetForm;

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
