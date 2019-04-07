import { Container, Content, Text } from 'native-base';
import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { connect } from 'react-redux';

import { FooterSection } from '../../../shared';
import { PasswordReset, PasswordResetSuccess } from '../../components';
import * as action from '../../store/auth-actions';
import { styles } from './styles';

class InnerComponent extends React.Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Восстановление пароля',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      isFirstStep: true,
      styles: styles(props.fontSize),
    };
    props.initFirstStepResetPassword();
  }

  onButtonPress = (email) => {
    this.setState({ isFirstStep: false, email });
    this.props.resetPassword(email);
  };

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  render() {
    const {
      userStatus,
      navigation,
      sendEmailLoading,
      errorText,
      isFirstStepResetPassword,
      setErrorResetPassword,
    } = this.props;
    const { styles } = this.state;
    return (
      <Container style={styles.resetContainer}>
        <Content style={styles.content} scrollEnabled={false}>
          {(isFirstStepResetPassword && (
            <KeyboardAvoidingView>
              <View style={styles.resetSection}>
                <Text style={styles.textStyle}>Пожалуйста, укажите адрес электронной почты от учетной записи.</Text>
                <PasswordReset
                  fontSize={this.props.fontSize}
                  errorDescription
                  handleSubmit={this.onButtonPress}
                  isLoading={sendEmailLoading}
                  errorText={errorText}
                  handleError={setErrorResetPassword}
                />
              </View>
            </KeyboardAvoidingView>
          )) || (
            <View style={styles.resetSection}>
              <PasswordResetSuccess
                fontSize={this.props.fontSize}
                styles={styles}
                email={this.state.email}
                goBack={this.props.navigation.goBack}
              />
            </View>
          )}
        </Content>
        <FooterSection {...this.props} />
      </Container>
    );
  }
}
export const PasswordResetScreen = connect(
  (state) => ({ ...state.authReducer, ...state.settings }),
  { ...action },
)(InnerComponent);
