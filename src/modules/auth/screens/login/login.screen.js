import { Text, Toast } from 'native-base';
import React from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import { login } from '../../../../actions/authorizationAction';
import { img_logo } from '../../../../assets/images';
import { MainView } from '../../../../components/Views/MainView';
import { Login } from '../../components';
import { FooterSection } from '../../../shared/components';
import { styles } from './styles';

class InnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        username: '',
        password: '',
        isScrollable: false,
      },
    };
  }

  static navigationOptions = {
    headerTitle: 'Авторизация',
  };

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
    await this.props.login(form.values);
    !form.values.checkbox && this.props.reset();
  };

  showToast(message) {
    return Toast.show({
      text: message,
      buttonText: 'Ок',
      duration: 2000,
      type: 'danger',
    });
  }

  render() {
    const { authLoading, errorMessage, userStatus, navigation } = this.props;
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
  };
};

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(login(values)),
  reset: () => dispatch(reset('login')),
  dispatch,
});

export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
