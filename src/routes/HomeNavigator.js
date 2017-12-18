import { TabNavigator } from 'react-navigation';
import { HomeScreen, ProfileScreen, NewsScreen, HolderScreen, MoreScreen } from '../screens';
import Colors from '../../constants/Colors';

export const HomeNavigator = TabNavigator({
  Home: {
    title: '主页',
    screen: HomeScreen,
  },
  News: {
    title: '商业新闻',
    screen: NewsScreen,
  },
  Holder: {
    title: '市场行情',
    screen: HolderScreen,
  },
  Profile: {
    title: '个人中心',
    screen: ProfileScreen,
  },
  // More: {
  //   title: '关于',
  //   screen: MoreScreen,
  // },

},
{
  swipeEnabled: false,
  animationEabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    inactiveTintColor: Colors.$blackBlueColor,
    activeTintColor: Colors.$navigationHeaderTextColor,
    indicatorStyle: { backgroundColor: Colors.$redColor },
    style: {
      backgroundColor: Colors.$whiteColor,
    },
  },
});
