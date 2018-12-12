import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/Authorization/LoginScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
},
{
  initialRouteName: 'Login',
})

export default createAppContainer(AuthStack);
