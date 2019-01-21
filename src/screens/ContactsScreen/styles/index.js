import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  iconStyle: {
    width: 32,
    height: 32,
    marginLeft: 20,
    marginRight: 20,
    resizeMode: 'contain',
    tintColor: '#163D7D',
  },
  listItemStyle: {
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
  listStyle: {
  },
  columnStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleStyle: {
    color: '#163D7D',
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontSize: 12,
    color: '#ADADAD',
    alignSelf: 'flex-start',
  }
})
