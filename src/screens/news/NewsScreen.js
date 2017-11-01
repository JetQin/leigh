import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { Tabs, Tab } from 'native-base';
import Colors from '../../../constants/Colors';
import NewsCard from './components/NewsCard';
import styles from './styles/NewsScreen';
import { WordpressApi } from '../../../constants/api';

const wordpressApi = new WordpressApi();

class NewsScreen extends Component {
  static defaultProps = {
    wordpressApi,
  }

  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
    title: '商业新闻',
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="newspaper" size={25} color={tintColor} />
    ),
  }

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
    console.log(this.state.page);
    console.log(this.state.news);
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
          <Tabs initialPage={1}>
            <Tab heading='新闻'>
              <NewsCard news={this.state.news} scroll={this.scroll.bind(this)} />
            </Tab>
            <Tab heading='股市'>
              <NewsCard news={this.state.news} scroll={this.scroll.bind(this)} />
            </Tab>
          </Tabs>
        </View>
      </View>
    );
  }
}

export default NewsScreen;
