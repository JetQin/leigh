import { WordpressApi } from '../../../constants/api';

const wordpressApi = new WordpressApi();

export const FETCH_REVIEWED_ARTICLE = 'FETCH_REVIEWED_ARTICLE';

export const fetchArticle = (data) => ({
  type: FETCH_REVIEWED_ARTICLE,
  payload: wordpressApi.fetchReviewedArticle(data),
});
