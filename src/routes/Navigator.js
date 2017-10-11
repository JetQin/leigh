import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import { LoginScreen } from '../screens';

export default StackNavigator({
  Home: { screen: HomeNavigator },
  Login: { screen: LoginScreen },
},
{
  mode: 'modal',
});
