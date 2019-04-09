import { StyleSheet, Dimensions } from 'react-native';
import { fontSettings, getSizeFonts } from '../../../../shared';
const { width, height } = Dimensions.get('window');

export const styles = (fontSize = 0) =>
  StyleSheet.create({
    text: {
      paddingLeft: 10,
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      color: 'silver',
      fontFamily: 'MyriadPro-Regular',
    },
    label: {
      fontSize: 10,
      fontFamily: 'MyriadPro-Regular',
      paddingTop: height < 550 ? getSizeFonts(fontSettings.FONT_SIZE_10, fontSize) : getSizeFonts(fontSettings.FONT_SIZE_18, fontSize),
      color: '#747A7B',
    },
    inputStyle: {
      fontSize: height < 750 ? getSizeFonts(fontSettings.FONT_SIZE_12, fontSize) : getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
      fontFamily: 'MyriadPro-Regular',
      padding: 0,
      height: 34,
    },
    resetInputStyle: {
      backgroundColor: '#fff',
    },
    resetInputStyle_error: {
      borderColor: '#ED3944',
      borderWidth: 1,
    },
    inputIcon: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
      fontFamily: 'MyriadPro-Regular',
      color: '#163D7D',
      paddingTop: 0,
      paddingRight: 0,
    },
    item: {
      marginTop: height < 550 ? 0 : 5,
    },
    buttonStyle: {
      marginTop: height < 550 ? 0 : 10,
      backgroundColor: '#0C68FF',
    },
    errorStyle: {
      color: 'red',
      height: 40,
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      fontFamily: 'MyriadPro-Regular',
      marginTop: 10,
      marginRight: 10,
    },
    resetButtonStyle: {
      backgroundColor: '#ED3944',
      position: 'absolute',
      bottom: 50,
      width: '100%',
    },
    resetButtonStyle_text: {
      fontSize: width > 360 ? getSizeFonts(fontSettings.FONT_SIZE_14, fontSize) : getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      fontFamily: 'MyriadPro-Regular',
    },
    textStyle: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      fontFamily: 'MyriadPro-Regular',
      color: '#747A7B',
    },
    textStyle__email: {
      color: '#0067f6',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      fontFamily: 'MyriadPro-Regular',
    },
  });
