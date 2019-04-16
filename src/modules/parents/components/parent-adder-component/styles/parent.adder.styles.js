import {StyleSheet, Dimensions} from 'react-native';
import {getSizeFonts, fontSettings} from '../../../../shared';

const {width, height} = Dimensions.get('window');

export const styles = (fontSize = 0) =>
    StyleSheet.create({
      text: {
        paddingLeft: 10,
        fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
        color: '#747A7B',
        fontFamily: 'MyriadPro-Regular',
      },
      label: {
        fontSize: 10,
        fontFamily: 'MyriadPro-Regular',
        paddingTop: height < 550 ? getSizeFonts(fontSettings.FONT_SIZE_10, fontSize) : getSizeFonts(fontSettings.FONT_SIZE_18, fontSize),
        color: '#747A7B',
        marginBottom: 5,
        marginTop: 5,
      },
      item: {
        backgroundColor: '#fff',
        marginTop: 2,
        marginBottom: 3
      },
      inputStyle: {
        fontSize: height < 750 ? getSizeFonts(fontSettings.FONT_SIZE_12, fontSize) : getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
        fontFamily: 'MyriadPro-Regular',
        padding: 0,
        height: 34,
        backgroundColor: '#fff',
      },
      inputIcon: {
        fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
        fontFamily: 'MyriadPro-Regular',
        color: '#163D7D',
        paddingTop: 0,
        paddingRight: 0,
        backgroundColor: '#fff',
      },
      textStyle: {
        fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
        fontFamily: 'MyriadPro-Regular',
        color: '#747A7B',
        flex: 1,
        flexWrap: 'wrap',
      },
      buttons: {
        flexDirection: 'row',
        flex: 0.2,
        width: width * 0.7,
        justifyContent: 'space-between',
        marginTop: 20,
        alignSelf: 'center',
      },
      formContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#CED8DA',
        justifyContent: 'space-between',
      },
      form: {
        width: width * 0.7,
        flex: 1,
      },
      backButton: {
        backgroundColor: '#227bd4',
      },
      buttonText: {
        paddingLeft: 30,
        paddingRight: 30,
      },
      nextButton: {
        backgroundColor: '#ec4a58',
      },
      disabledNextButton: {
        backgroundColor: '#d23f50',
        opacity: 0.7,
      },
      listItem: {
        borderBottomWidth: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: height < 550 ? 0 : 10,
        marginLeft: 0,
      },
      personal: {
        flex: 1,
        marginTop: -5,
      },
      asterisk: {
        color: 'red',
        fontSize: getSizeFonts(fontSettings.FONT_SIZE_8, fontSize),
      },
      dateOfBirthInput: {
        fontSize: height < 750 ? getSizeFonts(fontSettings.FONT_SIZE_12, fontSize) : getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
        fontFamily: 'MyriadPro-Regular',
        padding: 0,
        height: 34,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#C4C4C4',
      },
      dateOfBirth: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        marginBottom: 5,
      },
      genderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      },
      separator: {
        color: '#7f7f7f',
      },
      genderText: {
        color: 'white',
      },
      errorStyle: {
        color: 'red',
        height: 34,
        fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
        fontFamily: 'MyriadPro-Regular',
        marginTop: 10,
        marginRight: 10,
        marginBottom: -5,
      },
      readyBtnText: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      title: {
        marginBottom: 10,
        color: '#1462b5',
        fontSize: getSizeFonts(fontSettings.FONT_SIZE_26, fontSize),
        fontFamily: 'MyriadPro-Regular'
      }
});
