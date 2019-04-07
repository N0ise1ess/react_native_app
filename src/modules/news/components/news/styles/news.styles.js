import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

const { width, height } = Dimensions.get('window');

export const styles = (fontSize) =>
  StyleSheet.create({
    cardItem: {
      marginBottom: 0,
      paddingBottom: 0,
    },
    sectionTime: {
      paddingBottom: 0,
      paddingTop: 10,
    },
    sectionTitle: {
      paddingBottom: 0,
      paddingTop: 7,
    },
    sectionText: {
      paddingTop: 5,
    },
    imageStyle: {
      resizeMode: 'cover',
      height: 200,
      width: width - 30,
      marginTop: 15,
      alignSelf: 'center',
    },
    timeStyle: {
      color: '#053c81',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      fontWeight: '400',
    },
    textStyle: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
    },
  });
