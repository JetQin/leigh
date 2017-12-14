import { AUTHENTICATE } from './actions';

const INITIAL_STATE = {
  response: {
    data: {
      auth_token: '',
      user_id: '',
      user_login: '',
    },
    status: false,
    msg: '',
  },
};

const SigninReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${AUTHENTICATE}_PENDING`:
      return INITIAL_STATE;
    case `${AUTHENTICATE}_FULFILLED`:
      return {
        status: action.payload.status,
        data: action.payload.data,
        msg: action.payload.msg,
      };
    case `${AUTHENTICATE}_REJECTED`:
      return {
        status: false,
        msg: 'Server error',
      };
    default:
      return state;
  }
};

export default SigninReducer;

