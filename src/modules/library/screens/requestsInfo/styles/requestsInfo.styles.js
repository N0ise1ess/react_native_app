import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
  },
  listItemStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: 20,
    paddingLeft: 10,
    backgroundColor: '#fff',
    flex: 1,
    fontWeight: '200',
    marginTop: 5,
    marginLeft: 0,
  },
  title: {
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    flexWrap: 'wrap',
    color: '#1E1E1E',
    fontWeight: 'bold',
  },
  text: {
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    fontWeight: '300',
    marginTop: 7,
  },
  dateStyle : {
    color: '#979797',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
  },
  iconStyle: {
    color: '#58739d',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_22, fontSize),
    alignSelf: 'center'
  },
  upperSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  requestIndexSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textStyle: {
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    fontWeight: '300',
    color: '#979797',
    paddingLeft: 20,
    marginTop: 5,
  },
  statusStyle: {
    fontWeight: '400',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    color: '#1E1E1E',
    marginTop: 5,
  },
  tabHeaderStyle: {
    backgroundColor: '#CED8DA',
    justifyContent: 'center',
  },
  tabHeadingStyle: {
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#0E63EE',
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
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    textAlign: 'center',
  },
  tabSectionStyle: {
    backgroundColor: '#CED8DA',
    minHeight: 300,
  },
  activeTabStyle: {
    backgroundColor: '#163D7D',
  },
  tabBarUnderline: {
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  markIcon: {
    marginRight: 5,
    marginTop: 5,
    height: 12,
    width: 15,
  },
  okIcon: {
    color: '#163D7D',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
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
});
