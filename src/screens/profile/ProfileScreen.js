import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { Button, Tabs, Tab, Icon } from 'native-base';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import styles from './styles/ProfileScreen';
import { NewsInfo, StockInfo, PricingCard } from './components/';
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
          <Button bordered onPress={params.logout} style={{ width: '45%', height: '60%', marginTop: '15%', borderColor: Colors.$navigationHeaderTextColor }}>
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
      myArticle: { 
        page: 1,
        data: [
          {
            id: 20998,
            name: '保监会举办2017年党务骨干培训班',
            url: 'http://synebusiness.cn/?p=20998',
            picUrl: '',
            category: '金融',
            date: '2017-11-15 09:05:33',
          },
          {
            id: 20992,
            name: '保监会：支持深度贫困地区打赢脱贫攻坚战',
            url: 'http://synebusiness.cn/?p=20992',
            picUrl: '',
            category: '金融',
            date: '2017-11-15 09:02:21',
          },
          {
            id: 20993,
            name: '重庆防控信用卡风险 不得以单一发卡量为激励指标',
            url: 'http://synebusiness.cn/?p=20993',
            picUrl: 'http://cms-bucket.nosdn.127.net/c33af6bab15a46e2aa3a2343aa036a0220171115081734.png?imageView&thumbnail=140y88',
            category: '金融',
            date: '2017-11-15 05:37:23',
          },
        ], 
      },
      myStock: {
        page: 1, 
        data: [
          {
            code: '600004',
            name: '白云机场',
            date: '2017-11-24 00:00:00',
            open: '14.48',
            high: '14.57',
            low: '14.19',
            close: '14.39',
            price_change: '-0.11',
            p_change: '-0.76',
          },
          {
            code: '600006',
            name: '东风汽车',
            date: '2017-11-24 00:00:00',
            open: '5.66',
            high: '5.72',
            low: '5.6',
            close: '5.69',
            price_change: '0.01',
            p_change: '0.18',
          },
        ], 
      },
      isLogin: false,
      user: {
        icon: '',
        name: '',
        user_id: '',
        myArticleNum: 0,
        myStockNum: 0,
      },
    };
    this.login = this.login.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
    this.logout = this.logout.bind(this);
    this.charge = this.charge.bind(this);
  }

  componentDidMount() {
    this.loginSuccesful();
  }

  logout() {
    console.log('logout');
    try {
      AsyncStorage.removeItem('@login');
      AsyncStorage.removeItem('@user_id');
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
            myArticleNum: params.data.post_count,
            myStockNum: params.data.stock_count,
          },
        });
        this.props.navigation.setParams({ isLogin: true });
        this.props.navigation.setParams({ logout: this.logout });
      } else {
        this.props.navigation.setParams({ isLogin: false });
        console.log(this.props.navigation.state);
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

  charge(type) {
    console.log(type);
    console.log('charge');
  }

  async searchArticle() {
    const request = {
      type: 'getUserPost',
      user_id: this.state.user.user_id,
    };
    const posts = await this.props.wordpressApi.getUserPostList(request);
  }

  render() {
    return (
      <View style={styles.root}>
        <Tabs initialPage={0} >
          <Tab heading='我的新历'>
            <View style={styles.layout}>
              <View style={styles.top}>
                <View style={styles.avatarContainer}>
                  <Avatar
                    large
                    rounded
                    source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
                    onPress={this.login}
                    activeOpacity={0.7}
                  />
                </View>
                <View style={styles.settingContainer}>
                  <View style={styles.headerTitleContainer}>
                    <Text style={styles.title}>{this.state.user.name}</Text>
                  </View>
                  <View style={styles.settingBtn}>
                    <Button transparent info onPress={this.changeAvatar} >
                      <FontAwesome name="gear" size={18} color={'#6A97BE'} />
                      <Text style={styles.label}>编辑头像</Text>
                    </Button>
                  </View>
                </View>
                <View style={styles.myCollectContainer}>
                  <Badge style={styles.collectContainer}>
                    <View style={styles.collectText}>
                      <Text style={styles.labelText}>{this.state.user.myArticleNum}</Text>
                      <Text style={styles.label}>已收藏文章</Text>
                    </View>
                  </Badge>
                  <Badge style={styles.collectContainer}>
                    <View style={styles.collectText}>
                      <Text style={styles.labelText} >{this.state.user.myStockNum}</Text>
                      <Text style={styles.label}>已自选行情</Text>
                    </View>
                  </Badge>
                </View>
              </View>
              <View style={styles.bottom}>
                <PricingCard
                  color='#4f9deb'
                  title='每天'
                  price='¥10'
                  info={[]}
                  titleFont='montserratBold'
                  button={{ title: '充值' }}
                  onButtonPress={() => this.charge('day')}
                />
                <PricingCard
                  color='#4f9deb'
                  title='包月'
                  price='¥150'
                  info={[]}
                  titleFont='montserratBold'
                  button={{ title: '充值' }}
                  onButtonPress={() => this.charge('1month')}
                />
                <PricingCard
                  color='#4f9deb'
                  title='包年'
                  price='¥1500'
                  info={[]}
                  titleFont='montserratBold'
                  button={{ title: '充值' }}
                  onButtonPress={() => this.charge('6month')}
                />
              </View>
            </View>
          </Tab>
          <Tab heading='文章收藏夹' >
            <NewsInfo
              ref={(c) => { this.ArticleCard = c; }}
              news={this.state.myArticle.data}
              // scroll={this.searchArticle}
              navigation={this.props.navigation}
            />
          </Tab>
          <Tab heading='自选行情' >
            <StockInfo
              ref={(c) => { this.stockCard = c; }}
              stocks={this.state.myStock.data}
              scroll={this.searchStock}
              navigation={this.props.navigation}
            />
          </Tab>
        </Tabs>

      </View>
    );
  }
}

export default ProfileScreen;
