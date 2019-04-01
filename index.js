/** @format */
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/navigation/navigation';
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
			orientation: ['portrait']
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
			backButton: {
				color: "#fff",
				icon: require('./src/assets/images/back.png')
			},
			rightButtons: [
				{
					id: 'buttonSettings',
					icon: require('./src/assets/images/settings.png'),
				}
			]
		},
	});
	await registerScreens();
	Navigation.setRoot({
		root: {
			component: {
				name: "AuthLoading"
			}
		}
	});
	Navigation.events().registerNavigationButtonPressedListener((event) => {
		event.buttonId === 'buttonSettings' && Navigation.push(event.componentId, {
			component: {
				name: "Settings",
			}
		})
	})
});
