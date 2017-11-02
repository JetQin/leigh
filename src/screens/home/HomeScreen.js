import React from 'react';
import { View, Text, Image } from 'react-native';
import { LoadingScreen } from '../../commons/';
import { NewsCardList } from './components/';
import { Button, Icon } from 'native-base';
import Swiper from 'react-native-swiper';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import { connect } from 'react-redux';
import styles from './styles/HomeScreen';

import { fetchData } from './actions';

@connect(
  state => ({
    data: state.home.data,
  }),
  { fetchData }
)
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '主页',
    titleStyle: { color: Colors.$redColor },
    headerStyle: { backgroundColor: Colors.$redColor },
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <Text style={styles.title}>新历财经</Text>
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
      <FontAwesome name="home" size={25} color={tintColor} />
    ),
  });

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const {
      data: {
        news,
        isFetched,
      },
    } = this.props;

    if (!isFetched) {
      return <LoadingScreen />;
    }
    const swiperItems = news.map((item, i) => {
      const imgUri = item.img;
      return (
        <View key={i} style={styles.slide}>
          <Image source={{ uri: imgUri }} style={styles.image}>
            <View style={styles.backdrop}>
              <Text style={styles.text}>{item.content}</Text>
            </View>
          </Image>
        </View>);
    });
    return (

      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Swiper style={styles.wrapper} >
            {swiperItems}
          </Swiper>
        </View>
        <View style={styles.bottomContainer}>
          <NewsCardList news={news} navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
