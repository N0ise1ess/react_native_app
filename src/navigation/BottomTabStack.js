import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

const BottomTabStack = createBottomTabNavigator(
  {
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
  },
);

export default createAppContainer(BottomTabStack);
