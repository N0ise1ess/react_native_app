import { StyleSheet } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
    },
    container_switch: {
      width: 70,
      height: 30,
      borderRadius: 18,
      backgroundColor: '#fff',
      borderColor: '#8ca3c4',
      borderWidth: 1,
      padding: 2,
    },
    circle_switch: {
      width: 26,
      height: 26,
      borderRadius: 15,
      backgroundColor: '#818181',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 20,
    },
    col: {
      flex: 1,
    },
    col__center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      backgroundColor: '#CED8DA',
    },
    text: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
    },
    backgroundSettings: {
      height: 400,
      backgroundColor: '#fff',
    },
  });
