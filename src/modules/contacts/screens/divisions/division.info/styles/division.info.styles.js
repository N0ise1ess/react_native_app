import {StyleSheet, Dimensions} from 'react-native';
import * as settingsFonts from '../../../../../../constants/styles';
import {getSizeFonts} from '../../../../../shared/functions/styles';

const {width, height} = Dimensions.get("window");

export const styles = (fontSize) => StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  section: {
    flex: 1,
    justifyContent: 'space-between'
  },
  borderLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
    marginBottom: 5
  },
  label: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_10, fontSize),
    color: '#979797',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignSelf: 'flex-start',
    width: width,
    flex: 1,
    backgroundColor: '#fff',
  },
  dataSection: {
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginBottom: 5
  },
  btnImageStyle: {
    borderRadius: width * 0.1,
    marginRight: 20,
    height: width * 0.1,
    width: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C68FF',
  },
  imageStyle: {
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_17, fontSize),
    color: 'white',
    alignContent: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center'
  },
  info: {
    borderColor: '#979797',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  dataStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    fontWeight: 'bold',
    color: '#4099F4',
  },
  dummy: {
    width: 32,
    height: 32,
    marginLeft: 30
  },
  nameStyle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1e1e1e',
    paddingRight: 5,
    marginRight: 5
  },
  directorSection: {
    marginTop: 10,
    alignSelf: 'flex-start'
  },
  universityInfo : {
    alignSelf: 'flex-start',
    marginBottom: 5
  }
})
