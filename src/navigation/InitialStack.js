import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { AuthLoadingScreen } from '../modules/authorization';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const InitialStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(InitialStack);
