import { StackNavigator } from 'react-navigation';
import { HomeNavigator } from './HomeNavigator';
import { LoginScreen, SigninScreen, SignupScreen, ViewHtml } from '../screens';

export default StackNavigator({
  Home: { screen: HomeNavigator },
  Login: { screen: LoginScreen },
  Signin: { screen: SigninScreen },
  Signup: { screen: SignupScreen },
  ViewHtml: { screen: ViewHtml },
},
{
  mode: 'modal',
});
