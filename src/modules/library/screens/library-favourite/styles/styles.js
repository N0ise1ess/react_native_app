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
    iconStar: {
      width: 32,
      height: 32,
      marginLeft: 25,
      marginRight: 0,
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
      color: '#237cd6',
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
      marginTop: 5,
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
    marginTop0: {
      marginTop: 0,
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
      paddingTop: 2,
      paddingBottom: 2,
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
    bookViewerSection: {
      backgroundColor: '#fff',
      flex: 1,
      padding: 50,
      paddingRight: 20,
    },
    bookActionButtons: {
      position: 'absolute',
      right: 20,
      top: 40,
    },
    actionButton: {
      color: '#fff',
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#1c88f3',
      justifyContent: 'center',
      textAlign: 'center',
      width: 40,
      height: 40,
      lineHeight: 40,
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
      marginTop: 10,
      borderRadius: 20,
    },
    keyWordsText: {
      color: '#1d88f3',
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
    },
    bookViewText: {
      fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
      marginBottom: 10,
      paddingRight: 50,
    },
    readButton: {
      alignSelf: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#eb4043',
      borderRadius: 20,
      marginTop: 10,
      width: '40%',
    },
    readButtonText: {
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  });
