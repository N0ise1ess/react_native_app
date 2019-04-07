import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';
const { width, height } = Dimensions.get('window');

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#C8D1D3',
    },
    advancedSearchWrapper: {
      width: '100%',
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 10,
    },
    listItemStyle: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: 'center',
      padding: 20,
      paddingLeft: 10,
      backgroundColor: '#fff',
      flex: 1,
      fontWeight: '200',
      marginTop: 5,
      marginLeft: 0,
    },
    title: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      flexWrap: 'wrap',
      color: '#1E1E1E',
      fontWeight: 'bold',
      marginTop: 5,
      paddingLeft: 40,
    },
    textStyle: {
      fontFamily: 'MyriadPro-Light',
      color: '#979797',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      fontWeight: '300',
      marginTop: 10,
      paddingLeft: 40,
    },
    details: {
      marginTop: 2,
    },
    iconStyle: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
      color: '#163D7D',
      marginLeft: 20,
      marginRight: 20,
    },
    searchBar: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff',
    },
    searchInput: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
    },
    picker: {
      width: '48%',
    },
    searchPickers: {
      justifyContent: 'space-between',
    },
    searchWrapperBordered: {
      borderWidth: 0.5,
      borderColor: '#979797',
    },
    searchIcon: {
      color: '#4D6270',
      marginTop: 10,
      marginRight: 5,
      marginLeft: 5,
    },
    searchInputWrapper: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      width: '70%',
      height: 45,
      alignSelf: 'center',
      marginTop: 12,
    },
    tabHeaderStyle: {
      backgroundColor: '#C8D1D3',
      justifyContent: 'center',
    },
    tabHeadingStyle: {
      marginBottom: 10,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderWidth: 0.5,
      width: '70%',
      borderColor: '#fff',
      backgroundColor: '#163D7D',
    },
    tabHeadingRight: {
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      marginRight: '30%',
    },
    tabHeadingLeft: {
      marginLeft: '30%',
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
    },
    tabTitleStyle: {
      color: '#fff',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      textAlign: 'center',
    },
    tabSectionStyle: {
      backgroundColor: '#CED8DA',
      minHeight: 300,
    },
    activeTabStyle: {
      backgroundColor: '#0f64ee',
    },
    tabBarUnderline: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    upperButtons: {
      flexDirection: 'row',
      width: '70%',
      alignSelf: 'center',
    },
    upperButton: {
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 15,
      paddingBottom: 0,
      paddingTop: 0,
      justifyContent: 'center',
      width: (width * 33.5) / 100,
      height: 35,
      borderColor: '#fff',
    },
    buttonElectronic: {
      backgroundColor: '#0f64ee',
      marginRight: 10,
    },
    buttonPrinted: {
      backgroundColor: '#163D7D',
    },
    button: {
      width: '70%',
      justifyContent: 'center',
      backgroundColor: '#ff003c',
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    operationButtons: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '70%',
      alignSelf: 'center',
      marginBottom: 5,
    },
    operationButton: {
      width: '32%',
      height: 35,
      backgroundColor: '#818181',
    },
    operationText: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_11, fontSize),
    },
    activeOperation: {
      backgroundColor: '#0f64ee',
    },
  });
