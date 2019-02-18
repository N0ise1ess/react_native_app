import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C8D1D3',
  },
  iconStyle: {
    width: 18,
    height: 18,
    marginLeft: 20,
    marginRight: 20,
    resizeMode: 'contain',
  },
  listItemStyle: {
    maxHeight: height / 12,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 5,
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 0,
  },
  listStyle: {},
  textStyle: {
    fontSize: 14,
    color: '#163D7D',
  },
});
