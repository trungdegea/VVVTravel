import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import queryString from "query-string";

const instance = axios.create({
  baseURL: "http://103.101.161.57:1338",
  // headers: {
  //   Authorization: AsyncStorage.getItem("jwt")
  //     ? `Bearer ${AsyncStorage.getItem("jwt")}`
  //     : undefined,
  //   "content-type": "application/json",
  // },
  paramsSerializer: (params) => queryString.stringify(params),
});

instance.interceptors.request.use(
  async (config) => {
    const jwt = await AsyncStorage.getItem("jwt");
    if (jwt) {
      config.headers = {
        Authorization: `Bearer ${jwt}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    // Return JSON data
    if (response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // if (error?.response?.errId) {
    //   toast.error(errorMes[error?.response?.errId]);
    // }
    // Attempt to get the actual error returned from API
    const err = (error.response && error.response.data) || error;

    return Promise.reject(err); // Propagate rejection back to caller
  }
);

export default instance;
