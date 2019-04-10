import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

const { width, height } = Dimensions.get('window');

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    content: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingBottom: 20,
    },
    sectionStyle: {
      flexDirection: 'row',
      paddingLeft: 20,
    },
    photoStyle: {
      width: 150,
      height: 200,
      resizeMode: 'contain',
    },
    imageStyle: {
      width: width * 0.09,
      height: width * 0.09,
      resizeMode: 'contain',
      tintColor: '#4099F4',
    },
    nameStyle: {
      fontWeight: 'bold',
      marginBottom: 5,
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
    },
    label: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_10, fontSize),
      paddingTop: 12,
      color: '#979797',
    },
    textStyle: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      marginTop: 5,
      color: '#979797',
    },
    dataStyle: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      paddingTop: 5,
      color: '#979797',
    },
    dataSection: {
      borderColor: '#979797',
      borderTopWidth: 1,
      paddingTop: 10,
      paddingBottom: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    errorText: {
      color: 'red',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      marginBottom: 5,
    },
    info: {
      paddingBottom: 20,
    },
    buttonSection: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 20,
      marginBottom: 50,
    },
    buttonStyle: {
      position: 'relative',
      left: width / 2 - 3,
      bottom: 10,
      paddingLeft: 25,
      paddingRight: 25,
      margin: 5,
      backgroundColor: '#e91b47',
    },
    btnImageStyle: {
      borderRadius: width * 0.12,
      height: width * 0.12,
      width: width * 0.12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderColor: '#4099F4',
      borderWidth: 1,
      marginRight: 20,
      marginLeft: 10,
    },
    parentLabel: {
      paddingLeft: 10,
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      color: '#979797',
    },
    parentForm: {
      borderBottomWidth: 0,
      justifyContent: 'center',
      flexDirection: 'row',
      marginLeft: 0,
      paddingTop: 10,
      paddingBottom: 0,
    },
  });
