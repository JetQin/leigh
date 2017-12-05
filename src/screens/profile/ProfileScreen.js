import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image } from 'react-native';
import { Avatar, Badge, List, ListItem } from 'react-native-elements';
import { Container, Button, Segment, Content, Tabs, Tab, ScrollableTab, Icon } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import styled from 'styled-components/native';
import styles from './styles/ProfileScreen';

import { connect } from 'react-redux';
import { fetchArticle } from './actions';

const PassBtn = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
  flex: 0.5;
  flexDirection: row;
  backgroundColor: ${({ color }) => color};
`;

@connect(state => ({
  data: state.profile.data,
}), { fetchArticle })
class ProfileScreen extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '个人信息',
    headerStyle: { backgroundColor: Colors.$redColor },
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>新历财经</Text>
      </View>
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon name='md-search' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
        <Button rounded light onPress={() => navigation.navigate('Logout')}><Text style={Fonts.buttonAuth}>登出</Text>
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="account-circle" size={25} color={tintColor} />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      first: true,
      second: false,
      last: false,
      passed: 0,
      unpassed: 0,
      user: {
        icon: '',
        name: '',
        user_id: '',
      },
      items: [{
        name: 'test',
        author: 'test',
        date: '2017/9/9',
      }],
    };
    this.changeTab = this.changeTab.bind(this);
    this.login = this.login.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    console.log('****************mount****************');
    console.log(this.props.navigation);
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
      },
      passed: 0,
      unpassed: 0,
      items: [],
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
          },
        });
        console.log(loginInfo);
        this.fetchPosts(params.data.user_id, 'publish');
        this.props.navigation.setParams({ isLogin: true });
        this.props.navigation.setParams({ logout: this.logout });
      } else {
        this.props.navigation.setParams({ isLogin: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPosts(userID, type) {
    console.log('****************fetch posts****************');
    const formData = {
      type: 'fetchArticle',
      user_id: userID,
      article_type: type,
    };
    const response = await this.props.fetchArticle(formData);
    if (undefined !== response) {
      this.setState({
        items: response.value.posts,
        passed: response.value.passed,
        unpassed: response.value.unpassed,
      });
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

  changeTab(e, tabName) {
    if (tabName === 'first') {
      const active = true;
      this.setState({ first: active, second: !active, last: !active });
      if (this.state.isLogin) {
        this.fetchPosts(this.state.user.user_id, 'publish');
      }
      console.log(this.state);
    }
    if (tabName === 'second') {
      const active = true;
      this.setState({ first: !active, second: active, last: !active });
      if (this.state.isLogin) {
        this.fetchPosts(this.state.user.user_id, 'draft');
      }
      console.log(this.state);
    }
    if (tabName === 'last') {
      const active = true;
      this.setState({ first: !active, second: !active, last: active });
      if (this.state.isLogin) {
        this.fetchPosts(this.state.user.user_id, 'others');
      }
      console.log(this.state);
    }
  }

  render() {
    console.log('****************render****************');
    let listItems;
    if (this.state.isLogin) {
      listItems = this.state.items.map((l, i) => (
        <ListItem
          key={i}
          title={l.name}
          subtitle={l.author}
          rightTitle={l.date}
        />
      ));
    } else {
      listItems = <View />;
    }
    return (
      <View style={styles.root}>
        <View style={styles.bottomContainer}>
          <Tabs renderTabBar={() => <ScrollableTab />} onChangeTab={({ ref }) => this.changeTab(ref)} >
            <Tab heading='我的新历'>
              {/* <NewsCard ref={(c) => { this.hot = c; }} news={this.state.hotNews.data} scroll={this.updateHotNews} navigation={this.props.navigation} /> */}
            </Tab>
            <Tab heading='文章收藏夹'>
              {/* <NewsCard ref={(c) => { this.tech = c; }} news={this.state.techNews.data} scroll={this.updateTechNews} navigation={this.props.navigation} /> */}
            </Tab>
            <Tab heading='自选行情'>
              {/* <NewsCard ref={(c) => { this.finance = c; }} news={this.state.financeNews.data} scroll={this.updateFinanceNews} navigation={this.props.navigation} /> */}
            </Tab>
          </Tabs>
        </View>
        <View style={styles.avatarContainer}>
          <Avatar
            large
            rounded
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
            onPress={this.login}
            activeOpacity={0.7}
          />
          <View style={styles.settingContainer}>
            <Icon color='#00aced' size={16} name='settings' onPress={this.changeAvatar} />
            <Text style={Fonts.buttonAuth}>{this.state.user.name}</Text>
          </View>
        </View>
        <View style={styles.followContainer}>
          <PassBtn color={Colors.$passButtonColor}>
            <Text style={Fonts.buttonAuth}>已通过版本</Text>
            <Badge value={this.state.passed} textStyle={{ color: Colors.$whiteColor }} containerStyle={{ backgroundColor: Colors.$redColor }} />
          </PassBtn>
          <PassBtn color={Colors.$notpassButtonColor}>
            <Text style={Fonts.buttonAuth}>未通过版本</Text>
            <Badge value={this.state.unpassed} textStyle={{ color: Colors.$whiteColor }} containerStyle={{ backgroundColor: Colors.$redColor }} />
          </PassBtn>
        </View>
        <View style={styles.paneContainer}>
          <Container>
            <Segment style={{ backgroundColor: Colors.$blackBlueColor }}>
              <Button first active={this.state.first} onPress={(e) => this.changeTab(e, 'first')}><Text style={Fonts.buttonAuth}>已通过</Text></Button>
              <Button second active={this.state.second} onPress={(e) => this.changeTab(e, 'second')}><Text style={Fonts.buttonAuth}>待通过</Text></Button>
              <Button last active={this.state.last} onPress={(e) => this.changeTab(e, 'last')}><Text style={Fonts.buttonAuth}>未通过</Text></Button>
            </Segment>
            <Content padder>
              <List containerStyle={{ marginBottom: 20 }}>
                { listItems }
              </List>
            </Content>
          </Container>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
