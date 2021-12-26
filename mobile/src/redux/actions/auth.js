import axios from "axios";
import config from "../../configs/staging.config.json";
import { FAILED, LOGIN, CLEAR_MESSAGE, RETRIVE_AUTH, SIGN_UP } from "../constants/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authURL = config.API_BASE + "/auth/local";

export const login = async (email = "", password = "") => {
  try {
    const {data} = await axios.post(authURL, {
      identifier: email,
      password,
    });

    const exp = new Date();
    exp.setDate(exp.getDate() + 15);

    await AsyncStorage.setItem("jwt", data.jwt);
    await AsyncStorage.setItem("user", JSON.stringify(data.user));
    await AsyncStorage.setItem("exp", exp.toISOString());
    
    return {
      type: LOGIN,
      payload: {
        isLogged: true,
        user: data.user,
        jwt: data.jwt,
        err: false,
        message: "",
        exp: exp,
      },
    };
  } catch (err) {
    return {
      type: LOGIN,
      payload: {
        isLogged: false,
        user: {},
        jwt: "",
        err: true,
        message: "Email or password was incorrect !!!",
        exp: new Date(),
      },
    };
  }
}

export const register = async (email = "", username="", password = "") => {
  console.log({
    email,
    username,
    password,
  });
  try {
    const { data } = await axios.post(authURL + "/register", {
      email,
      username,
      password,
    });

    const exp = new Date();
    exp.setDate(exp.getDate() + 15);

    await AsyncStorage.setItem("jwt", data.jwt);
    await AsyncStorage.setItem("user", JSON.stringify(data.user));
    await AsyncStorage.setItem("exp", exp.toISOString());

    return {
      type: SIGN_UP,
      payload: {
        isLogged: true,
        user: data.user,
        jwt: data.jwt,
        err: false,
        message: "",
        exp: exp,
      },
    };
  } catch (err) {
    return {
      type: SIGN_UP,
      payload: {
        isLogged: false,
        user: {},
        jwt: "",
        err: true,
        message: err.response.data.data[0].messages[0].message,
        exp: new Date(),
      },
    };
  }
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
  };
}

export const retrieve = async () => {
  try {  
    const exp = new Date(await AsyncStorage.getItem("exp"));
    const jwt = await AsyncStorage.getItem("jwt");
    const user = JSON.parse(await AsyncStorage.getItem("user"));
    if (exp > new Date() && jwt && user){
      return {
        type: RETRIVE_AUTH,
        payload: {
          exp: exp,
          jwt: jwt,
          user: user,
          isLogged: true,
          err: false,
          message: "",
        },
      };
    } else {
      await AsyncStorage.removeItem("jwt");
      await AsyncStorage.removeItem("user");
      return {
        type: RETRIVE_AUTH,
        payload: {
          exp: new Date(),
          jwt: "",
          user: "",
          isLogged: false,
          err: false,
          message: "",
        },
      };
    }
  } catch (err) {
    return {
      type: RETRIVE_AUTH,
      payload: {
        exp: new Date(),
        jwt: "",
        user: "",
        isLogged: false,
        err: false,
        message: "",
      },
    };
  }
}