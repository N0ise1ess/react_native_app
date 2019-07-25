import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
    },
    listItemStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'center',
      padding: 20,
      backgroundColor: '#fff',
      flex: 1,
      fontWeight: '200',
      marginTop: 5,
      marginLeft: 0,
    },
    iconStyle: {
      color: '#58739d',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_18, fontSize),
      paddingRight: 10,
      alignSelf: 'center',
    },
    textSlider: {
      color: '#486694'
    },
    slider: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 5,
    },
    title: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      flexWrap: 'wrap',
      color: '#1E1E1E',
      fontWeight: 'bold',
    },
    text: {
      fontFamily: 'MyriadPro-Light',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      fontWeight: '300',
      marginTop: 7,
    },
    rateTextStyle: {
      color: '#58739d',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
    },
    beginningItems: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    iconStyle: {
      color: '#58739d',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_22, fontSize),
      alignSelf: 'center',
    },
    errorIcon: {
      paddingLeft: 15,
    },
    upperSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    textStyle: {
      fontFamily: 'MyriadPro-Light',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      fontWeight: '300',
      color: '#979797',
      paddingLeft: 20,
      marginTop: 3,
    },
    tabHeaderStyle: {
      backgroundColor: '#CED8DA',
      justifyContent: 'center',
    },
    tabHeadingStyle: {
      marginBottom: 10,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 5,
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
    activeTabStyle: {
      backgroundColor: '#163D7D',
    },
    tabBarUnderline: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    markIcon: {
      marginRight: 5,
      marginTop: 5,
      height: 15,
      width: 15,
    },
    redCircle: {
      backgroundColor: '#e62249',
      width: 10,
      height: 10,
      marginRight: 10,
      borderRadius: 5,
    },
    okIcon: {
      color: '#163D7D',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
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
  });
