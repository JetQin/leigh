import { FETCH_REVIEWED_ARTICLE } from './actions';

const INITIAL_STATE = {
  response: {
    passed: 0,
    unpassed: 0,
    posts: [],
    msg: '',
  },
};

const ProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_REVIEWED_ARTICLE}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_REVIEWED_ARTICLE}_FULFILLED`:
      return {
        passed: action.payload.passed,
        unpassed: action.payload.data,
        posts: action.payload.posts,
        msg: action.payload.msg,
      };
    case `${FETCH_REVIEWED_ARTICLE}_REJECTED`:
      return {
        passed: 0,
        unpassed: 0,
        posts: [],
        msg: 'Server Error',
      };
    default:
      return state;
  }
};

export default ProfileReducer;

