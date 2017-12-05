import { WordpressApi } from '../../../constants/api';

const wordpressApi = new WordpressApi();

export const AUTHENTICATE = 'AUTHENTICATE';
export const REGISTER = 'REGISTER';

export const authenticate = (data) => ({
  type: AUTHENTICATE,
  payload: wordpressApi.authenticate(data),
});
export const register = (data) => ({
  type: REGISTER,
  payload: wordpressApi.register(data),
});
