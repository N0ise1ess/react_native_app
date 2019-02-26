import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  imageStyle: {
    width: 36,
    height: 36,
    marginLeft: 20,
    marginRight: 20,
    resizeMode: 'contain',
    tintColor: '#163D7D',
  },
  listItemStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 20,
    marginRight: 0,
  },
  listStyle: {},
  viewStyle: {
    flexDirection: 'row',
  },
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconStyle: {
    fontSize: 32,
    color: '#163D7D',
  },
  titleStyle: {
    fontWeight: '500',
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    fontWeight: '300',
    alignSelf: 'flex-start',
  },
});
