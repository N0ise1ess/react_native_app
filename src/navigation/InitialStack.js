import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { LoadingScreen } from '../modules/auth';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import SignUpStack from "./SignUpStack";

const InitialStack = createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    SignUp: SignUpStack
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(InitialStack);
