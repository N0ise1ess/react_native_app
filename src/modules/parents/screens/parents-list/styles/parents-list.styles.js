import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
      flex: 1,
    },
    iconStyle: {
      width: 40,
      height: 40,
      marginLeft: 20,
      marginRight: 20,
      resizeMode: 'contain',
      tintColor: '#163D7D',
    },
    imageStyle: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      tintColor: '#4099F4',
      borderWidth: 1,
      borderColor: '#4099F4',
      borderRadius: 20,
      marginLeft: 15,
      marginRight: 15,
    },
    listItemStyle: {
      paddingTop: 15,
      paddingBottom: 15,
      marginBottom: 5,
      backgroundColor: '#fff',
      width: '100%',
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginRight: 0,
    },
    listStyle: {},
    columnStyle: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    titleStyle: {
      fontWeight: 'bold',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      alignSelf: 'flex-start',
    },
    textStyle: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      fontWeight: '300',
      color: '#000',
      alignSelf: 'flex-start',
    },
    //Search tabSectionStyle
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
    searchIcon: {
      color: '#4D6270',
    },
  });
