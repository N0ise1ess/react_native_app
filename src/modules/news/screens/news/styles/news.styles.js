import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';
const { width, height } = Dimensions.get('window');

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
    },
    textEvent: {
      alignSelf: 'center',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      color: '#2F528B',
      paddingTop: 10,
    },
    textEventWhite: {
      alignSelf: 'center',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      color: '#fff',
    },
    tabStyle: {
      width: width / 3 - 10,
      backgroundColor: '#163D7D',
      marginTop: 10,
      marginBottom: 5,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 5,
      paddingBottom: 5,
      borderWidth: 1,
      borderColor: '#fff',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
    },
    activeTabStyle: {
      backgroundColor: '#0E63EE',
    },
    tabRight: {
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
    },
    tabLeft: {
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
    },
    tabTitleStyle: {
      color: '#fff',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(12, fontSize),
      fontWeight: '300',
      textAlign: 'center',
    },
    tabSectionStyle: {
      paddingTop: 0,
      backgroundColor: '#CED8DA',
    },
    sliderContainer: {
      width: '100%',
      position: 'absolute',
      height: height / 5,
      elevation: 0,
      flex: 1,
      zIndex: 1,
    },
    tabbarBox: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
      backgroundColor: '#CED8DA',
      justifyContent: 'center',
      flexDirection: 'row',
      zIndex: 2,
    },
  });
