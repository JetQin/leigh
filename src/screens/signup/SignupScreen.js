import React, { Component } from 'react';
import { View } from 'react-native';
import { Avatar, FormLabel, FormInput, Button } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import styles from './styles/SignupScreen';
import { WordpressApi } from '../../../constants/api';

const api = new WordpressApi();

class SignupScreen extends Component {

  static defaultProps = {
    api,
  }

  static navigationOptions = {
    title: '注册',
    headerStyles: {
      backgroundColor: Colors.$redColor,
      color: Colors.$redColor,
    },
  }

  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.register = this.register.bind(this);
  }

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleEmailChange(text) {
    this.setState({ email: text });
  }

  handleUserNameChange(text) {
    this.setState({ name: text });
  }

  handlePasswordChange(text) {
    this.setState({ password: text });
  }

  async register() {
    const params = {
      type: 'register',
      user_name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    const response = await this.props.api.register(params);
    console.log(response);
    if (response && response.status) {
      this.props.navigation.goBack();
    }
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
            <FormInput autoCapitalize='none' onChangeText={this.handleUserNameChange} />
          </View>
          <View>
            <FormLabel>邮箱</FormLabel>
            <FormInput autoCapitalize='none' onChangeText={this.handleEmailChange} />
          </View>
          <View>
            <FormLabel>密码</FormLabel>
            <FormInput secureTextEntry autoCapitalize='none' onChangeText={this.handlePasswordChange} />
          </View>
        </View>
        <View style={styles.bottom}>
          <Button title='注册' style={styles.signinBtn} backgroundColor={Colors.$redColor} onPress={this.register} />
        </View>
      </View>
    );
  }
}

export default SignupScreen;
