import { WordpressApi } from '../../../constants/api';

const wordpressApi = new WordpressApi();

export const AUTHENTICATE = 'AUTHENTICATE';

export const authenticate = (data) => ({
  type: AUTHENTICATE,
  payload: wordpressApi.authenticate(data),
});
