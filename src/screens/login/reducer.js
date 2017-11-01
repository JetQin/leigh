import { SIGN_IN, SIGN_UP } from './action';

const initialState = {
  isLogged: false,
  isLoading: false,
  signin: false,
  signup: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLogged: false,
        isLoading: true,
        signin: true,
      };
    case SIGN_UP:
      return {
        ...state,
        isLogged: false,
        isLoading: true,
        signup: true,
      };
    default:
      return state;
  }
};
