import { Platform, Dimensions, StyleSheet } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const isIphoneX = Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height >= 812 || width === 812);

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#163d7d',
      alignItems: 'center',
    },
    image: {
      position: 'absolute',
      width: '65%',
      top: isIphoneX ? 0 : '-15%',
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: '13%',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
    },
    progressBar: {
      position: 'absolute',
      bottom: '10%',
    },
  });
