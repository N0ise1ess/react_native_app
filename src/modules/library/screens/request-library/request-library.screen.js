import { Container, Content, Tab, TabHeading, Tabs, List, Text, Textarea, Button, Spinner } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { setRequestLibrary, sendRequestLibrary } from '../../../../actions/libraryAction'
import { FooterSection } from '../../../shared/components';
import { styles } from './styles';

class InnerComponent extends Component {

	static options(passProps) {
		return {
			topBar: {
				title: {
					text: 'Заявка на подбор литературы',
				},
			}
		};
	}

	constructor(props) {
		super(props);
		this.state = {
			isComplited: false,
			styles: styles(props.fontSize),
		};
		props.setRequestLibrary('')
	}

	_upperCase(word) {
		return <Text style={[this.state.styles.text, this.state.styles.text__blue]}>{word.toUpperCase()}</Text>;
	}

	_handlerGoNext = () => {
		this.props.sendRequestLibrary({ token: this.props.token, text: this.props.requestLibrary });
		this.setState({ isComplited: true });
	}

	_renderGeneralScreen = (styles) => <React.Fragment>
		<View style={styles.text_block}>
			{this._upperCase('введите ключевые слова или запрос в своболной форме')}
		</View>
		<Textarea
			placeholder={'Например, нефть, нефтедобыча...'}
			placeholderTextColor={'#58739d'}
			bordered
			style={styles.texterea}
			owSpan={8}
			onChangeText={(text) => this.props.setRequestLibrary(text)}
		/>
		<View style={styles.buttons}>
			<Button
				rounded
				style={[styles.button, styles.button__blue]}
				onPress={() => Navigation.pop(this.props.componentId)}
			>
				<Text>{'Отмена'}</Text>
			</Button>
			<Button
				rounded
				style={[styles.button,
				styles.button__red,
				styles.margin_left__15,
				!this.props.requestLibrary && styles.button__disabled,
				]}
				onPress={() => this._handlerGoNext()}
				disabled={!this.props.requestLibrary}
			>
				<Text>{'Готово'}</Text>
			</Button>
		</View>
	</React.Fragment>

	_renderThankYouPage = (styles) => this.props.isLoadingRequestLibrary ? <Spinner color='#blue' /> : <React.Fragment>
		<View style={styles.content}>
			<View style={styles.text_block}>
				<Text style={[styles.text, styles.text__blue]}>{'Спасибо!'}</Text>
			</View>
			<View style={styles.text_block}>
				<Text style={[styles.text, styles.text__bold]}>{'Заявка успешно отправлена!'}</Text>
			</View>
			<View style={styles.text_block}>
				<Text style={styles.text}>{'Номер заявки '}
					<Text style={[styles.text, styles.text__bold, styles.text__light_blue]}>ffs</Text>
				</Text>
			</View>
		</View>
		<View style={styles.buttons}>
			<Button
				rounded
				style={[styles.button, styles.button__red, styles.margin_left__15]}
				onPress={() => Navigation.pop(this.props.componentId)}
			>
				<Text>{'Готово'}</Text>
			</Button>
		</View>
	</React.Fragment>

	render() {
		const { userStatus, } = this.props;
		const { styles, isComplited } = this.state;
		return (<Container style={styles.container} >
			<View style={styles.content}>
				{!isComplited && this._renderGeneralScreen(styles)}
				{isComplited && this._renderThankYouPage(styles)}
			</View>
			<FooterSection {...this.props} />
		</Container>);
	}
}

const mapStateToProps = state => {
	return {
		...state.authReducer,
		...state.settings,
		...state.libraryReducer,
	};
};

export const RequestsLibraryScreen = connect(
	mapStateToProps,
	{ setRequestLibrary, sendRequestLibrary }
)(InnerComponent);
