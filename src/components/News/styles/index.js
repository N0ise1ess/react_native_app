import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  cardItem: {
    marginTop: 10,
  },
  imageStyle: {
    resizeMode: 'cover',
    height: 200,
    width: width - 30,
    marginTop: 15,
    alignSelf: 'center',
  },
  timeStyle: {
    color: '#2F528B',
    fontSize: 14,
  },
  textStyle: {
    fontSize: 14,
  }
})
