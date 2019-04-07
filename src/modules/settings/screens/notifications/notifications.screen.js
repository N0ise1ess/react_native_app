import { Container, Text } from 'native-base';
import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { connect } from 'react-redux';
import {
	FooterSection
} from '../../../shared/components';
import SwitchToggle from 'react-native-switch-toggle';
import { styles } from './styles';

const listSettings = [{
	text: 'Финансы',
	type: 'finance',
	userStatus: 'authUser',
}, {
	text: 'Сообщения',
	type: 'message',
	userStatus: 'student',
}, {
	text: 'Электронная библиотека',
	type: 'library',
	userStatus: 'student',
}, {
	text: 'Анкетные опросы',
	type: 'questionnaires',
	userStatus: 'student',
}, {
	text: 'Новости университета',
	type: 'news',
	userStatus: 'guest',
}, {
	text: 'Новости библиотеки',
	type: 'newsLibrary',
	userStatus: 'guest',
},];

class InnerComponent extends Component {

	static options(passProps) {
		return {
			topBar: {
				title: {
					text: 'Уведомления',
				},
			}
		};
	}

	constructor(props) {
		super(props);
		this.state = {
			styles: styles(props.fontSize),
			notificationSettings: {
				finance: true,
				message: true,
				library: true,
				questionnaires: true,
				news: true,
				newsLibrary: true,
			}
		};
	};

	async componentDidUpdate(props) {
		this.props.fontSize !== props.fontSize &&
			this.setState({ styles: styles(this.props.fontSize) });
		await AsyncStorage.setItem(`notificationSettings`, JSON.stringify({
			...this.state.notificationSettings,
		}));
	}

	async componentDidMount() {
		try {
			let notificationSettings = await AsyncStorage.getItem('notificationSettings');
			notificationSettings && this.setState({ notificationSettings: JSON.parse(notificationSettings) });
		} catch (e) {
			console.log(e);
		}
	}

	renderSwitch = (type) => (
		<SwitchToggle
			containerStyle={this.state.styles.container_switch}
			circleStyle={this.state.styles.circle_switch}
			switchOn={this.state.notificationSettings[type]}
			onPress={() => this.handlerPressSwith(type)}
			circleColorOff='#818181'
			circleColorOn='#0060f7'
			backgroundColorOn='#fff'
			backgroundColorOff='#fff'
			duration={100}
		/>
	);

	handlerPressSwith = async (type) => {
		let state = !this.state.notificationSettings[type];
		try {
			this.setState({
				notificationSettings: {
					...this.state.notificationSettings,
					[type]: state,
				}
			})
		} catch (e) {
			console.log(e);
		}
	}

	renderSettings = (item, index) => this.props.userStatus === 'guest' && (
		<View key={index} style={this.state.styles.row}>
			<View style={this.state.styles.col}>
				<Text style={this.state.styles.text}>
					{item.text}
				</Text>
			</View>
			<View style={[this.state.styles.col, this.state.styles.col__center]}>
				{this.renderSwitch(item.type)}
			</View>
		</View>
	)

	render() {
		const { styles } = this.state;
		return (
			<Container style={styles.container}>
				<View style={styles.content}>
					<View style={styles.backgroundSettings}>
						{listSettings.map(this.renderSettings)}
					</View>
				</View>
				<FooterSection {...this.props} />
			</Container>
		);
	}

}

const mapStateToProps = state => ({
	...state.authReducer,
	...state.accountReducer,
	...state.settings
})

export const NotificationSettingsScreen = connect(
	mapStateToProps,
	{}
)(InnerComponent);
