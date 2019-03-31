/** @format */
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/navigation/navigation';
import { CustomIcon } from './src/modules/shared/components/custom-icon';

Navigation.events().registerAppLaunchedListener(async () => {
	await Navigation.setDefaultOptions({
		statusBar: {
			visible: false,
			style: 'light',
		},
		layout: {
			backgroundColor: 'white',
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
      },
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
});
