import React from 'react';
import { View, Text } from 'react-native';
import { WordpressApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons/';
import { PostList } from './components/';
import { FontAwesome } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';

import styles from './styles/HomeScreen';

const wordpressApi = new WordpressApi();

class HomeScreen extends React.Component {
  static defaultProps = {
    wordpressApi,
  }

  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={25} color={tintColor} />
    ),
  }
  state = {
    loading: false,
    posts: [],
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const posts = this.props.wordpressApi.fetchAllPost();
    this.setState({ loading: false, posts });
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>Welcome HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <PostList posts={this.state.posts} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
