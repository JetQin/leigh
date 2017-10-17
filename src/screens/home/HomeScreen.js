import React from 'react';
import { View, Text, Image } from 'react-native';
import { WordpressApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons/';
import { PostList, PostCardList } from './components/';
import { Button, Icon } from 'native-base';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import { connect } from 'react-redux';
import styles from './styles/HomeScreen';

import { fetchPosts } from './actions';

const wordpressApi = new WordpressApi();

@connect(
  state => ({
    posts: state.home.posts,
  }),
  { fetchPosts }
)

class HomeScreen extends React.Component {
  static defaultProps = {
    wordpressApi,
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: Colors.$redColor },
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <Text style={styles.title}>新历财经</Text>
      </View>
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button transparent onPress={() => navigation.navigate('Login')}>
          <Icon name='md-search' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
        <Button transparent onPress={() => navigation.navigate('Signin')}>
          <MaterialCommunityIcons name='share' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={25} color={tintColor} />
    ),
  });

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const {
      posts: {
        isFetched,
        data,
      },
    } = this.props;
    if (!isFetched) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>Welcome HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <PostCardList posts={data} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
