import axios from 'axios';

const apiUrl = 'http://synebusiness.cn/wordpressApi.php';
const authenticationUrl = 'http://synebusiness.cn/authentication.php';

class WordpressApi {
  async fetchData(page) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', 'home_data');
    params.append('page', page);
    const response = await axios.post(wordpressApiUrl, params);
    console.log(response);
    return response.data;
  }

  async fetchPosts(request) {
    const wordpressApiUrl = apiUrl;
    console.log(request);
    const params = new FormData();
    params.append('type', request.type);
    params.append('page', request.page);
    params.append('category', request.category);
    const response = await axios.post(wordpressApiUrl, params);
    console.log(response);
    return response.data;
  }

  async fetchStock(request) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', request.type);
    params.append('page', request.page);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async fetchHolder(request) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', request.type);
    params.append('companyCode', request.companyCode);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async authenticate(authdata) {
    const params = new FormData();
    params.append('type', authdata.type);
    params.append('login', authdata.login);
    params.append('password', authdata.password);
    const response = await axios.post(authenticationUrl, params);
    return response.data;
  }

  async fetchReviewedArticle(authdata) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', authdata.type);
    params.append('user_id', authdata.user_id);
    params.append('article_type', authdata.article_type);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async register(authdata) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', authdata.type);
    params.append('user_name', authdata.user_name);
    params.append('email', authdata.email);
    params.append('password', authdata.password);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async searchNews(request) {
    const wordpressApiUrl = apiUrl;
    console.log(request);
    const params = new FormData();
    params.append('type', request.type);
    params.append('page', request.page);
    params.append('searchValue', request.searchValue);
    const response = await axios.post(wordpressApiUrl, params);
    console.log(response);
    return response.data;
  }

  async searchStock(request) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', request.type);
    params.append('page', request.page);
    params.append('searchValue', request.searchValue);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async addStockToList(data) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', 'addStock');
    params.append('user_id', data.userId);
    params.append('code', data.code);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async removeStockToList(data) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', 'removeStock');
    params.append('user_id', data.userId);
    params.append('code', data.code);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async getUserStockList(data) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', 'getUserStock');
    params.append('user_id', data.userId);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async addPostToList(data) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', 'addPost');
    params.append('user_id', data.userId);
    params.append('post_id', data.postId);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async removePostToList(data) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', 'removePost');
    params.append('user_id', data.userId);
    params.append('post_id', data.code);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async getUserPostList(data) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', 'getUserPost');
    params.append('user_id', data.userId);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async getUserCollectNum(data) {
    const wordpressApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', data.type);
    params.append('userId', data.userId);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }
}

export {
  WordpressApi,
};
