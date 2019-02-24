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
    minHeight: 450,
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
    justifyContent: 'space-evenly',
  },
  resetSection: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: (width / 5) * 3,
    flexDirection: 'column',
    justifyContent: 'center',
    height: height - 200,
    position: 'relative',
  },
  item: {
    marginTop: 25,
  },
  inputIcon: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_18, fontSize),
    color: '#163D7D',
  },
  inputStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_16, fontSize),
  },
  imageStyle: {
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
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    paddingTop: 15,
  },
  textStyle: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    color: '#747A7B',
  },
  headerStyle: {
    backgroundColor: '#163D7D',
  },
});
