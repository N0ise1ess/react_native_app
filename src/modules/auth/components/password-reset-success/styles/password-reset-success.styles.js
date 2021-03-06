import { StyleSheet, Dimensions } from 'react-native';
import { getSizeFonts, fontSettings } from '../../../../shared';

const { width, height } = Dimensions.get('window');

export const styles = (fontSize) =>
  StyleSheet.create({
    label: {
      fontSize: 10,
      fontFamily: 'MyriadPro-Regular',
      paddingTop: height < 550 ? getSizeFonts(10, fontSize) : 20,
      color: '#747A7B',
    },
    inputStyle: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: height < 750 ? getSizeFonts(fontSettings.FONT_SIZE_12, fontSize) : getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
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
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
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
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
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
      fontFamily: 'MyriadPro-Regular',
      fontSize: width > 360 ? getSizeFonts(fontSettings.FONT_SIZE_14, fontSize) : getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
    },
    textStyle: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      color: '#747A7B',
    },
    textStyle__email: {
      color: '#0067f6',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
    },
  });
