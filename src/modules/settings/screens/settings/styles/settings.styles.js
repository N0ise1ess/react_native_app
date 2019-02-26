import { StyleSheet } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#C8D1D3',
  },
  iconStyle: {
    width: 18,
    height: 18,
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
  textStyle: {
    color: '#163D7D',
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
  },
});
