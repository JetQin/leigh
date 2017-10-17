import React, { Component } from 'react';
import { View } from 'react-native';
import { Avatar, FormLabel, FormInput, Button } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import styles from './styles/SignupScreen';

class SignupScreen extends Component {
  static navigationOptions = {
    title: '注册',
    headerStyles: {
      backgroundColor: Colors.$redColor,
      color: Colors.$redColor,
    },
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.titleContainer}>
          <Avatar
            xlarge
            rounded
            icon={{ name: 'account-circle' }}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <FormLabel>用户名</FormLabel>
            <FormInput />
          </View>
          <View>
            <FormLabel>邮箱</FormLabel>
            <FormInput />
          </View>
          <View>
            <FormLabel>密码</FormLabel>
            <FormInput secureTextEntry={true} />
          </View>
        </View>
        <View style={styles.bottom}>
          <Button title='注册' style={styles.signinBtn} backgroundColor={Colors.$redColor} />
        </View>
      </View>
    );
  }
}

export default SignupScreen;
