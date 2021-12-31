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
import { clearMessage, register } from "../../redux/actions/auth";
import { useNavigation } from "@react-navigation/core";
import SmallLoading from "../Loading/small";

const SignUpForm = () => {
  const inputBlurHandler = () => {
    Keyboard.dismiss();
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [refillPasswordErr, setRefillPasswordErr] = useState("");

  const inputRef = useRef({
    email: "",
    username: "",
    password: "",
    refillPassword: "",
  });

  const onEmailChange = useCallback((text) => {
    inputRef.current.email = text;
  }, []);
  const onUsernameChange = useCallback((text) => {
    inputRef.current.username = text;
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
    if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(inputRef?.current?.email)
    ) {
      setEmailErr("Email layout is not correct!!!!");
      hasErr = true;
    } else {
      setEmailErr("");
    }
    if (/^$/g.test(inputRef.current.username)) {
      setUsernameErr("Fullname is required!!!!");
      hasErr = true;
    } else {
      setUsernameErr("");
    }
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
        await register(inputRef.current.email, inputRef.current.username, inputRef.current.password)
      );
      if (result.payload.err) {
        setIsLoading(false);
      } else {
        Alert.alert(
          "Successful registration",
          "Please check your email to verify your account",
          [
            {
              text: "OK",
              onPress: () => navigation.goBack(),
            },
          ]
        );
        
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
      <SafeAreaView style={[styles.formGroup]}>
        <Text style={[styles.label]}>Fullname</Text>
        <Text style={[styles.errors]}>{usernameErr}</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            keyboardType={"default"}
            style={[styles.textInput]}
            onBlur={inputBlurHandler}
            onChangeText={onUsernameChange}
            autoComplete={"email"}
            placeholder={"John doe"}
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
              title={"SIGN UP"}
              bgColor={Theme.COLORS.PRIMARY}
              textColor={Theme.COLORS.WHITE}
              onPress={onSubmit}
            />
          </SafeAreaView>
          <SafeAreaView style={[styles.formGroup]}>
            <Button
              title={"SIGN IN"}
              bgColor={Theme.COLORS.INFO}
              textColor={Theme.COLORS.WHITE}
              onPress={navigation.goBack}
            />
          </SafeAreaView>
        </>
      )}
    </SafeAreaView>
  );
};

export default SignUpForm;

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
