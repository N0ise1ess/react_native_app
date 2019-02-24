import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
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
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
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
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
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
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
  },
  time: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
  },
  title: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    fontWeight: 'bold',
  },
  text: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
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
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
  },
});
