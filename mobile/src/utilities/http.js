import axios from "axios";
import queryString from "query-string";
import { API_URL } from "@env";

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    // "Authorization": localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : undefined,
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

instance.interceptors.request.use(
  async (config) => {
    const token = "";
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
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
    const err =
      (error.response && error.response.data && error.response.data) || error;

    return Promise.reject(err); // Propagate rejection back to caller
  }
);

export default instance;
