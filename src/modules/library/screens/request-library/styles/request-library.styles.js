import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
    },
    content: {
      flex: 1,
      paddingRight: 15,
      paddingLeft: 15,
    },
    text: {
      fontFamily: 'MyriadPro-Light',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
      color: '#333',
    },
    text__blue: {
      color: '#58739d',
    },
    text__light_blue: {
      color: '#0084f7',
    },
    text__bold: {
      fontFamily: 'MyriadPro-Bold',
    },
    texterea: {
      color: '#58739d',
      backgroundColor: '#fff',
      flex: 1,
      borderWidth: 1,
      borderColor: '#484848',
    },
    text_block: {
      marginTop: 15,
      marginBottom: 15,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: 15,
      paddingBottom: 15,
    },
    button: {
      width: 120,
      justifyContent: 'center',
    },
    button__blue: {
      backgroundColor: '#0064ff',
    },
    button__red: {
      backgroundColor: '#ff003c',
    },
    button__disabled: {
      backgroundColor: '#ec6e8e',
    },
    margin_left__15: {
      marginLeft: 15,
    },
  });
