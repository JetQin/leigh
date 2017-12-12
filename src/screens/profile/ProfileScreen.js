import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, AsyncStorage, Image } from 'react-native';
import { Avatar, Badge, List, ListItem } from 'react-native-elements';
import { Container, Button, Segment, Content, Tabs, Tab, Icon } from 'native-base';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import styles from './styles/ProfileScreen';
import { fetchArticle } from './actions';
import NewsInfo from './components/NewsInfo';
import { WordpressApi } from '../../../constants/api';

const wordpressApi = new WordpressApi();

class ProfileScreen extends Component {
  static defaultProps = {
    wordpressApi,
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const tabBarLabel = '个人信息';
    const headerStyle = { 
      backgroundColor: Colors.$whiteColor, 
      borderBottomWidth: 3, 
      borderBottomColor: Colors.$navigationHeaderTextColor, 
      borderStyle: 'solid',
    };
    const headerLeft = (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>新历财经</Text>
      </View>
    );
    const searchBtn = (
      <Button transparent onPress={() => navigation.navigate('Search')}>
        <Icon name='md-search' style={{ fontSize: 30, color: Colors.$navigationHeaderTextColor }} />
      </Button>
    );
    let headerRight = (
      <View>
        {searchBtn}
      </View>
    );
    if (params.isLogin) {
      headerRight = (
        <View style={{ flex: 1, flexDirection: 'row', paddingRight: '15%' }}>
          {searchBtn}
          <Button bordered onPress={() => navigation.navigate('Logout')} style={{ width: '45%', height: '60%', marginTop: '15%', borderColor: Colors.$navigationHeaderTextColor }}>
            <Text style={{ color: Colors.$navigationHeaderTextColor }}>登出</Text>
          </Button>
        </View>
      );
    }

    const tabBarIcon = ({ tintColor }) => (
      <MaterialCommunityIcons name="account-circle" size={25} color={tintColor} />
    );
    return { tabBarLabel, headerStyle, headerLeft, headerRight, tabBarIcon };
  };

  constructor(props) {
    super(props);
    this.state = {
      type: 'fetchArticle',
      myArticle: { page: 1, data: [] },
      myStock: { page: 1, data: [] },
      isLogin: false,
      user: {
        icon: '',
        name: '',
        user_id: '',
        myArticleNum: 0,
        myStockNum: 0,
      },
    };
    this.changeTab = this.changeTab.bind(this);
    this.login = this.login.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
    this.logout = this.logout.bind(this);
    this.searchArticle = this.searchArticle.bind(this);
  }

  componentDidMount() {
    this.loginSuccesful();
  }

  logout() {
    try {
      AsyncStorage.removeItem('@login');
    } catch (error) {
      console.log(error);
    }
    this.setState({
      isLogin: false,
      user: {
        name: '',
        user_id: '',
        myArticleNum: 0,
        myStockNum: 0,
      },
    });
    this.props.navigation.setParams({ isLogin: false });
  }

