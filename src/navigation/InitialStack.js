import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { LoadingScreen } from '../modules/auth';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const InitialStack = createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(InitialStack);
