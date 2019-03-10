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
    paddingRight: 0,
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
  }
})
