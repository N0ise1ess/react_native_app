import Reac from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  content: {
    flex: 1,
    width: width,
    height,
  },
  section: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: (width / 5) * 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  item: {
    marginTop: 25,
  },
  inputIcon: {
    fontSize: 18,
    color: '#163D7D'
  },
  inputStyle: {
    fontSize: 16,
  },
  imageStyle: {
    width: 'auto',
  },
  buttonStyle: {
    marginTop: 25,
    backgroundColor: '#163D7D',
  },
  linkedTextStyle: {
    color: '#163D7D',
    marginTop: 25,
    textAlign: 'center',
  },
  headerStyle: {
    backgroundColor: '#163D7D'
  }
})
