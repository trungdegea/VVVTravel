import http from "../../utilities/http";
import { HOME_CONTANTS } from "../constants/home";

export const getDataHome = async () => {
    try {
      const [destinations, categories, products] = await Promise.all([
        http.get("/locations"),
        http.get("/categories"),
        http.get("/products"),
      ]);
      const dataHome = {destinations, categories, products} ;
      return {type: HOME_CONTANTS.GET_DATA, payload: dataHome};
    } catch (error) {
      return {
        type: HOME_CONTANTS.ERROR, 
        payload: ''
      }
    }
};
