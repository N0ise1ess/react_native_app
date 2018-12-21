import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import AuthLoadingScreen  from '../screens/AuthLoadingScreen';
import BottomTabStack from './BottomTabStack';

const InitialStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(InitialStack);
