import React from 'react';
import { createBottomTabNavigator, createAppContainer, TabBarBottom } from 'react-navigation';
import { connect } from 'react-redux';
import {
  Text,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Footer,
  FooterTab,

} from 'native-base';
import { TimeTableScreen } from '../screens';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const BottomTabStack = createBottomTabNavigator({
  Auth: AuthStack,
  App: AppStack,
},
{
  initialRouteName: 'Auth',
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    showLabel: false,
    style: {
      backgroundColor: '#163D7D',
    },
  },
}
);

export default createAppContainer(BottomTabStack);
