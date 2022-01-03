import { combineReducers } from "redux";
import authReducer from "./auth";
import cartsReducer from "./carts";
import homeReducer from "./home";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  carts: cartsReducer,
});

export default rootReducer;
