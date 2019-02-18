import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  imageStyle: {
    width: 36,
    height: 36,
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
    paddingLeft: 0,
    paddingRight: 20,
    marginRight: 0,
  },
  listStyle: {},
  viewStyle: {
    flexDirection: 'row',
  },
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconStyle: {
    fontSize: 32,
    color: '#163D7D',
  },
  titleStyle: {
    fontWeight: '500',
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontSize: 12,
    fontWeight: '300',
    alignSelf: 'flex-start',
  },
});
