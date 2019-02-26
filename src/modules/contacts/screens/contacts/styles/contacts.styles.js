import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  iconStyle: {
    width: 32,
    height: 32,
    marginLeft: 20,
    marginRight: 20,
    resizeMode: 'contain',
    tintColor: '#163D7D',
  },
  listItemStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 5,
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 0,
  },
  listStyle: {},
  columnStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleStyle: {
    color: '#163D7D',
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    color: '#ADADAD',
    alignSelf: 'flex-start',
  },
});
