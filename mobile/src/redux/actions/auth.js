import axios from "axios";
import config from "../../configs/dev.config.json";
import {
  FAILED,
  LOGIN,
  CLEAR_MESSAGE,
  RETRIVE_AUTH,
  SIGN_UP,
  LOGOUT,
  FORGOT,
  RESET
} from "../constants/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

const authURL = API_URL + "/auth/local";
const forgotURL = API_URL + "/auth/forgot-password";
const resetURL = API_URL + "/auth/reset-password";

export const login = async (email = "", password = "") => {
  try {
    const { data } = await axios.post(authURL, {
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
        message:
          err.response.data.data[0].messages[0].message || "an error occurred",
        exp: new Date(),
      },
    };
  }
};

export const register = async (email = "", username = "", password = "") => {
  try {
    const { data } = await axios.post(authURL + "/register", {
      email,
      username,
      password,
    });

    const exp = new Date();
    exp.setDate(exp.getDate() + 15);

    await AsyncStorage.setItem("user", JSON.stringify(data.user));
    await AsyncStorage.setItem("exp", exp.toISOString());

    return {
      type: SIGN_UP,
      payload: {
        isLogged: false,
        user: data.user,
        jwt: "",
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

export const forgot = async (email = "") => {
  try {
    const { data } = await axios.post(forgotURL, {
      email,
    });

    const exp = new Date();
    await AsyncStorage.setItem("exp", exp.toISOString());
    await AsyncStorage.removeItem("jwt");
    await AsyncStorage.removeItem("user");
    return {
      type: FORGOT,
      payload: {
        isLogged: false,
        user: {},
        jwt: "",
        err: false,
        message: "",
        exp: exp,
      },
    };
  } catch (err) {
    return {
      type: FAILED,
      payload: {
        isLogged: false,
        user: {},
        jwt: "",
        err: true,
        message:
          err.response.data.data[0].messages[0].message || "an error occurred",
        exp: new Date(),
      },
    };
  }
};

export const reset = async (code = "", password = "", passwordConfirmation = "") => {
  try {
    const { data } = await axios.post(resetURL, {
      code,
      password,
      passwordConfirmation,
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
      type: FAILED,
      payload: {
        isLogged: false,
        user: {},
        jwt: "",
        err: true,
        message:
          err.response.data.data[0].messages[0].message || "an error occurred",
        exp: new Date(),
      },
    };
  };
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
  };
};

export const logOut = async () => {
  const exp = new Date();
  await AsyncStorage.setItem("exp", exp.toISOString());
  await AsyncStorage.removeItem("jwt");
  await AsyncStorage.removeItem("user");
  return {
    type: LOGOUT,
    payload: {
      exp,
      jwt: "",
      user: "",
      isLogged: false,
      err: false,
      message: "",
    },
  };
};

export const retrieve = async () => {
  try {
    const exp = new Date(await AsyncStorage.getItem("exp"));
    const jwt = await AsyncStorage.getItem("jwt");
    const user = JSON.parse(await AsyncStorage.getItem("user"));
    if (exp > new Date() && jwt && user) {
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
};
