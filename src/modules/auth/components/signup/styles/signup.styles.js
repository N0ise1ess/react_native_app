import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';
const { width, height } = Dimensions.get('window');

export const styles = (fontSize = 0) => StyleSheet.create({
  text: { 
    paddingLeft: 10, 
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize), 
    color: '#747A7B',
    fontFamily: 'MyriadPro-Regular'
  },
  label: {
    fontSize: 10,
    fontFamily: 'MyriadPro-Regular',
    paddingTop: height < 550 
      ? getSizeFonts(settingsFonts.FONT_SIZE_10, fontSize) 
      : getSizeFonts(settingsFonts.FONT_SIZE_18, fontSize),
    color: '#747A7B',
    marginBottom: 5
  },
  item: {
    backgroundColor: '#fff',
  },
  inputStyle: {
    fontSize: height < 750 
      ? getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize) 
      : getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
    fontFamily: 'MyriadPro-Regular',
    padding: 0,
    height: 34,
    backgroundColor: '#fff',
  },
  inputIcon: {
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
    fontFamily: 'MyriadPro-Regular',
    color: '#163D7D',
    paddingTop: 0,
    paddingRight: 0,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    fontFamily: 'MyriadPro-Regular',
    color: '#747A7B',
    flex:1,
    flexWrap: 'wrap'
  },
  buttons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  form: {
    flex: 1,
    minWidth: width * 0.7
  },
  backButton: {
      backgroundColor: '#227bd4',
      paddingLeft: 20,
      paddingRight: 20
  },
  nextButton: {
      backgroundColor: '#ec4a58',
      paddingLeft: 20,
      paddingRight: 20
  },
  listItem: {
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: height < 550 ? 0 : 10,
    marginLeft: 0,
  },
  personal: {
    flex:1,
    marginTop: -5
  },
  sortDownIcon: {
    marginRight: 10,
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_20, fontSize),
    fontFamily: 'MyriadPro-Regular',
    color: '#163D7D',
    paddingTop: 0,
    paddingRight: 0,
    backgroundColor: '#fff'
  },
  asterisk: {
    color:'red',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_8, fontSize)
  },
  tabHeadingRight: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginRight: 15,
    borderColor:'white',
    borderWidth: 0.5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  tabHeadingLeft: {
    marginLeft: 15,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderColor:'white',
    borderWidth: 0.5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  activeTabStyle: {
    backgroundColor: '#0e63f4',
  },
  dateOfBirthInput: {
    fontSize: height < 750
        ? getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize)
        : getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
    fontFamily: 'MyriadPro-Regular',
    padding: 0,
    height: 34,
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor: "#C4C4C4"
  },
  iconLeft: {
    fontSize: height < 750
        ? getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize)
        : getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
    color: '#fff',
    alignSelf: 'center'
  },
  iconRight: {
    fontSize: height < 750
        ? getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize)
        : getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
    color: '#fff',
    alignSelf: 'center'
  },
  passportText: {
    fontSize: height < 750
        ? getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize)
        : getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
    color: '#fff',
    paddingLeft: 50,
    paddingRight: 50
  }
});
