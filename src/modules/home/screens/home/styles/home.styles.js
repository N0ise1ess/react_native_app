import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
  },
  text: {
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    color: '#3f5d8d',
  },
  flatListStyle: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
  customSlide: {
    flex: 1,
    backgroundColor: '#CED8DA',
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  buttonSelected: {
    color: '#0E63EE',
  },
  headerImageStyle: {
    resizeMode: 'contain',
    height: 30,
  },
});
