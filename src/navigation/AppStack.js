import React from 'react';
import {
  Text,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon
} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  HomeScreen,
  LibraryScreen,
  LibraryCardScreen,
  NewsScreen,
  NewsDetailsScreen,
} from '../screens';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Library: LibraryScreen,
  LibraryCard: LibraryCardScreen,
  News: NewsScreen,
  NewsDetails: NewsDetailsScreen,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#163D7D',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    headerRight: <Right>
      <Button transparent>
        <Icon type='Feather' name='settings' style={{color: 'white'}} />
      </Button>
    </Right>
  },
})

export default createAppContainer(AppStack);
