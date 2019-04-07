/** @format */
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/navigation/navigation';
import { NotificationListener } from './notification-listener';

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setDefaultOptions({
    statusBar: {
      hideWithTopBar: true,
      visible: true,
      style: 'light',
    },
    layout: {
      direction: 'ltr',
      backgroundColor: '#CED8DA',
      orientation: ['portrait'],
    },
    topBar: {
      visible: true,
      drawBehind: false,
      title: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#fff',
      },
      background: {
        color: '#163D7D',
      },
      backButton: {},
      leftButtons: [
        {
          visible: false,
          id: 'buttonLeft',
          icon: require('./src/assets/images/back.png'),
        },
      ],
      rightButtons: [
        {
          id: 'buttonSettings',
          icon: require('./src/assets/images/settings.png'),
        },
      ],
    },
  });
  await registerScreens();
  Navigation.setRoot({
    root: {
      component: {
        name: 'AuthLoading',
      },
    },
  });

  Navigation.events().registerNavigationButtonPressedListener((event) => {
    switch (event.buttonId) {
      case 'buttonSettings': {
        Navigation.push(event.componentId, {
          component: {
            name: 'Settings',
          },
        });
        break;
      }
      case 'buttonLeft': {
        Navigation.pop(event.componentId);
        break;
      }
    }
  });
  new NotificationListener().subscribeToNotifications();
});
