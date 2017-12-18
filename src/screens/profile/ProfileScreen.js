import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image, Alert } from 'react-native';
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
        data: [],
      },
      myStock: {
        page: 1,
        data: [],
      },
      isLogin: false,
      user: {
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
    this.fetchUserArticle = this.fetchUserArticle.bind(this);
    this.fetchUserStock = this.fetchUserStock.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.deleteStockRecord = this.deleteStockRecord.bind(this);
    this.deleteArticleRecord = this.deleteArticleRecord.bind(this);
  }

  componentDidMount() {
    // AsyncStorage.clear();
    this.loginSuccesful();
    this.fetchUserCollectNum();
  }

  login() {
    if (!this.state.isLogin) {
      this.props.navigation.navigate('Signin');
    }
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
      }
    } catch (error) {
      console.log(error);
    }
  }

  logout() {
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

  async fetchUserStock() {
    if (undefined !== this.state.user.user_id) {
      const params = { type: 'getUserStock', userId: this.state.user.user_id };
      const stockdata = await this.props.wordpressApi.getUserStockList(params);
      this.setState({ myStock: { page: this.state.myStock.page + 1, data: stockdata } });
    }
  }

  async fetchUserArticle() {
    if (undefined !== this.state.user.user_id) {
      const request = {
        type: 'getUserPost',
        userId: this.state.user.user_id,
      };
      const posts = await this.props.wordpressApi.getUserPostList(request);
      this.setState({ myArticle: { page: this.state.myArticle.page + 1, data: posts } });
    }
  }

  async deleteArticleRecord(id) {
    if (id) {
      const request = {
        code: id,
        userId: this.state.user.user_id,
      };
      const posts = await this.props.wordpressApi.removePostToList(request);
      console.log(posts);
      Alert.alert('提示', '删除成功',
        [
          { text: '确定' },
        ],
        { cancelable: false }
      );
      // this.articleCard._onRefresh();
      this.setState({ myArticle: { page: this.state.myArticle.page, data: this.state.myArticle.data.filter((item) => item.id !== id) } });
    }
  }

  async deleteStockRecord(id) {
    if (id) {
      const request = {
        code: id,
        userId: this.state.user.user_id,
      };
      const posts = await this.props.wordpressApi.removeStockToList(request);
      console.log(posts);
      Alert.alert('提示', '删除成功',
        [
          { text: '确定' },
        ],
        { cancelable: false }
      );
      // this.fetchUserArticle();
      // this.stockCard._onRefresh();
      this.setState({ myStock: { page: this.state.myStock.page, data: this.state.myStock.data.filter((item) => item.code !== id) } });
    }
  }

  changeAvatar() {
    console.log('change avatar');
  }

  charge(type) {
    console.log(type);
    console.log('charge');
    // const products = [
    //   'com.xyz.abc',
    // ];
    // InAppUtils.loadProducts(products, (error, products) => {
    //   // update store here.
    // });
    // InAppUtils.canMakePayments((enabled) => {
    //   if (enabled) {
    //     Alert.alert('IAP enabled');
    //   } else {
    //     Alert.alert('IAP disabled');
    //   }
    // });
    // const productIdentifier = 'com.xyz.abc';
    // InAppUtils.purchaseProduct(productIdentifier, (error, response) => {
    //   // NOTE for v3.0: User can cancel the payment which will be available as error object here.
    //   if (response && response.productIdentifier) {
    //     Alert.alert('Purchase Successful', `Your Transaction ID is ${response.transactionIdentifier}`);
    //     // unlock store here.
    //   }
    // });
  }

  changeTab(ref) {
    if (ref.props.heading === '文章收藏夹') {
      this.fetchUserArticle();
    }
    if (ref.props.heading === '自选行情') {
      this.fetchUserStock();
    }
    if (ref.props.heading === '我的新历') {
      this.fetchUserCollectNum();
    }
  }

  async fetchUserCollectNum() {
    if (this.state.user.user_id) {
      const formData = {
        type: 'selectCount',
        userId: this.state.user.user_id,
      };
      const posts = await this.props.wordpressApi.getUserCollectNum(formData);
      console.log(posts);
      console.log(posts.data.post_count);
      this.setState({
        user: {
          name: posts.data.user_login,
          user_id: posts.data.user_id,
          myArticleNum: posts.data.post_count,
          myStockNum: posts.data.stock_count,
        },
      });
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <Tabs initialPage={0} locked onChangeTab={({ ref }) => this.changeTab(ref)}>
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
              ref={(c) => { this.articleCard = c; }}
              news={this.state.myArticle.data}
              scroll={this.fetchUserArticle}
              delete={this.deleteArticleRecord}
              navigation={this.props.navigation}
            />
          </Tab>
          <Tab heading='自选行情' >
            <StockInfo
              ref={(c) => { this.stockCard = c; }}
              stocks={this.state.myStock.data}
              scroll={this.fetchUserStock}
              delete={this.deleteStockRecord}
              navigation={this.props.navigation}
            />
          </Tab>
        </Tabs>

      </View>
    );
  }
}

export default ProfileScreen;
