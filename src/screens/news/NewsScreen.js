import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs, ScrollableTab, Tab, Button, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import NewsCard from './components/NewsCard';
import styles from './styles/NewsScreen';
import { WordpressApi } from '../../../constants/api';

const wordpressApi = new WordpressApi();

class NewsScreen extends Component {
  static defaultProps = {
    wordpressApi,
  }

  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '商业新闻',
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
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="newspaper" size={25} color={tintColor} />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      type: 'fetchPosts',
      financeNews: { page: 1, data: [] },
      businessNews: { page: 1, data: [] },
      bankNews: { page: 1, data: [] },
      houseNews: { page: 1, data: [] },
      techNews: { page: 1, data: [] },
    };
    this.updateFinanceNews = this.updateFinanceNews.bind(this);
  }

  async componentDidMount() {
    const request = {
      type: this.state.type,
      page: this.state.financeNews.page,
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ financeNews: { page: 2, data: posts } });
  }

  prepend(newValue, oldValue) {
    for (let data = 0; data < oldValue.length; data++) {
      newValue.push(oldValue[data]);
    }
    return newValue;
  }

  async updateFinanceNews() {
    console.log('***************updateFinanceNews*******************');
    const request = {
      type: this.state.type,
      page: this.state.financeNews.page + 1,
      category: 'finance',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ financeNews: { page: this.state.financeNews.page + 1, data: posts.concat(this.state.financeNews.data) } });
  }

  async updateBusinessNews() {
    const request = {
      type: this.state.type,
      page: this.state.businessNews.page + 1,
      category: 'business',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ businessNews: { page: this.state.businessNews.page + 1, data: this.prepend(posts, this.state.businessNews.data) } });
  }

  async updateBankNews() {
    const request = {
      type: this.state.type,
      page: this.state.bankNews.page + 1,
      category: 'business',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ bankNews: { page: this.state.bankNews.page + 1, data: this.prepend(posts, this.state.bankNews.data) } });
  }

  async updateHouseNews() {
    const request = {
      type: this.state.type,
      page: this.state.houseNews.page + 1,
      category: 'house',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ houseNews: { page: this.state.houseNews.page + 1, data: this.prepend(posts, this.state.houseNews.data) } });
  }

  async updateTechNews() {
    const request = {
      type: this.state.type,
      page: this.state.techNews.page + 1,
      category: 'tech',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ techNews: { page: this.state.techNews.page + 1, data: this.prepend(posts, this.state.techNews.data) } });
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.bottomContainer}>
          <Tabs renderTabBar={() => <ScrollableTab />} >
            <Tab heading='金融'>
              <NewsCard news={this.state.financeNews.data} scroll={this.updateFinanceNews} />
            </Tab>
            <Tab heading='商业'>
              <NewsCard news={this.state.businessNews.data} scroll={this.updateBusinessNews} />
            </Tab>
            <Tab heading='银行'>
              <NewsCard news={this.state.bankNews.data} scroll={this.updateBankNews} />
            </Tab>
            <Tab heading='地产'>
              <NewsCard news={this.state.houseNews.data} scroll={this.updateHouseNews} />
            </Tab>
            <Tab heading='科技'>
              <NewsCard news={this.state.techNews.data} scroll={this.updateTechNews} />
            </Tab>
          </Tabs>
        </View>
      </View>
    );
  }
}

export default NewsScreen;
