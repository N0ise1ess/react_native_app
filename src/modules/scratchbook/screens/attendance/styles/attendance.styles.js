import { StyleSheet } from 'react-native';
import { Row } from 'native-base';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
  },
  listStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
    fontWeight: '200',
    marginTop: 10,
    marginLeft: 0,
    marginRight: 0
  },
  detailsListItem: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    width: '80%',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconStyle: {
    color: '#58739d',
    fontSize: 18,
    paddingRight: 10,
    alignSelf: "center"
  },
  text: {
    fontFamily: 'MyriadPro-Light',
    fontSize: 12,
    fontWeight: '300',
    marginTop: 7,
  },
  detailsText: {
    fontFamily: 'MyriadPro-Light',
    fontSize: 11,
    fontWeight: '200',
    color: '#949394'
  },
  header_section: {
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  content: {
    backgroundColor: '#CED8DA',
  },
  list_header: {
    backgroundColor: '#CED8DA',
    marginTop: 10,
    marginBottom: 5,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  list_header_text: {
    color: '#363a3a',
    fontSize: 12,
    paddingRight: 10,
  },
  sum_item: {
    fontFamily: 'MyriadPro-Light',
    backgroundColor: '#ED3944',
    color: '#fff'
  },
  sum_item_text: {
    fontFamily: 'MyriadPro-Light',
    fontWeight: 'bold',
    color: '#fff',
  }
});
