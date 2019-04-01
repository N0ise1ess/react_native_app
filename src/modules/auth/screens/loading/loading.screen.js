import React from 'react';
import { AsyncStorage, Clipboard, Image, Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import { Bar } from 'react-native-progress';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';

import { initLoad } from '../../../../actions/loadingAction';
import { setFontSize } from '../../../../actions/settingsAction';
import { img_logo_white } from '../../../../assets/images';
import { CustomSnackbar } from '../../../shared/components';
import { styles } from './styles';

import {goToAuth} from '../../../../navigation/navigation'

class InnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  componentWillReceiveProps(props) {
    if (props.isLoaded) {
      goToAuth();
    }
  }

  componentWillMount() {
    this.props.initLoad();
  }

  async componentDidMount() {
    SplashScreen.hide()
    this.checkPermission();
    this.createNotificationListeners(); //add this line
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
    if (__DEV__) {
      Clipboard.setString(fcmToken);
      CustomSnackbar.show({ title: 'Copied!' });
    }
  }
  //Remove listeners allocated in createNotificationListeners()
  componentWillUnmount() {
    this.notificationListener();
  }

  async createNotificationListeners() {
    // /*
    // * Triggered when a particular notification has been received in foreground
    // * */
    this.notificationListener = firebase
      .notifications()
      .onNotification((notification) => {
        this.props.navigation.navigate(notification.data.route)
      });

    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      this.props.navigation.navigate(notificationOpen.notification.data.route);
    }
  }

  _retrieveData = async () => {
    try {
      const fontSize = await AsyncStorage.getItem('fontSize');
      fontSize && this.props.setFontSize(parseInt(fontSize));
      console.log('fontSize', fontSize);
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize &&
      this.setState({ styles: styles(this.props.fontSize) });
  }

  render() {
    const { styles } = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={img_logo_white}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.text}>{this.props.text}</Text>
        <View style={styles.progressBar}>
          <Bar
            progress={this.props.progress}
            width={200}
            borderWidth={0}
            borderRadius={2}
            color="#ff003c"
            unfilledColor="white"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.loadingScreen,
    ...state.settings,
  };
};

const mapDispatchToProps = dispatch => ({
  initLoad: () => dispatch(initLoad()),
  setFontSize: fontSize => dispatch(setFontSize(fontSize)),
});

export const LoadingScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
