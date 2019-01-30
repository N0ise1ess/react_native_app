import React from 'react';
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
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: (width / 5) * 3,
    flexDirection: 'column',
    justifyContent: height < 550 ? 'center' : 'flex-start',
  },
  resetSection: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: (width / 5) * 3,
    flexDirection: 'column',
    justifyContent: height < 550 ? 'center' : 'flex-start',
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
    flex: height < 550 ? 0.5 : 0,
    width: (width / 5) * 3,
    backgroundColor: 'yellow',
  },
  buttonStyle: {
    marginTop: 25,
    backgroundColor: '#163D7D',
  },
  linkedTextStyle: {
    color: '#163D7D',
    textAlign: 'center',
    fontSize: 14,
    paddingTop: height < 550 ? 10 : 15,
  },
  textStyle: {
    fontSize: 14,
    color: '#747A7B',
  },
  headerStyle: {
    backgroundColor: '#163D7D'
  }
})
