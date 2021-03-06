import { StyleSheet } from 'react-native';

import { fontSettings, getSizeFonts } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
      flex: 1,
    },
    full_container: {
      flex: 1,
    },
    text_margin: {
      paddingLeft: '10%',
      paddingRight: 10,
    },
    margin_left__12: {
      paddingRight: '10%',
    },
    text: {
      fontFamily: 'MyriadPro-Regular',
      color: '#000',
    },
    text__normal: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
    },
    text__blue: {
      color: '#496d9e',
    },
    text__white: {
      color: '#fff',
    },
    text__bold: {
      fontFamily: 'MyriadPro-Bold',
    },
    text__small: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_10, fontSize),
    },
    text__gray: {
      color: '#666',
    },
    padding_top_10: {
      marginTop: 10,
    },
    padding_top_20: {
      marginTop: 20,
    },
    padding_10: {
      marginTop: 10,
      marginBottom: 10,
    },
    padding_5: {
      marginTop: 5,
      marginBottom: 5,
    },
    item_answer: {
      backgroundColor: '#fff',
      paddingTop: 8,
      paddingBottom: 8,
    },
    item_answer__active: {
      backgroundColor: '#0060f7',
    },
    button: {
      backgroundColor: '#ff003c',
      width: 150,
      justifyContent: 'center',
    },
    button__disabled: {
      backgroundColor: '#ec6e8e',
    },
    button_container: {
      // flex: 1,
      width: '100%',
      height: 50,
      flexDirection: 'row',
    },
    button_container__right: {
      justifyContent: 'flex-end',
    },
  });
