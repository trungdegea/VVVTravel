import { HOME_CONTANTS } from "../constants/home";

const initialState = {
  destinations: [],
  categories: [],
  products: [],
};

function homeReducer(state = initialState, action) {
  console.log("home", action.type);
  switch (action.type) {
    case HOME_CONTANTS.GET_DATA: {
      return action.payload;
    }
    case HOME_CONTANTS.ERROR: {
      return state;
    }
    default:
      return state;
  }
}

export default homeReducer;
