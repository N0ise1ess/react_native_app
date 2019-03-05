import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';
const { width, height } = Dimensions.get('window');

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  sectionStyle: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,
  },
  photoStyle: {
    width: width * 0.35,
    minHeight: height * 0.24,
    resizeMode: 'contain',
  },
  btnImageStyle: {
    borderRadius: width * 0.1,
    marginRight: 10,
    height: width * 0.1,
    width: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C68FF',
  },
  imageStyle: {
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_18, fontSize),
    color: 'white',
    alignContent: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center'
  },
  imgTeacher: {
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_45, fontSize),
    color: '#4099F4',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1e1e1e',
    paddingRight: 5,
    marginRight: 5
  },
  label: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    color: '#979797',
  },
  textStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    marginTop: 5,
    color: '#979797',
  },
  dataStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    fontWeight: 'bold',
    color: '#4099F4',
  },
  dataSection: {
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    marginTop: 5,
    marginRight: 5,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
  },
  errorText: {
    color: 'red',
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    marginBottom: 5,
  },
  info: {
    borderColor: '#979797',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 50,
  },
  buttonStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 5,
  },
  editStyle: {
    backgroundColor: '#ED3944',
  },
  cancelStyle: {
    backgroundColor: '#1166F6',
  },
  iconStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_18, fontSize),
    color: '#fff',
  },
  departmentLabel: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    fontWeight: 'bold',
    color: '#1e1e1e',
    marginTop: 0,
    paddingRight: 5,
  },
});
