import { StyleSheet, Dimensions } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

const { height } = Dimensions.get("window")

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
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
    flex:1,
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 0,
  },
  listStyle: {},
  columnStyle: {
    flex: 1,
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
  },
  //Search tabSectionStyle
  searchBar: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 3,
    backgroundColor: '#fff',
    height: height * 0.07
  },
  searchInput: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
  },
  searchIcon: {
    color: '#4D6270',
  },
  alphabetContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#163D7D',
    marginBottom: 0,
    width: 45
  },
  wordContainer(alphabetLength, index) {
    return {
      borderBottomWidth: index !== alphabetLength - 1 ? 1 : 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: 'white',
      flex: 1 / alphabetLength
    }
  },
  swipeable() {
    return {
      elevation: 1,
      marginBottom: 0,
      borderWidth: 1,
      borderBottomRightRadius: 15,
      borderTopRightRadius: 15,
      borderColor: 'transparent',
      flex: 1
    }
  }
});
