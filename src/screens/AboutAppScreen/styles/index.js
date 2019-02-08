import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  content: {
    flex: 1,
    width: width,
    height,
    backgroundColor: '#CED8DA',
  },
  section: {
    flex: 0.5,
    marginLeft: 'auto',
    marginRight: 'auto',
    width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    resizeMode: 'contain',
    maxHeight: 120,
    width: (width / 5) * 3,
  },
  buttonStyle: {
    marginTop: 25,
    backgroundColor: '#163D7D',
  },
  linkedTextStyle: {
    color: '#163D7D',
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 15,
  },
  textStyle: {
    padding: 20,
    fontSize: 14,
    color: '#747A7B',
  },
  linkStyle: {
    color: '#2D77F0',
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: '#163D7D'
  }
})
