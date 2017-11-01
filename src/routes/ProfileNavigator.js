import { StackNavigator } from 'react-navigation';
import { LoginScreen, ProfileScreen } from '../screens';

export default StackNavigator({
  Profile: { screen: ProfileScreen },
  Login: { screen: LoginScreen },
},
{
  mode: 'modal',
});
