import { TabNavigator } from 'react-navigation';
import { HomeScreen, ProfileScreen, NewsScreen, HolderScreen, StockScreen } from '../screens';
import Colors from '../../constants/Colors';

export default TabNavigator({
  News: {
    screen: NewsScreen,
  },
  Holder: {
    screen: HolderScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Stocks: {
    screen: StockScreen,
  },
  // Notification: {
  //   screen: NotificationScreen,
  // },
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
