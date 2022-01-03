import http from "../../utilities/http";
import { CARTS_CONTANTS } from "../constants/carts";

export const getCartData = async () => {
  try {
    const datacart = await http.get("/carts");
    return { type: CARTS_CONTANTS.GET_DATA, payload: datacart };
  } catch (error) {
    return { type: CARTS_CONTANTS.ERROR };
  }
};

export const updateChecked = async (id) => {
  try {
    return { type: CARTS_CONTANTS.UPDATE, payload: id };
  } catch (error) {
    return { type: CARTS_CONTANTS.ERROR };
  }
};
