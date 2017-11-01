import React, { Component } from 'react';
import { View, AsyncStorage, Text } from 'react-native';
import { Avatar, FormLabel, FormInput, Button } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import styles from './styles/SigninScreen';
import { connect } from 'react-redux';
import { authenticate } from './actions';
import { NavigationActions } from 'react-navigation';

// import WordpressApi from '../../../constants/api';
// const api = new WordpressApi();

@connect(
  state => ({
    data: state.signin,
  }),
  { authenticate }
)
class SigninScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '登录',
    headerRight: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button title='注册' onPress={() => navigation.navigate('Signup')} />
      </View>
    ),
  });

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.signin = this.signin.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername(title) {
    this.setState({ username: title });
  }

  changePassword(title) {
    this.setState({ password: title });
  }

  loginRequest() {
    const formData = {
      type: 'login',
      login: this.state.username,
      password: this.state.password,
    };
    const { data } = this.props.authenticate(formData);
    return data;
  }

  signin() {
    const formData = {
      type: 'login',
      login: this.state.username,
      password: this.state.password,
    };
    this.props.authenticate(formData)
      .then((response) => {
        //this.props.navigation.navigate('Profile', { params: response });
        // this.props.navigation.state.params = response;
        // this.props.navigation.goBack();
        // const navigateAction = NavigationActions.navigate({
        //   routeName: 'Home',
        //   params: { params: response },
        //   action: NavigationActions.navigate({ routeName: 'Profile' }),
        // });
        try {
          AsyncStorage.setItem('@login', JSON.stringify(response.action.payload));
        } catch (error) {
          console.log(error);
        }
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }).catch(errors => console.log(errors));
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
          <FormInput autoCapitalize='none' onChangeText={this.changeUsername} />
        </View>
        <View>
          <FormLabel>密码</FormLabel>
          <FormInput secureTextEntry autoCapitalize='none' onChangeText={this.changePassword} />
        </View>
        <View style={styles.bottom}>
          <Button title='登录' style={styles.signinBtn} backgroundColor={Colors.$redColor} onPress={this.signin} />
        </View>
      </View>
    );
  }
}

export default SigninScreen;
