import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
    },
    text: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
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
      backgroundColor: '#0E63EE',
    },
    headerImageStyle: {
      resizeMode: 'contain',
      height: 30,
    },
  });
