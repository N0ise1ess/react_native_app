import React from 'react';
import Snackbar from 'react-native-snackbar';

const defaultConfig = {
  duration: 3000,
  action: {
    title: 'OK',
    color: '#2b73e9',
    onPress: () => { Snackbar.dismiss() },
  }
}

export class CustomSnackbar extends React.Component {
  static show(config) {
    Snackbar.show({
      ...defaultConfig,
      ...config
    });
  }

  static dismiss() {
    Snackbar.dismiss();
  }
}