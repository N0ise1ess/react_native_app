import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA'
  },
  customSlide: {
    width,
    height: height / 5,
    flex: 0,
  },
  sliderImage: {
    resizeMode: 'contain',
    width,
    height: height / 5,
  },
  buttonSelected: {
    color: 'red',
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    bottom: 3,
  },
})
