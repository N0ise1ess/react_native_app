import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#163D7D',
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  rightIconStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#fff',
    fontSize: height < 550 ? 27 : 30,
    paddingRight: 17
  }
});
