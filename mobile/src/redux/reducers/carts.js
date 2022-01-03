import { CARTS_CONTANTS } from "../constants/carts";

initialState = {
  datacart: [],
  choose: [],
};

function cartsReducer(state = initialState, action) {
  switch (action.type) {
    case CARTS_CONTANTS.GET_DATA: {
      return { ...state, datacart: action.payload };
    }
    case CARTS_CONTANTS.UPDATE: {
      const arr = choose.push(action.payload);
      return { ...state, choose: arr };
    }
    case CARTS_CONTANTS.ERROR: {
      return state;
    }
    default:
      return state;
  }
}

export default cartsReducer;
