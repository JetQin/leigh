import { FETCH_DATA } from './actions';

const INITIAL_STATE = {
  data: {
    posts: [],
    news: [],
    isFetched: false,
    error: {
      on: false,
      message: null,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case `${FETCH_DATA}`:
      return {
        data: {
          indexs: action.payload.indexs,
          news: action.payload.news,
          isFetched: true,
          error: {
            on: false,
            message: 'get posts done',
          },
        },
      };
    case `${FETCH_DATA}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_DATA}_FULFILLED`:
      return {
        data: {
          indexs: action.payload.indexs,
          news: action.payload.news,
          isFetched: true,
          error: {
            on: false,
            message: 'get posts done',
          },
        },
      };
    case `${FETCH_DATA}_REJECTED`:
      return {
        data: {
          indexs: action.payload.indexs,
          news: action.payload.news,
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

