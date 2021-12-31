import { getDataHome } from "../actions/home";
import { HOME_CONTANTS } from "../constants/home";

const initialState = {
  destinations: [],
  categories: [],
  products: [],
}

function homeReducer(state = initialState, action) {
  switch(action.type) {
    case HOME_CONTANTS.GET_DATA: {
      console.log(action.payload)
      return action.payload;
    }
    case HOME_CONTANTS.ERROR: {
      return state;
    }
    default: 
      return state;
  }
}

export default homeReducer