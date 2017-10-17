import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import styles from './styles/HolderScreen';

class HolderScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="account-card-details" size={25} color={tintColor} />
    ),
  }
  search() {
    console.log('search holder');
  }

  render() {
    return (
      <View>
        <SearchBar
          lightTheme
          onChangeText={this.search}
          placeholder='Type Here...'
        />
      </View>
    );
  }
}

export default HolderScreen;
