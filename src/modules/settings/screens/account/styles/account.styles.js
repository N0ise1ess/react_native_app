import { StyleSheet } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sectionStyle: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,
  },
  imageStyle: {
    width: 40,
    height: 40,
    marginRight: 10,
    fontSize: 38,
    color: '#0e63ee',
  },
  nameStyle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label: {
    color: 'gray',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    paddingTop: 12,
  },
  textStyle: {
    color: 'gray',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
  },
  inputStyle: {
    color: 'gray',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
    marginTop: 5,
    marginRight: 5,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
  },
  errorText: {
    color: 'red',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
    marginBottom: 5,
  },
  info: {
    borderColor: 'gray',
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
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_18, fontSize),
    color: '#fff',
  },
});
