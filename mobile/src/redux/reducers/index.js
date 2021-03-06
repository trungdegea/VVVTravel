import { combineReducers } from "redux";
import authReducer from "./auth";
import homeReducer from "./home";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

export default rootReducer;
