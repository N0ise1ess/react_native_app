import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';
const { width, height } = Dimensions.get('window');

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#C8D1D3',
    },
    iconStyle: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
      color: '#163D7D',
      marginLeft: 20,
      marginRight: 20,
      // resizeMode: '',
    },
    listItemStyle: {
      maxHeight: height / 12,
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
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      color: '#163D7D',
    },
  });
