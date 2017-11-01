import axios from 'axios';

axios.defaults.baseURL = 'http://leigh365.net/wp-json/wp/v2/posts/14111';

const fakeGroupId = 'sdfsdf';

class WordpressApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = '/groups/${this.groupId}/meetups';
  }

  async fetchPost() {
    const { data } = await axios.get('https://raw.githubusercontent.com/JetQin/leigh/master/posts.json')
      .then((response) => {
        console.log('posts:'.concat(response));
      });
    return data;
  }

  fetchData() {
    return {
      posts: [
        { postId: '1', postName: 'test1', postContent: 'Welcome 1' },
        { postId: '2', postName: 'test2', postContent: 'Welcome 2' },
        { postId: '3', postName: 'test3', postContent: 'Welcome 3' },
        { postId: '4', postName: 'test4', postContent: 'Welcome 4' }],
      news: [
        { newsId: '1', img: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg', content: '同样是做电动汽车，一个年身价翻倍一个近乎破产原因何在', category: 'BBC', date: '2017/10/19' },
        { newsId: '2', img: 'http://leigh365.com/wp-content/uploads/2017/08/t_1497626189642_name_20170616_AmazonWholeFoodsPic-e1503197503819.jpg', content: '亚马逊收购联锁超市跟阿里巴巴有什么关系', category: 'BBC', date: '2017/10/19' },
        { newsId: '3', img: 'http://leigh365.com/wp-content/uploads/2017/08/10_cau_noi_bat_hu_cua_doanh_nhan_noi_tieng_13-e1502508892404.jpg', content: '世界新首富诞生！亚马逊贝佐斯超越比尔盖茨', category: 'BBC', date: '2017/10/19' },
      ],
    };
  }

  async fetchPosts(request) {
    const wordpressApiUrl = 'http://local.com/wordp/wordpressApi.php';
    const params = new URLSearchParams();
    params.append('type', request.type);
    params.append('page', request.login);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async fetchStock(request) {
    const wordpressApiUrl = 'http://local.com/wordp/wordpressApi.php';
    const params = new URLSearchParams();
    params.append('type', request.type);
    params.append('companyCode', request.companyCode);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async fetchHolder(request) {
    const wordpressApiUrl = 'http://local.com/wordp/wordpressApi.php';
    const params = new URLSearchParams();
    params.append('type', request.type);
    params.append('companyCode', request.companyCode);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async authenticate(authdata) {
    const authenticationUrl = 'http://local.com/wordp/authentication.php';
    const params = new URLSearchParams();
    params.append('type', authdata.type);
    params.append('login', authdata.login);
    params.append('password', authdata.password);
    const response = await axios.post(authenticationUrl, params);
    return response.data;
  }

  async fetchReviewedArticle(authdata) {
    const wordpressApiUrl = 'http://local.com/wordp/wordpressApi.php';
    const params = new URLSearchParams();
    params.append('type', authdata.type);
    params.append('user_id', authdata.user_id);
    params.append('article_type', authdata.article_type);
    const response = await axios.post(wordpressApiUrl, params);
    return response.data;
  }

  async register(authdata) {
    const wordpressApiUrl = 'http://local.com/wordp/wordpressApi.php';
    const params = new URLSearchParams();
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
