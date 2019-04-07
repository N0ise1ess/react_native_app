import { StyleSheet, Dimensions } from 'react-native';

import { getSizeFonts, fontSettings } from '../../../../shared';

const { width, height } = Dimensions.get('window');

export const styles = (fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#CED8DA',
      flex: 1,
      alignItems: 'center',
    },
    scrollContainer: {
      backgroundColor: '#CED8DA',
      flex: 1,
      alignItems: 'center',
      width: width,
      height,
      minHeight: 450,
    },
    elevation0: {
      elevation: 0,
    },
    height0: {
      height: 0,
    },
  });
