import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  iconStyle: {
    width: 40,
    height: 40,
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
    width: '100%',
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 0,
  },
  listStyle: {},
  columnStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#000',
    alignSelf: 'flex-start',
  },
  //Search tabSectionStyle
  searchBar: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    fontSize: 14,
  },
  searchIcon: {
    color: '#4D6270',
  },
});
