import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, AsyncStorage, Alert } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import moment from 'moment';
import styles from './styles/NewsCard';
import { WordpressApi } from '../../../../constants/api';

const wordpressApi = new WordpressApi();

class NewsCard extends Component {
  static defaultProps ={
    wordpressApi,
  }
  constructor(props) {
    super(props);
    this._onRefresh = this._onRefresh.bind(this);
    this.state = {
      refreshing: false,
      news: [],
    };
  }

  componentDidMount() {
    this.setState({ news: this.props.news });
  }

  _onRefresh() {
    console.log('refresh');
    this.setState({ refreshing: true });
    this.props.scroll().then(() => {
      this.setState({ refreshing: false, news: this.props.news });
    });
  }

  async addPostList(postId) {
    const login = await AsyncStorage.getItem('@user_id');
    console.log(login);
    if (undefined === login || login === null) {
      Alert.alert('警告', '用户未登录，请先登录',
        [
          { text: '确定' },
        ],
        { cancelable: false }
      );
    } else {
      const params = { userId: login, postId };
      this.props.wordpressApi.addPostToList(params);
      Alert.alert('提示', '收藏成功',
        [
          { text: '确定' },
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    if (!this.props.news) {
      return (<View />);
    }
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {
          this.state.news.map((item, i) => (
            <ListItem
              key={i}
              onPress={() => (this.props.navigation.navigate('ViewHtml', { uri: item.url }))}
              leftIcon={item.picUrl === '' ? <View style={styles.emptyView} /> : <Avatar medium source={{ uri: item.picUrl }} />}
              avatarContainerStyle={{ paddingLeft: 0, left: 0 }}
              title={item.name}
              titleStyle={{ paddingLeft: 10 }}
              hideChevron
              subtitle={
                <View style={styles.footer}>
                  <Text style={styles.footerText}>{moment(item.date, 'YYYY-MM-DD').startOf('day').fromNow()}</Text>
                  <Icon size={12} name='tags' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
                  <Text style={styles.footerText}>{item.category}</Text>
                  <Icon size={12} name='comments' type='font-awesome' color='#384259' iconStyle={styles.icon} />
                  <Icon size={12} name='bookmark' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => this.addPostList(item.id)} />
                  <Icon size={12} name='share' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
                </View>
              }
              subtitleContainerStyle={{ paddingLeft: 10, paddingTop: 8, paddingBottom: 5 }}
            />
          ))
        }
      </ScrollView>
    );
  }
}

export default NewsCard;
