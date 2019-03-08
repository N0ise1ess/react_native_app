import {StyleSheet, Dimensions} from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

const {width, height} = Dimensions.get("window");

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  listItemStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 20,
    marginRight: 0,
    flexDirection: 'column',
    width: width
  },
  listStyle: {},
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconStyle: {
    fontSize: 32,
    color: '#163D7D'
  },
  titleStyle: {
    color: '#163D7D',
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 5
  },
  //Search tabSectionStyle
  searchBar: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  searchInput: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
  },
  searchIcon: {
    color: '#4D6270'
  },
  label: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    color: '#979797',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf:'flex-start',
    width: width,
    flex:1
  },
  dataSection: {
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnImageStyle: {
    borderRadius: width * 0.1,
    marginRight: 10,
    height: width * 0.1,
    width: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C68FF',
  },
  imageStyle: {
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_18, fontSize),
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
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    fontWeight: 'bold',
    color: '#4099F4',
  },
})
