import { WordpressApi } from '../../../constants/api';

const wordpressApi = new WordpressApi();

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = (page) => ({
  type: FETCH_DATA,
  payload: wordpressApi.fetchData(page),
});

