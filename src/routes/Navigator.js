import { StackNavigator } from 'react-navigation';
import { HomeNavigator } from './HomeNavigator';
import { LoginScreen, SigninScreen, SignupScreen, SearchScreen, ViewHtml } from '../screens';

export default StackNavigator({
  Home: { screen: HomeNavigator },
  Login: { screen: LoginScreen },
  Signin: { screen: SigninScreen },
  Signup: { screen: SignupScreen },
  Search: { screen: SearchScreen },
  ViewHtml: { screen: ViewHtml },
},
{
  mode: 'modal',
});
