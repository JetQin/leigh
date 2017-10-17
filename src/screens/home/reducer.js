import { FETCH_POSTS } from './actions';

const INITIAL_STATE = {
  posts: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  console.log( "ACTION TYPE:" + action.type);
  switch (action.type) {
    case `${FETCH_POSTS}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_POSTS}_FULFILLED`:
      return {
        posts: {
          data: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: 'get posts done',
          },
        },
      };
    case `${FETCH_POSTS}_REJECTED`:
      return {
        posts: {
          data: action.payload,
          isFetched: true,
          error: {
            on: true,
            message: 'get posts error',
          },
        },
      };
    default:
      return state;
  }
};

