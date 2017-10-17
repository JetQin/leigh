import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, FormLabel, FormInput, Button } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import styles from './styles/SigninScreen';

class SigninScreen extends Component {
  static navigationOptions = {
    title: '登录',
    // header: () => {
    //   const style = { backgroundColor: Colors.$redColor };
    //   const titleStyle = { color: Colors.$whiteColor };
    //   return { style, titleStyle };
    // },
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
        <View>
          <FormLabel>用户名</FormLabel>
          <FormInput />
        </View>
        <View>
          <FormLabel>密码</FormLabel>
          <FormInput secureTextEntry={true} />
        </View>
        <View style={styles.bottom}>
          <Button title='登录' style={styles.signinBtn} backgroundColor={Colors.$redColor} />
        </View>
      </View>
    );
  }
}

export default SigninScreen;
