import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
      flex: 1,
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
    opacityStyle: {
      opacity: 0.5,
    },
    textStyle: {
      color: '#163D7D',
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
    },
    noDataStyle: {
      flex: 1,
      padding: 20,
      backgroundColor: '#CED8DA',
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
      width: 350,
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 200,
      resizeMode: 'contain',
    },
    octions: {
      height: 10,
      width: 10,
      backgroundColor: 'red',
      borderRadius: 10,
      marginTop: 5,
      marginRight: 10,
    },
    icon: {
      marginTop: 5,
      marginRight: 10,
      width: 12,
      height: 12,
      fontSize: 10,
      color: '#163D7D',
    },
  });
