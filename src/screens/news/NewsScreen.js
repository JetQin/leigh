import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons/';

import Colors from '../../../constants/Colors';
import NewsCard from './components/NewsCard';
import styles from './styles/NewsScreen';

class NewsScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
    headerLeft: (
      <View style={styles.headerContainer}>
        <Text style={{ color: Colors.$whiteColor, fontSize: 20, fontFamily: 'montserrat', textAlign: 'center' }}>商业新闻</Text>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="newspaper" size={25} color={tintColor} />
    ),
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.bottomContainer}>
          <NewsCard />
        </View>
      </View>
    );
  }
}

export default NewsScreen;
