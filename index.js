/** @format */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';

import React from 'react';
import { Navigation } from "react-native-navigation";
import { Platform, StyleSheet, Text, View } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends React.Component<Props> {

    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


Navigation.registerComponent(`App`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "App"
            }
        }
    });
});

// AppRegistry.registerComponent(appName, () => App);
