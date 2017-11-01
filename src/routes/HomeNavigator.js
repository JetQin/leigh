import { TabNavigator } from 'react-navigation';
import { HomeScreen, ProfileScreen, NewsScreen, HolderScreen, MoreScreen } from '../screens';
//import ProfileNavigator from './ProfileNavigator';
import Colors from '../../constants/Colors';

export const HomeNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Holder: {
    screen: HolderScreen,
  },
  News: {
    screen: NewsScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  More: {
    screen: MoreScreen,
  },

},
{
  swipeEnabled: false,
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
