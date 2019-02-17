import { Button, Icon, Right } from 'native-base';
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { LoginScreen, PasswordResetScreen } from '../modules/authorization';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    ResetPassword: PasswordResetScreen,
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
      headerRight: (
        <Right>
          <Button transparent onPress={() => navigation.navigate('Settings')}>
            <Icon type="EvilIcons" name="gear" style={{ color: 'white', fontSize: 30 }} />
          </Button>
        </Right>
      ),
    }),
  },
);

export default createAppContainer(AuthStack);
