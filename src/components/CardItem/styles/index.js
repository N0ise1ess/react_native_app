import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
console.log(height);
const MIN_WIDTH = width / 3;
export default StyleSheet.create({
  cardStyle: {
    width: (height - 100) / 5,
    minWidth: MIN_WIDTH,
    height: (MIN_WIDTH > (height - 100) / 5) ? MIN_WIDTH : (height - 60) / 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
    padding: 4,
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
  },
  borderStyle: {
    flex: 1,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CED8DA',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})
