import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
  },
  flatListStyle: {
    flexDirection: 'row',
    flex: 1,
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
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  buttonSelected: {
    color: '#0E63EE'
  },
  headerImageStyle: {
    resizeMode: 'contain',
    height: 30,
  }
})
