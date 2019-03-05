import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
  },
  iconStyle: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    resizeMode: 'contain',
    tintColor: '#2386e1',
  },
  listItemStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 5,
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 0,
  },
  listStyle: {},
  columnStyle: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  titleStyle: {
    fontWeight: 'bold',
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    alignSelf: 'flex-start',
    color: '#1e1e1e'
  },
  textStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    fontWeight: '300',
    color: '#1e1e1e',
    alignSelf: 'flex-start',
    marginRight: 5
  },
  //Search tabSectionStyle
  searchBar: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
  },
  searchIcon: {
    color: '#4D6270',
  },
});
