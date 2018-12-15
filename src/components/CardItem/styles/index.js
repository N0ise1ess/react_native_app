import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  cardStyle: {
    width: (width - 60) / 2,
    height: (width - 60) / 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5, 
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 50,
    marginTop: 20,
  },
  textStyle: {
    textAlign: 'center',
    height: 45,
    color: '#2E518A',
  }
})
