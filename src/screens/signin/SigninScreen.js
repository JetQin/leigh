import React, { Component } from 'react';
import { View, AsyncStorage, Image } from 'react-native';
// import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Tabs, Tab, Icon, Title, Button, Text } from 'native-base';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import styles from './styles/SigninScreen';
import { authenticate, register } from './actions';
import CheckBox from './components/CheckBox';
import Input from './components/Input';
// import WordpressApi from '../../../constants/api';
// const api = new WordpressApi();

@connect(
  state => ({
    data: state.login,

  }),
  { authenticate, register }
)
class SigninScreen extends Component {
  static defaultProps = {
    password: true,
  };
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
    this.state = { 
      username: '',
      usernameHelp: '', 
      password: '', 
      passwordHelp: '',
      aotoLogin: false, 
      email: '', 
      emailHelp: '',
      rUsername: '', 
      rUsernameHelp: '',
      rPassword: '', 
      rPasswordHelp: '',
      rPasswordRe: '', 
      rPasswordReHelp: '',
      validateFlag: true,
    };
    this.signin = this.signin.bind(this);
    this.login = this.login.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeRegisterusername = this.changeRegisterusername.bind(this);
    this.changeRegisterPassword = this.changeRegisterPassword.bind(this);
    this.changeRegisterPasswordRe = this.changeRegisterPasswordRe.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }

  changeUsername(title) {
    this.setState({ username: title });
  }

  changePassword(passw) {
    this.setState({ password: passw });
  }

  changeEmail(mail) {
    this.setState({ email: mail });   
  }

  changeRegisterusername(rusername) {
    this.setState({ rUsername: rusername });
  }

  changeRegisterPassword(rpassword) {
    this.setState({ rPassword: rpassword });
  }

  changeRegisterPasswordRe(rpasswordRe) {
    this.setState({ rPasswordRe: rpasswordRe });
  }

  validatedEmail() {
    if (this.state.email === '' || this.state.email === null) {
      this.emailInput.setState({ helpInfo: '* 邮箱不能为空' });
      this.state.validateFlag = false;
    } else if (this.state.email) {
      const emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const reg = new RegExp(emailReg);
      if (!reg.test(this.state.email)) {
        this.emailInput.setState({ helpInfo: '* 请输入正确的邮箱格式' });
        this.state.validateFlag = false;
      } else {
        this.state.validateFlag = true;
      }
    }
  }
  validateRUsername() {
    if (this.state.rUsername === '' || this.state.rUsername === null) {
      this.rusernameInput.setState({ helpInfo: '* 用户名不能为空' });
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  validateRPassword() {
    if (this.state.rPassword === '' || this.state.rPassword === null) {
      this.rPasswordInput.setState({ helpInfo: '* 密码不能为空' });
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  validateRPasswordRe() {
    if (this.state.rPasswordRe === '' || this.state.rPasswordRe === null) {
      this.rPasswordReInput.setState({ helpInfo: '* 重复密码不能为空' });
      this.state.validateFlag = false;
    } else if (this.state.rPassword !== this.state.rPasswordRe) {
      this.rPasswordReInput.setState({ helpInfo: '* 请输入相同的密码' });
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  validatePassword() {
    if (this.state.password === '' || this.state.password === null) {
      this.passwordInput.setState({ helpInfo: '* 密码不能为空' });
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  validateUsername() {
    if (this.state.username === '' || this.state.username === null) {
      this.usernameInput.setState({ helpInfo: '* 用户名不能为空' });
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  /**
   * 注册
   * @returns 
   * @memberof SigninScreen
   */
  signin() {
    this.validatedEmail();
    // this.emailInput._myInput
    if (!this.state.validateFlag) {
      this.emailInput._myInput.setNativeProps({
        style: { borderColor: 'red' },
      });
      return;
    }
    this.validateRUsername();
    if (!this.state.validateFlag) {
      this.rusernameInput._myInput.setNativeProps({
        style: { borderColor: 'red' },
      });
      return;
    }

    this.validateRPassword();
    if (!this.state.validateFlag) {
      this.rPasswordInput._myInput.setNativeProps({
        style: { borderColor: 'red' },
      });
      return;
    }
    this.validateRPasswordRe();
    if (!this.state.validateFlag) {
      this.rPasswordReInput._myInput.setNativeProps({
        style: { borderColor: 'red' },
      });
      return;
    }
    const formData = {
      type: 'register',
      user_name: this.state.registerusername,
      password: this.state.registerPassword,
      email: this.state.email,
    };
    
    this.props.register(formData)
      .then((response) => {
        try {
          if (JSON.stringify(response.value.status)) {
            this.props.navigation.navigate('Signin');
          }
        } catch (error) {
          console.log(error);
        }            
      })
      .catch(errors => console.log(errors));    
  }

  /**
   * 登录
   * @memberof SigninScreen
   */
  login() { 
    this.validateUsername();
    if (!this.state.validateFlag) {
      this.usernameInput._myInput.setNativeProps({
        style: { borderColor: 'red' },
      });
      return;
    }
    this.validatePassword();
    if (!this.state.validateFlag) {
      this.passwordInput._myInput.setNativeProps({
        style: { borderColor: 'red' },
      });
      return;
    }
    const formData = {
      type: 'login',
      login: this.state.username,
      password: this.state.password,
    };
    this.props.authenticate(formData)
      .then((response) => {
        try {
          AsyncStorage.setItem('@login', JSON.stringify(response.data.user_login));
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

  changeStyle(obj) {
    obj.inputRef.setNativeProps({
      style: { borderColor: '#ccc' },
    });
    obj.setState({ helpInfo: '' });
  }

  render() {
    return (
      <View style={styles.root}>
        <Tabs initialPage={0}>
          <Tab heading='登陆'>
            <View style={styles.formTitle}>
              <Title>登陆</Title>
            </View>
            <View>
              <View>
                <Input
                  placeholder='请输入您的用户名或者注册邮箱'
                  onChange={this.changeUsername}
                  helpInfo={this.state.usernameHelp}
                  ref={(c) => { this.usernameInput = c; }}                  
                />
              </View>
              <View>
                <Input
                  placeholder='请输入密码'
                  password={this.props.password}
                  onChange={this.changePassword}
                  helpInfo={this.state.passwordHelp}
                  ref={(c) => { this.passwordInput = c; }} 
                />
              </View>
              <View>
                <CheckBox 
                  label="下次自动登陆" checked={this.state.aotoLogin} 
                  value={this.state.aotoLogin} 
                  checkStyle={styles.check}
                  labelStyle={styles.labelCheck}
                />
              </View>               
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
            <Button transparent info >
              <MaterialCommunityIcons name='phone' style={[{ fontSize: 15, marginLeft: '4%', paddingRight: '0%' }, styles.myColor]} />
              <Text style={[{ paddingLeft: '0%' }, styles.myColor]}>联系我们</Text>
            </Button>                                  
          </Tab>
          <Tab heading='注册'>
            <View style={styles.formTitle}>
              <Title>注册新账户</Title>
            </View>
            <View>
              <View>
                <Input
                  placeholder='请输入您的邮箱地址'
                  onChange={this.changeEmail}
                  helpInfo={this.state.emailHelp}
                  ref={(c) => { this.emailInput = c; }}  
                />
              </View>
              <View>
                <Input
                  placeholder='请输入用户名'
                  onChange={this.changeRegisterusername}
                  helpInfo={this.state.rUsernameHelp}
                  ref={(c) => { this.rusernameInput = c; }} 
                />
              </View>             
              <View>
                <Input
                  placeholder='请输入密码'
                  password={this.props.password}
                  onChange={this.changeRegisterPassword}
                  helpInfo={this.state.rPasswordHelp}
                  ref={(c) => { this.rPasswordInput = c; }} 
                />
              </View>
              <View>
                <Input
                  placeholder='重复密码'
                  password={this.props.password}
                  onChange={this.changeRegisterPasswordRe}
                  helpInfo={this.state.rPasswordReHelp}
                  ref={(c) => { this.rPasswordReInput = c; }} 
                />
              </View>             
            </View>                     
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
