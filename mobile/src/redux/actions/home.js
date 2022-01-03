import http from "../../utilities/http";
import { HOME_CONTANTS } from "../constants/home";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getDataHome = async () => {
  try {
    const [destinations, categories, products] = await Promise.all([
      http.get("/locations"),
      http.get("/categories"),
      http.get("/products"),
    ]);
    const item = await AsyncStorage.getItem("recently");
    const idRecently = [...new Set(item?.split(","))];
    const promises = [];
    const count =
      idRecently.length < HOME_CONTANTS.NUMBER_RECENT
        ? idRecently.length
        : HOME_CONTANTS.NUMBER_RECENT;
    for (let i = 0; i < count; i++) {
      promises.push(getProductById(idRecently[i]));
    }
    const dataRecently = await Promise.all(promises);
    const dataHome = { dataRecently, destinations, categories, products };

    return { type: HOME_CONTANTS.GET_DATA, payload: dataHome };
  } catch (error) {
    console.log(error);
    return {
      type: HOME_CONTANTS.ERROR,
      payload: "",
    };
  }
};

const getProductById = async (id) => {
  return await http.get(`/products/${id}`);
};
