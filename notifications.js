import { AsyncStorage, Clipboard } from 'react-native';
import firebase from 'react-native-firebase';
import { Navigation } from 'react-native-navigation';

import { CustomSnackbar } from './src/modules/shared/components';

export class NotificationListener {
  subscribeToNotifications() {
    const channel = new firebase.notifications.Android.Channel('notifications_channel', 'Notifications Channel', firebase.notifications.Android.Importance.Max)
    .setDescription('Campus notifications');
    firebase.notifications().android.createChannel(channel);
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
      .onNotification((message) => {
        const notification = new firebase.notifications.Notification()
          .setNotificationId(message.notificationId)
          .setTitle(message.title)
          .setBody(message.body)
        //   .setSound('default')
          .setData(message.data);

        notification.android
          .setChannelId('notifications_channel')
          .android.setSmallIcon('ic_notification')
          .android.setPriority(firebase.notifications.Android.Priority.Max);

        firebase.notifications().displayNotification(notification);
      });

    firebase.notifications().onNotificationOpened((tapped) => {
      if (tapped) {
        firebase
          .notifications()
          .removeDeliveredNotification(tapped.notification.notificationId);
        Navigation.push(this.componentId, {
          component: {
            name: 'Notifications',
          },
        });
      }
    });
  }
}
