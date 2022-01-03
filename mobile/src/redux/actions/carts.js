import http from "../../utilities/http";

export const getCartData = async () => {
  return await http.get("/carts");
};
