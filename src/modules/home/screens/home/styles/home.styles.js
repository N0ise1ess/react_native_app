import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
  },
  flatListStyle: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
  customSlide: {
    flex: 1,
    backgroundColor: '#CED8DA',
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  buttonSelected: {
    color: '#0E63EE',
  },
  headerImageStyle: {
    resizeMode: 'contain',
    height: 30,
  },
});
