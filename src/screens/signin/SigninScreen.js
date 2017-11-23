import React, { Component } from 'react';
import { View, AsyncStorage, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Tabs, Tab, Input, Item, Icon, Title, Button, Text } from 'native-base';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import styles from './styles/SigninScreen';
import { authenticate } from './actions';

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
    tabBarLabel: '个人信息',
    titleStyle: { color: Colors.$redColor },
    headerStyle: { 
      backgroundColor: Colors.$whiteColor, 
      borderBottomWidth: 3, 
      borderBottomColor: Colors.$navigationHeaderTextColor, 
      borderStyle: 'solid', 
    },
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon name='md-menu' style={{ fontSize: 30, color: Colors.$navigationHeaderTextColor, marginTop: '6%' }} />
        </Button>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <Text style={styles.titleText}>新历财经</Text>
      </View>
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon name='md-search' style={{ fontSize: 30, color: Colors.$navigationHeaderTextColor }} />
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={25} color={tintColor} />
    ),
  });

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', aotoLogin: false };
    this.signin = this.signin.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeAutoLogin = this.changeAutoLogin.bind(this);
  }

  changeUsername(title) {
    this.setState({ username: title });
  }

  changePassword(title) {
    this.setState({ password: title });
  }

  changeAutoLogin(title) {
    this.setState({ aotoLogin: title });
  }

  /**
   * 登陆
   * @returns 
   * @memberof SigninScreen
   */
  login() {
    const formData = {
      type: 'login',
      login: this.state.username,
      password: this.state.password,
    };
    const { data } = this.props.authenticate(formData);
    return data;
  }

  /**
   * 注册
   * @memberof SigninScreen
   */
  signin() {
    const formData = {
      type: 'login',
      login: this.state.username,
      password: this.state.password,
    };
    this.props.authenticate(formData)
      .then((response) => {
        // this.props.navigation.navigate('Profile', { params: response });
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
        <Tabs initialPage={0}>
          <Tab heading='登陆'>
            <View style={styles.formTitle}>
              <Title>登陆</Title>
            </View>
            <Item style={styles.inputStyle} regular>
              <Input placeholder='请输入您的用户名或者注册邮箱' onChangeText={this.changeUsername} />
            </Item>
            <Item style={styles.inputStyle} regular>
              <Input placeholder='请输入密码' onChangeText={this.changePassword} />
            </Item>
            <View>
              <CheckBox title='下次自动登陆' checked={this.state.checked} onValueChange={this.changeAutoLogin} />
            </View>
            <View style={styles.flexContainer}>
              <View style={styles.cell}>
                <Button style={styles.buttonStyle} onPress={this.login} >
                  <MaterialCommunityIcons name='account' style={{ fontSize: 20, color: Colors.$whiteColor, marginRight: '2%' }} />
                  <Text>登入</Text>                  
                </Button>
              </View> 
              <View style={[styles.cell, styles.smallBtn]}> 
                <Button small style={styles.buttonStyle}>
                  <Text>微信登陆</Text>
                </Button>
              </View>
              <View style={[styles.cell, styles.smallBtn]}>
                <Button small style={styles.buttonStyle}>
                  <Text>微博注册</Text>
                </Button>
              </View>
            </View>
            <Button transparent info><Text style={styles.myColor}>忘记密码？</Text></Button>
            <Button transparent info style={styles.myColor}>
              <MaterialCommunityIcons name='phone' style={[{ fontSize: 15, marginLeft: '4%', paddingRight: '0%' }, styles.myColor]} />
              <Text style={[{ paddingLeft: '0%' }, styles.myColor]}>联系我们</Text>
            </Button>                                  
          </Tab>
          <Tab heading='注册'>
            <View style={styles.formTitle}>
              <Title>注册新账户</Title>
            </View>           
            <Item style={styles.inputStyle} regular>
              <Input placeholder='请输入您的邮箱地址' />
            </Item>
            <Item style={styles.inputStyle} regular>
              <Input placeholder='请输入用户名' />
            </Item>
            <Item style={styles.inputStyle} regular>
              <Input placeholder='请输入密码' />
            </Item>
            <Item style={styles.inputStyle} regular>
              <Input placeholder='重复密码' />
            </Item>
            <View style={styles.flexContainer}>
              <View style={styles.cell}>
                <Button style={styles.buttonStyle} onPress={this.signin} >
                  <MaterialCommunityIcons name='lead-pencil' style={{ fontSize: 20, color: Colors.$whiteColor }} />
                  <Text>注册</Text>                 
                </Button>
              </View> 
              <View style={[styles.cell, styles.smallBtn]}> 
                <Button small style={styles.buttonStyle}>
                  <Text>微信登陆</Text>
                </Button>
              </View>
              <View style={[styles.cell, styles.smallBtn]}>
                <Button small style={styles.buttonStyle}>
                  <Text>微博注册</Text>
                </Button>
              </View>
            </View>
          </Tab>
        </Tabs>
        
      </View>
    );
  }
}

export default SigninScreen;
