import { StyleSheet } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
    },
    view: {
      flex: 1,
    },
    tabHeaderStyle: {
      backgroundColor: '#CED8DA',
      justifyContent: 'center',
    },
    tabHeadingStyle: {
      marginBottom: 5,
      paddingTop: 10,
      paddingBottom: 10,
      width: '100%',
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor: '#0E63EE',
    },
    tabHeadingRight: {
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      marginRight: 15,
    },
    iconStyle: {
      color: '#58739d',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_18, fontSize),
      paddingRight: 10,
      alignSelf: 'center',
    },
    tabHeadingLeft: {
      marginLeft: 15,
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
    },
    tabTitleStyle: {
      color: '#fff',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_11, fontSize),
      textAlign: 'center',
    },
    tabSectionStyle: {
      backgroundColor: '#CED8DA',
      minHeight: 300,
    },
    dataSection: {
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    activeTabStyle: {
      backgroundColor: '#163D7D',
    },
    year: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 5,
    },
    semester: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 5,
    },
  });
