import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Text,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon
} from 'native-base';
import LoginScreen from '../screens/Authorization/LoginScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
},
{
  initialRouteName: 'Login',
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#163D7D',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    headerRight: <Right>
      <Button transparent onPress={() => navigation.navigate('Settings')}>
        <Icon type='EvilIcons' name='gear' style={{color: 'white', fontSize: 30}} />
      </Button>
    </Right>
  }),
})

export default createAppContainer(AuthStack);
