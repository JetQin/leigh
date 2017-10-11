import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';

class HolderScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="account-card-details" size={25} color={tintColor} />
    ),
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>News</Text>
      </View>
    );
  }
}

export default HolderScreen;
