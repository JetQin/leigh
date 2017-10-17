import { WordpressApi } from '../../../constants/api';

const wordpressApi = new WordpressApi();

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: wordpressApi.fetchPost(),
});
