import { TabNavigator } from 'react-navigation';
import { HomeScreen, NotificationScreen, ProfileScreen } from '../screens';
import Colors from '../../constants/Colors';

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notification: {
    screen: NotificationScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
},
{
  swipeEnabled: true,
  animationEabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    inactiveTintColor: Colors.$blackBlueColor,
    activeTintColor: 'red',
    indicatorStyle: { backgroundColor: Colors.$redColor },
    style: {
      backgroundColor: Colors.$whiteColor,
    },
  },
});
