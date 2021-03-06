import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#C8D1D3',
    },
    listItemStyle: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      marginBottom: 5,
      backgroundColor: '#fff',
      width: '100%',
      marginLeft: 0,
      marginRight: 0,
      justifyContent: 'space-between',
    },
    lastItemStyle: {
      backgroundColor: '#ED3944',
    },
    lastTextStyle: {
      color: '#fff',
    },
    listStyle: {},
    textStyle: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
    },
    scoreStyle: {
      color: 'red',
    },
  });
