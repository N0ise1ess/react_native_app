import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  listItemStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 15,
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'center',
  },
  listStyle: {},
  columnStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  dateStyle: {
    color: '#5b70a0',
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    padding: 2,
    alignSelf: 'flex-start',
  },
  titleStyle: {
    color: '#000',
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    padding: 2,
    paddingRight: 30,
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    padding: 2,
    color: '#ADADAD',
    alignSelf: 'flex-start',
  },
});
