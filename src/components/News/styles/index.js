import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  imageStyle: {
    resizeMode: 'cover',
    height: 200,
    width: width - 30,
    marginTop: 15,
    alignSelf: 'center',
  }
})
