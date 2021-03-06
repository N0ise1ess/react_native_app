import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

const { width } = Dimensions.get('window');

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
      flex: 1,
    },
    searchBar: {
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    searchInput: {
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
    },
    searchIcon: {
      color: '#4D6270',
    },
    iconGrid: {
      width: 32,
      height: 32,
      marginLeft: 15,
      marginRight: 5,
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
      color: '#163D7D',
      paddingTop: 2,
    },
    titleStyle: {
      color: 'black',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
      paddingRight: 5,
      fontWeight: 'bold',
      flexWrap: 'wrap',
      paddingBottom: 5,
    },
    listItemStyle: {
      paddingTop: 10,
      paddingBottom: 15,
      marginBottom: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginRight: 0,
      flexDirection: 'column',
      width: width,
    },
    listItemContainer: {
      flex: 1,
      width: '100%',
    },
    listItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    listItemContent: {
      flex: 1,
      justifyContent: 'space-around',
    },
    generalText: {
      color: '#747A7B',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
    },
    collectionTitle: {
      flex: 1,
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
    },
    collectionInfo: {
      flex: 1,
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      paddingTop: 5,
      paddingBottom: 5,
    },
    spinner: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnFind: {
      color: '#163D7D',
    },
    booksListItemContainer: {
      flex: 1,
      width: '100%',
      marginLeft: 35,
    },
    authorName: {
      color: '#747A7B',
      fontFamily: 'MyriadPro-Regular',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
    },
  });
