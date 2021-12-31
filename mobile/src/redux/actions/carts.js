import http from "../../utilities/http";

export const getCartData = async () => {
  try {
    const datacart = await http.get("/carts");
    return datacart;
  } catch (error) {
    throw error;
  }
};
