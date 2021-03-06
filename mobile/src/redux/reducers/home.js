import { HOME_CONTANTS } from "../constants/home";

const initialState = {
  dataRecently: [],
  destinations: [],
  categories: [],
  products: [],
};

function homeReducer(state = initialState, action) {
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
