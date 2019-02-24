import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

const { width, height } = Dimensions.get('window');
export const styles = (fontSize) => StyleSheet.create({
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
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_18, fontSize),
    color: '#163D7D',
  },
  inputStyle: {
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
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
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    paddingTop: 15,
  },
  textStyle: {
    padding: 20,
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    color: '#747A7B',
  },
  linkStyle: {
    color: '#2D77F0',
    fontWeight: 'bold',
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
  },
  headerStyle: {
    backgroundColor: '#163D7D',
  },
});
