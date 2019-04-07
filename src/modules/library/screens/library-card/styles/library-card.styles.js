import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
      flex: 1,
    },
    text: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
    },
    tabHeader: {
      paddingBottom: 20,
      paddingTop: 20,
      height: 80,
    },
    label: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      fontWeight: '300',
      marginTop: 10,
      marginBottom: 3,
    },
    dataText: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
      fontWeight: 'bold',
    },
    listItemStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    listStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      marginBottom: 10,
      backgroundColor: '#fff',
      width: '100%',
      marginLeft: 0,
      marginRight: 0,
      alignItems: 'flex-start',
    },
    textStyle: {
      color: '#163D7D',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
    },
    bookTitle: {
      fontWeight: 'bold',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      lineHeight: 18,
      paddingRight: 10,
    },
    bookAuthor: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      fontWeight: '300',
      paddingTop: 5,
      paddingLeft: 22,
    },
    issueDate: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      fontWeight: '300',
      paddingTop: 15,
      paddingBottom: 5,
      paddingLeft: 22,
    },
    returnStyle: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      paddingLeft: 7,
      fontWeight: '300',
    },
    tabHeaderStyle: {
      backgroundColor: '#CED8DA',
      borderBottomWidth: 0,
      justifyContent: 'center',
    },
    tabHeadingStyle: {
      marginTop: 10,
      marginBottom: 5,
      paddingTop: 10,
      paddingBottom: 10,
      width: '100%',
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor: '#163D7D',
    },
    tabHeadingRight: {
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      marginRight: 15,
    },
    tabHeadingLeft: {
      marginLeft: 15,
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
    },
    tabTitleStyle: {
      color: '#fff',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      fontWeight: '300',
      textAlign: 'center',
      minHeight: 12,
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
      backgroundColor: '#0E63EE',
      fontWeight: '300',
    },
    noDataStyle: {
      flex: 1,
      padding: 20,
      marginTop: 20,
      backgroundColor: '#CED8DA',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
    },
    noDataTextStyle: {
      color: 'red',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
    },
    qrcodeSection: {
      flex: 1,
      marginTop: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    qrcodeImage: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
    },
  });
