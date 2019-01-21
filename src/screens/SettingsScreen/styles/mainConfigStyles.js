import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#C8D1D3',
  },
  listItemStyle: {
    flexDirection: 'column',
    marginBottom: 5,
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
  listStyle: {
  },
  textStyle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fontTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 15,
    paddingBottom: 5,
  },
  smallTitle: {
    fontSize: 12,
  },
  mediumTitle: {
    fontSize: 16,
  },
  largeTitle: {
    fontSize: 20,
  },
})
