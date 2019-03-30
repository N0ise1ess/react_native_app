import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';
const { width, height } = Dimensions.get('window');

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#C8D1D3',
  },
  iconStyle: {
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
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
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
  },
  searchIcon: {
    color: '#4D6270',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5
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
    borderWidth: .5,
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
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
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
    width: (width * 33.5)/100,
    height: 35,
    borderColor: '#fff'
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
	},
});
