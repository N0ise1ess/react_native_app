import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';
const { width, height } = Dimensions.get('window');

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  content : {
    marginTop: height * 0.05,
    marginRight: 20,
    marginLeft: 10,
  },
  title: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    alignSelf: 'center',
    color: '#163D7D',
    marginBottom: 30,
  },
  textarea: {
    backgroundColor: '#fff',
    height: height * 0.3,
    alignItems: 'flex-start',
    textAlignVertical: 'top',
    color: '#313131',
  },
  buttonStyle: {
    backgroundColor: '#ff5064',
    height: height * 0.06,
    width: width * 0.3,
    marginRight: 10,
  },
  actionButtons: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 30,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#1669f9',
  },
  readyButton: {
    backgroundColor: '#eb4043',
  },
  copyPassBtn: {
    flex: 1,
    backgroundColor: '#ff5064',
    height: height * 0.06,
    marginTop: height > 550 ? 20 : 10
  }
});