import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 10,
    marginBottom: 3,
  },
  dataText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  listStyle: {
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
  opacityStyle: {
    opacity: .5
  },
  textStyle: {
    color: '#163D7D',
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 18,
    paddingRight: 10,
  },
  bookAuthor: {
    fontSize: 13,
    fontWeight: '300',
    paddingTop: 5,
    paddingLeft: 22,
  },
  issueDate:{
    fontSize: 13,
    fontWeight: '300',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 22,
  },
  returnStyle: {
    fontSize: 13,
    paddingLeft: 7,
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
    backgroundColor: '#0E63EE'
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
  qrcodeSection: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrcodeImage: {
    width: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 200,
    resizeMode: 'contain',
  }
})
