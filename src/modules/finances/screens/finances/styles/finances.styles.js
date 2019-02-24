import {Dimensions, StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  listItemStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  listStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'center',
  },
  textStyle: {
    color: '#163D7D',
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
  deadline: {
    fontSize: 12,
    fontWeight: '300',
  },
  paymentAmount: {
    fontFamily: 'MyriadPro-Light',
    fontSize: 22,
  },
  paymentButton: {
    width: '60%',
    alignSelf: 'center',
    marginBottom: 15
  },
  groupSection: {
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  iconLeft: {
    width: 25,
    height: 25,
    fontSize: 23,
    color: '#1784d3',
    marginLeft: 5
  },
  iconRight: {
    width: 25,
    height: 25,
    fontSize: 23,
    color: '#1784d3',
    marginRight: 5
  }
});
