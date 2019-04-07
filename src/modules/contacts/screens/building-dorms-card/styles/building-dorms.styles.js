import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      paddingTop: 20,
    },
    imageStyle: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_17, fontSize),
      color: 'white',
      alignContent: 'center',
      alignSelf: 'center',
      textAlignVertical: 'center',
    },
    listItemStyle: {
      paddingTop: 15,
      paddingBottom: 15,
      marginBottom: 5,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 20,
      marginRight: 0,
    },
    listStyle: {},
    searchIcon: {
      color: '#4D6270',
    },
    searchBar: {
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    searchInput: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
    },
    viewStyle: {
      flexDirection: 'row',
    },
    columnStyle: {
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1,
    },
    columnStyleRow: {
      flexDirection: 'row',
    },
    iconStyle: {
      fontSize: 32,
      color: '#163D7D',
    },
    titleStyle: {
      fontWeight: '500',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      alignSelf: 'flex-start',
      color: '#242424',
    },
    textStyle: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      fontWeight: '300',
      alignSelf: 'flex-start',
      color: '#4D6270',
    },
    icon: {
      width: 42,
      height: 42,
      marginLeft: 20,
      fontSize: 40,
      color: '#3587fa',
    },
    containerBorder: {
      flex: 1,
      maxHeight: 50,
      borderTopWidth: 1,
      borderColor: '#666',
      marginTop: 10,
      paddingTop: 10,
    },
    btnImageStyle: {
      borderRadius: 50,
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0C68FF',
    },
    titleStyleBlue: {
      color: '#0C68FF',
    },
  });
