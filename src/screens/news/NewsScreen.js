import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs, Tab, Button, Icon } from 'native-base';
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
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <MaterialCommunityIcons name='share' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="newspaper" size={25} color={tintColor} />
    ),
  });

  state = {
    type: 'fetchPosts',
    page: 1,
    news: [],
  }

  async componentDidMount() {
    const request = {
      type: this.state.type,
      page: this.state.page,
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ news: posts });
  }

  async scroll() {
    this.setState({ page: this.state.page + 1 });
    const request = {
      type: this.state.type,
      page: this.state.page,
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    console.log(posts);
    this.setState({ news: this.state.news.concat(posts) });
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.bottomContainer}>
          <Tabs>
            <Tab heading='金融'>
              <NewsCard news={this.state.news} scroll={this.scroll.bind(this)} />
            </Tab>
            <Tab heading='地产'>
              <NewsCard news={this.state.news} scroll={this.scroll.bind(this)} />
            </Tab>
            <Tab heading='科技'>
              <NewsCard news={this.state.news} scroll={this.scroll.bind(this)} />
            </Tab>
          </Tabs>
        </View>
      </View>
    );
  }
}

export default NewsScreen;
