import { StyleSheet } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
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
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    fontWeight: 'bold',
  },
  iconStyle: {
    color: '#58739d',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_18, fontSize),
    paddingRight: 10,
    alignSelf: "center"
  },
  text: {
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    fontWeight: '300',
    marginTop: 7,
  },
  detailsText: {
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_11, fontSize),
    fontWeight: '200',
    color: '#949394'
  },
  header_section: {
    flexWrap: 'wrap',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center'
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
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_11, fontSize),
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
