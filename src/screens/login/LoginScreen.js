import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../constants/Colors';

class LoginScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

export default LoginScreen;
