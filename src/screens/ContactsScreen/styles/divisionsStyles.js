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
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginLeft: 0,
    paddingLeft: 40,
    paddingRight: 20,
    marginRight: 0,
  },
  listStyle: {
  },
  columnStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  iconStyle: {
    fontSize: 32,
    color: '#163D7D'
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
