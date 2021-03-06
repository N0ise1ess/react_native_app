import { Button, Right } from 'native-base';
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { LoginScreen, PasswordResetScreen, SignUpScreen } from '../modules/auth';
import { CustomIcon } from '../modules/shared';
import { styles } from './styles';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    ResetPassword: PasswordResetScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: styles.headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: styles.headerTitleStyle,
      headerRight: (
        <Right>
          <Button transparent onPress={() => navigation.navigate('Settings')}>
            <CustomIcon name={'settings'} style={styles.rightIconStyle} />
          </Button>
        </Right>
      ),
    }),
  },
);

export default createAppContainer(AuthStack);
