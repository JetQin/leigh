import { TabNavigator } from 'react-navigation';
import { HomeScreen, ProfileScreen, NewsScreen, HolderScreen, MoreScreen } from '../screens';
import Colors from '../../constants/Colors';

export const HomeNavigator = TabNavigator({
  News: {
    screen: NewsScreen,
  },
  Holder: {
    screen: HolderScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  More: {
    screen: MoreScreen,
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
