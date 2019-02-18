import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  listItemStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 15,
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'center',
  },
  listStyle: {},
  columnStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  dateStyle: {
    color: '#5b70a0',
    fontSize: 12,
    padding: 2,
    alignSelf: 'flex-start',
  },
  titleStyle: {
    color: '#000',
    fontSize: 12,
    padding: 2,
    paddingRight: 30,
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontSize: 10,
    padding: 2,
    color: '#ADADAD',
    alignSelf: 'flex-start',
  },
});
