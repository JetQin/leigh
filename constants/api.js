import axios from 'axios';

// export const fetchPost = () =>
//   fetch('http://localhost:3000/api/posts')
//     .then(res => res.json());

axios.defaults.baseURL = 'http://leigh365.net/wp-json/wp/v2/posts/14111';

const fakeGroupId = 'sdfsdf';

class WordpressApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = '/groups/${this.groupId}/meetups';
  }

  async fetchPost() {
    const { data } = await axios.get('https://raw.githubusercontent.com/JetQin/leigh/master/posts.json');
    return data;
  }

  fetchAllPost() {
    return [{ postId: '1', postName: 'test1', postContent: 'Welcome 1' },
      { postId: '2', postName: 'test2', postContent: 'Welcome 2' },
      { postId: '3', postName: 'test3', postContent: 'Welcome 3' },
      { postId: '4', postName: 'test4', postContent: 'Welcome 4' },
      // { postId: '5', postName: 'test5', postContent: 'Welcome 5' },
      // { postId: '6', postName: 'test6', postContent: 'Welcome 6' },
      // { postId: '7', postName: 'test7', postContent: 'Welcome 7' },
      // { postId: '8', postName: 'test8', postContent: 'Welcome 8' },
      // { postId: '9', postName: 'test9', postContent: 'Welcome 9' },
    ];
  }

  fetchAllNews() {
    return [
      { newsId: '1', img: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg ', content: '亚马逊收购联锁超市跟阿里巴巴有什么关系', category: 'BBC' },
      { newsId: '2', img: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg ', content: '亚马逊收购联锁超市跟阿里巴巴有什么关系', category: 'BBC' },
      { newsId: '3', img: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg ', content: '亚马逊收购联锁超市跟阿里巴巴有什么关系', category: 'BBC' },
      { newsId: '4', img: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg ', content: '亚马逊收购联锁超市跟阿里巴巴有什么关系', category: 'BBC' },
      { newsId: '5', img: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg ', content: '亚马逊收购联锁超市跟阿里巴巴有什么关系', category: 'BBC' },
      { newsId: '6', img: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg ', content: '亚马逊收购联锁超市跟阿里巴巴有什么关系', category: 'BBC' },
    ];
  }

  fetchHolder() {

  }
}

export {
  WordpressApi,
};
