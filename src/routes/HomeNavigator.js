import { TabNavigator } from 'react-navigation';
import { HomeScreen, ProfileScreen, NewsScreen, HolderScreen, MoreScreen } from '../screens';
//import ProfileNavigator from './ProfileNavigator';
import Colors from '../../constants/Colors';

export const HomeNavigator = TabNavigator({
  Home: {
    title: '主页',
    screen: HomeScreen,
  },
  Holder: {
    title: '股东查询',
    screen: HolderScreen,
  },
  News: {
    title: '商业新闻',
    screen: NewsScreen,
  },
  Profile: {
    title: '个人中心',
    screen: ProfileScreen,
  },
  More: {
    title: '关于',
    screen: MoreScreen,
  },

},
{
  swipeEnabled: false,
  animationEabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    inactiveTintColor: Colors.$blackBlueColor,
    activeTintColor: 'red',
    indicatorStyle: { backgroundColor: Colors.$redColor },
    style: {
      backgroundColor: Colors.$whiteColor,
    },
  },
});
