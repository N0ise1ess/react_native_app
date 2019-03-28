import { Text } from 'native-base';
import React from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { reset, isValid } from 'redux-form';

import { login } from '../../../../actions/authorizationAction';
import { img_logo } from '../../../../assets/images';
import { MainView } from '../../../../components/Views/MainView';
import { Login } from '../../components';
import { 
  FooterSection,
  CustomSnackbar
 } from '../../../shared/components';
import { styles } from './styles';
import {setFontSize} from '../../../../actions/settingsAction';

class InnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        username: '',
        password: '',
        isScrollable: false,
      },
      styles: styles(props.fontSize),
    };
  }

  static navigationOptions = {
    headerTitle: 'Авторизация',
  };

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  componentWillReceiveProps(newProps) {
    if (this.props.token !== newProps.token) {
      this.props.navigation.navigate('News');
    }
    if (this.props.errorMessage !== newProps.errorMessage) {
      this.showToast(newProps.errorMessage);
    }
  }

  onButtonPress = async () => {
    const { form } = this.props;

    this.props.isFormValid &&
    await this.props.login(form.values);
    !form.values.checkbox && this.props.reset();
  };

  showToast(message) {
    CustomSnackbar.show({
      title: message
    });
  }

  render() {
    const { authLoading, errorMessage, userStatus, navigation } = this.props;
    const {styles} = this.state;
    return (
      <MainView>
        <StatusBar />
        <KeyboardAvoidingView>
          <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps={'handled'}>
            <View style={styles.section}>
              <Image source={img_logo} resizeMode="contain" style={styles.imageStyle} />
              <Login errorMessage handleSubmit={this.onButtonPress} isLoading={authLoading} />
              <View>
                <Text style={styles.linkedTextStyle}>Зарегистрироваться</Text>
                <Text onPress={() => navigation.navigate('ResetPassword')} style={styles.linkedTextStyle}>
                  Восстановить пароль
                </Text>
              </View>
            </View>
          </ScrollView>
          <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
        </KeyboardAvoidingView>
      </MainView>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    form: state.form.login,
    isFormValid: isValid('login')(state)
  };
};

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(login(values)),
  reset: () => dispatch(reset('login')),
  setFontSize: (fontSize) => dispatch(setFontSize(fontSize)),
  dispatch,
});

export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
