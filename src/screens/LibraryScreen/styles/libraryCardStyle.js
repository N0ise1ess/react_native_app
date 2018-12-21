import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
  },
  label: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 10,
    marginBottom: 5,
  },
  dataText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'flex-start',
  },
  listStyle: {
  },
  textStyle: {
    color: '#163D7D',
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  bookAuthor: {
    fontSize: 12,
    fontWeight: '300',
  },
  issueDate:{
    fontSize: 12,
    fontWeight: '300',
  },

  tabHeaderStyle:{
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
    backgroundColor: '#163D7D'
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
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#CED8DA',
  },
  activeTabStyle: {
    backgroundColor: '#0E63EE'
  },
})
