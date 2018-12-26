import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  cardItem: {
    marginBottom: 0,
    paddingBottom: 0,
  },
  sectionTime: {
    paddingBottom: 0,
    paddingTop: 10,
  },
  sectionTitle: {
    paddingBottom: 0,
    paddingTop: 7,
  },
  sectionText: {
    paddingTop: 5,
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
    fontWeight: '400',
  },
  textStyle: {
    fontSize: 14,
  }
})
