import Reac from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  content: {
    flex: 1,
    width: width,
    height,
  },
  resetContainer: {
    backgroundColor: '#ced8da',
  },
  section: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: (width / 5) * 3,
    height: height,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  resetSection: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: (width / 5) * 3,
    flexDirection: 'column',
    justifyContent: 'center',
    height: height - 200,
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
    height: height / 5,
  },
  buttonStyle: {
    marginTop: 25,
    backgroundColor: '#163D7D',
  },
  linkedTextStyle: {
    color: '#163D7D',
    marginTop: 25,
    textAlign: 'center',
    fontSize: 14,
  },
  textStyle: {
    fontSize: 14,
    color: '#747A7B',
  },
  headerStyle: {
    backgroundColor: '#163D7D'
  }
})
