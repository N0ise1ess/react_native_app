import { Dimensions, StyleSheet } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#163d7d',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: '10%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '13%',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
  },
  progressBar: {
    position: 'absolute',
    bottom: '10%',
  },
});
