import axios from 'axios';

const apiUrl = 'http://synebusiness.cn/wordpressApi.php';
const authenticationUrl = 'http://synebusiness.cn/authentication.php';

class WordpressApi {
  constructor() {
    this.path = '/groups/${this.groupId}/meetups';
  }

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
}

export {
  WordpressApi,
};
