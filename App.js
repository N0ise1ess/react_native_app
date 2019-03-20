import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import {Platform, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import InitialStack from './src/navigation/InitialStack';
import store from './src/store/configureStore';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle='light-content' />
        <Root>
          <InitialStack />
        </Root>
      </Provider>
    );
  }
}
