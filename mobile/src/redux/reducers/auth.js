import { CLEAR_MESSAGE, LOGIN, LOGOUT, RETRIVE_AUTH, SIGN_UP } from "../constants/auth";

const initialState = {
  isLogged: false,
  user: {},
  jwt: "",
  err: false,
  message: "",
  exp: new Date(),
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return action.payload;
    }
    case SIGN_UP: {
      return action.payload;
    }
    case LOGOUT: {
      return action.payload;
    }
    case RETRIVE_AUTH: {
      return action.payload;
    }
    case CLEAR_MESSAGE: {
      state.err = false;
      state.message = "";
      return state;
    }
    default: {
      return state;
    }
  }
}
