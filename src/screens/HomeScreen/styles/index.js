import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  flatListStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
  },
  customSlide: {
    flex: 1,
    backgroundColor: '#CED8DA'
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    bottom: 20,
  },
  buttonSelected: {
    color: '#0E63EE'
  },
  headerImageStyle: {
    resizeMode: 'contain',
    height: 30,
  }
})
