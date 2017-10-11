import React from 'react';
import { View, Text } from 'react-native';
import { WordpressApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons/';
import { PostList } from './components/';
import { Button, Icon } from 'native-base';
import { FontAwesome } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';

import styles from './styles/HomeScreen';

const wordpressApi = new WordpressApi();

class HomeScreen extends React.Component {
  static defaultProps = {
    wordpressApi,
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: Colors.$redColor },
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button transparent onPress={() => navigation.navigate('Login')}>
          <Icon name='md-menu' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
      </View>
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button transparent onPress={() => navigation.navigate('Login')}>
          <Icon name='md-search' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
        <Button transparent onPress={() => navigation.navigate('Login')}>
          <Icon name='md-contact' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={25} color={tintColor} />
    ),
  });

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
