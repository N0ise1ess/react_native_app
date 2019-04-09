import { StyleSheet } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
    },
    listStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'center',
      padding: 10,
      paddingBottom: 15,
      paddingTop: 15,
      backgroundColor: '#fff',
      flex: 1,
      fontWeight: '200',
      marginTop: 10,
      marginLeft: 0,
      marginRight: 0,
    },
    detailsListItem: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    endSection: {
      marginRight: 20,
    },
    rateTextStyle: {
      color: '#58739d',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
    },
    title: {
      width: '90%',
      flexWrap: 'wrap',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      fontWeight: 'bold',
    },
    iconStyle: {
      color: '#58739d',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_22, fontSize),
      alignSelf: 'center',
    },
    text: {
      fontFamily: 'MyriadPro-Light',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      fontWeight: '300',
      color: '#949394',
      marginTop: 3,
    },
    redColor: {
      color: '#eb577d',
    },
    headerSection: {
      width: '80%',
      flexWrap: 'wrap',
      flexGrow: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
  });
