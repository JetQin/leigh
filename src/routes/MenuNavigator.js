import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { SidebarScreen } from '../screens';
import { HomeNavigator } from './HomeNavigator';

export const MenuNavigator = DrawerNavigator({
  Home: { screen: HomeNavigator },
},
{
  contentComponent: props => <SidebarScreen {...props} />
});
