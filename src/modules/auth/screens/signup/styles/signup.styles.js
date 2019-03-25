import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';
const { width, height } = Dimensions.get('window');

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
    alignItems: 'center'
  },
  content : {
    marginTop: height * 0.05,
    width: width * 0.7,
    marginRight: 55
  },
  dataSection : {
    paddingTop: 7,
    paddingBottom: 7,
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  dataText: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    fontWeight: 'normal',
    color: 'grey',
    marginLeft: 10,
    marginTop: 5
  },
  stepText: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_22, fontSize),
    color: 'grey'
  },
  activeButtonStyle: {
    alignSelf: 'center',
    backgroundColor: '#ff5064',
    height: height * 0.06,
    width: width * 0.7,
  },
  inactiveButtonStyle: {
    alignSelf: 'center',
    backgroundColor: '#d23f50',
    height: height * 0.06,
    width: width * 0.7,
    opacity: 0.7
  },
  dummy: {
    // font size of stepText + static margin of dataText
    marginLeft: 22 + 5
  },
  picker: {
    width: width * 0.7,
    backgroundColor:'white',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pickerIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
    fontSize: settingsFonts.FONT_SIZE_18,
  },
  pickerShadow:{
    backgroundColor:'white',
    elevation: 0,
    width: width * 0.7 - 20,
  },
  card : {
    width: width * 0.7,
    flexDirection:'column',
    justifyContent: 'space-around'
  },
  cardPassText: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-around',
    paddingLeft: 10,
    backgroundColor:'white',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    minHeight: height * 0.1
  },
  copyPassBtn: {
    flex: 1,
    backgroundColor: '#ff5064',
    height: height * 0.06,
    marginTop: height > 550 ? 20 : 10
  }
});
