import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';

class StockScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="bar-chart" size={25} color={tintColor} />
    ),
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Stocks</Text>
      </View>
    );
  }
}

export default StockScreen;
