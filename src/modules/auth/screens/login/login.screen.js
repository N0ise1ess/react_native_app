import { Text } from 'native-base';
import React from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { reset, isValid } from 'redux-form';

import { login } from '../../store/auth-actions';
import { img_logo } from '../../../../assets/images';
import { Login } from '../../components';
import { FooterSection, CustomSnackbar, MainView } from '../../../shared';
import { styles } from './styles';
import { setFontSize } from '../../../settings/store/settings-actions';
import { Navigation } from 'react-native-navigation';

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

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Авторизация',
        },
        leftButtons: [],
      },
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.token !== newProps.token) {
      Navigation.setStackRoot(this.props.componentId, [
        {
          component: {
            name: 'News',
          },
        },
      ]);
    }

    newProps.errorMessage &&
    this.props.errorMessage !== newProps.errorMessage && 
    this.showToast(newProps.errorMessage);
  }

  onButtonPress = async () => {
    const { form } = this.props;

    this.props.isFormValid && (await this.props.login(form.values));
    !form.values.checkbox && this.props.reset();
  };

  showToast(message) {
    CustomSnackbar.show({
      title: message,
    });
  }

  render() {
    const { authLoading, errorMessage, userStatus } = this.props;
    const { styles } = this.state;

    return (
      <MainView>
        <StatusBar />
        <KeyboardAvoidingView>
          <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps={'handled'}>
            <View style={styles.section}>
              <Image source={img_logo} resizeMode="contain" style={styles.imageStyle} />
              <Login errorMessage handleSubmit={this.onButtonPress} isLoading={authLoading} />
              <View>
                <Text
                  onPress={() =>
                    Navigation.push(this.props.componentId, {
                      component: {
                        name: 'SignUp',
                      },
                    })
                  }
                  style={styles.linkedTextStyle}
                >
                  Зарегистрироваться
                </Text>
                <Text
                  onPress={() =>
                    Navigation.push(this.props.componentId, {
                      component: {
                        name: 'ResetPassword',
                      },
                    })
                  }
                  style={styles.linkedTextStyle}
                >
                  Восстановить пароль
                </Text>
              </View>
            </View>
          </ScrollView>
          <FooterSection {...this.props} />
        </KeyboardAvoidingView>
      </MainView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    form: state.form.login,
    isFormValid: isValid('login')(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (values) => dispatch(login(values)),
  reset: () => dispatch(reset('login')),
  setFontSize: (fontSize) => dispatch(setFontSize(fontSize)),
  dispatch,
});

export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
