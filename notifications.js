import { AsyncStorage, Clipboard } from 'react-native';
import firebase from 'react-native-firebase';
import { Navigation } from 'react-native-navigation';

import { CustomSnackbar } from './src/modules/shared/components';

export class NotificationListener {
  subscribeToNotifications() {
    Navigation.events().registerComponentDidAppearListener(
      ({ componentId }) => {
        this.componentId = componentId;
      },
    );

    this.checkPermission();
    this.createNotificationListeners();
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
      this.getToken();
    } catch (error) {
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
  async createNotificationListeners() {
    this.notificationListener = firebase
      .notifications()
      .onNotification((notification) => {
        Navigation.push(this.componentId, {
          component: {
            name: 'Notifications',
          },
        });
        //fixme: we should create headsup here
      });

    firebase.notifications().onNotificationOpened((tapped) => {
      if (tapped) {
        Navigation.push(this.componentId, {
          component: {
            name: 'Notifications',
          },
        });
      }
    });
  }
}
