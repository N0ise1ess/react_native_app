import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

const AppStack = createStackNavigator({
  Home: HomeScreen,
},
{
  initialRouteName: 'Home',
})

export default createAppContainer(AppStack);
