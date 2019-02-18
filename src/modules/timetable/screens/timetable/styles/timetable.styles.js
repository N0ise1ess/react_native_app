import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  searchBar: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    fontSize: 14,
  },
  searchIcon: {
    color: '#4D6270',
  },
  listItemStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  listStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
    backgroundColor: '#fff',
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'flex-start',
  },
  tabHeaderStyle: {
    backgroundColor: '#CED8DA',
    borderBottomWidth: 0,
    justifyContent: 'center',
  },
  tabHeadingStyle: {
    marginTop: 10,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#163D7D',
  },
  tabHeadingRight: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginRight: 15,
  },
  tabHeadingLeft: {
    marginLeft: 15,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  tabTitleStyle: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  tabSectionStyle: {
    backgroundColor: '#CED8DA',
    minHeight: 300,
  },
  dataSection: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  activeTabStyle: {
    backgroundColor: '#0E63EE',
  },
  noDataStyle: {
    flex: 1,
    padding: 20,
    backgroundColor: '#CED8DA',
  },
  noDataTextStyle: {
    color: 'red',
    fontSize: 12,
  },
  time: {
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 7,
  },
  section: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 5,
    paddingRight: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
  },
});
