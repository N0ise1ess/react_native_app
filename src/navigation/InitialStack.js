import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { AuthLoadingScreen } from '../modules/auth';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const InitialStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(InitialStack);