  async loginSuccesful() {
    try {
      const loginInfo = await AsyncStorage.getItem('@login');
      if (loginInfo) {
        const params = JSON.parse(loginInfo);
        this.setState({
          isLogin: params.status,
          user: {
            name: params.data.user_login,
            user_id: params.data.user_id,
            myArticleNum: params.data.articleNum,
            myStockNum: params.data.stockNum,
          },
        });
        console.log(loginInfo);
        // this.fetchPosts(params.data.user_id, 'publish');
        this.props.navigation.setParams({ isLogin: true });
        this.props.navigation.setParams({ logout: this.logout });
      } else {
        this.props.navigation.setParams({ isLogin: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  login() {
    if (!this.state.isLogin) {
      this.props.navigation.navigate('Signin');
    }
  }

  changeAvatar() {
    console.log('change avatar');
  }

  changeTab(ref) {
    if (ref.props.heading === '我的新历') {
      if (this.state.isLogin) {
        this.fetchPosts(this.state.user.user_id, 'publish');
      }
    }
    if (ref.props.heading === '文章收藏夹') {
      if (this.state.isLogin) {
        this.ArticleCard._onRefresh();
      }
    }
    if (ref.props.heading === '自选行情') {
      if (this.state.isLogin) {
        this.house._onRefresh();
      }
    }
  }

  searchArticle() {
    const request = {
      type: this.state.type,
      page: this.state.hotNews.page + 1,
      category: 'hotnews',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    console.log(posts);
    this.setState({ hotNews: { page: this.state.hotNews.page + 1, data: posts.concat(this.state.hotNews.data) } });
  }

  searchStock() {
    const params = {
      type: 'fetchStock',
      page: this.state.stock.page,
    };
    const response = await this.props.api.fetchStock(params);
    this.setState({
      stock: {
        data: response,
        page: 1 + this.state.stock.page,
        ascSortName: this.state.stock.ascSortName,
        ascSortPrice: this.state.stock.ascSortPrice },
    });
  }

  render() {
    return (
      <View style={styles.root}>
        <Tabs initialPage={0} onChangeTab={({ ref }) => this.changeTab(ref)} >
          <Tab heading='我的新历'>
            <View style={styles.avatarContainer}>
              <Avatar
                xlarge
                rounded
                source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
                onPress={this.login}
                activeOpacity={0.7}
              />
              <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>wordpress</Text>
            </View>
            <View style={styles.settingContainer}>
              <Button transparent info onPress={this.changeAvatar}>
                <FontAwesome name="gear" size={18} color={'#6A97BE'} />
                <Text style={{ paddingLeft: '2%', fontSize: 18, color: '#6A97BE' }}>编辑头像</Text>
              </Button>
            </View>
            <View style={styles.myCollectContainer}>
              <View style={styles.followContainer}>
                <Badge style={styles.collectContainer}>
                  <View style={styles.collectText}>
                    <Text>{this.state.user.myArticleNum}</Text>
                    <Text>已收藏文章</Text>
                  </View>
                </Badge>
                <Badge style={styles.collectContainer}>
                  <View style={styles.collectText}>
                    <Text>{this.state.user.myStockNum}</Text>
                    <Text>已自选行情</Text>
                  </View>
                </Badge>
              </View>
            </View>
            <View style={styles.payContainer}>
              <View style={styles.paneContainer}>
                <Text style={styles.paneText}>会员单日</Text>
                <Text style={styles.paneText}>会员单月</Text>
                <Text style={styles.paneText}>会员12个月</Text>
              </View>
              <View style={styles.moneyContainer}>
                <Button small style={styles.moneyText}>
                  <MaterialCommunityIcons name='coin' style={{ fontSize: 20, color: '#BFA218' }} />
                  <Text style={{ color: '#8CD6D7' }}>10￥</Text>
                </Button>
                <Button small style={styles.moneyText}>
                  <MaterialCommunityIcons name='coin' style={{ fontSize: 20, color: '#BFA218' }} />
                  <Text style={{ color: '#8CD6D7' }}>150￥</Text>
                </Button>
                <Button small style={styles.moneyText}>
                  <MaterialCommunityIcons name='coin' style={{ fontSize: 20, color: '#BFA218' }} />
                  <Text style={{ color: '#8CD6D7' }}>1500￥</Text>
                </Button>
              </View>
              <View style={{ marginTop: '5%' }}>
                <Button style={styles.buttonStyle}>
                  <Text>充值</Text>
                </Button>
              </View>
            </View>            
          </Tab>
          <Tab heading='文章收藏夹' >
            <NewsInfo 
              ref={(c) => { this.ArticleCard = c; }} 
              news={this.state.myArticle.data} 
              scroll={this.searchArticle} 
              navigation={this.props.navigation}
            />
          </Tab>
          <Tab heading='自选行情' />
        </Tabs>

      </View>
    );
  }
}

export default ProfileScreen;
