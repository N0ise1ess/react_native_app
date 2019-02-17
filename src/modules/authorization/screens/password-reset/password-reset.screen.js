import { Container, Content, Text } from 'native-base';
import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { connect } from 'react-redux';

import * as action from '../../../../actions/authorizationAction';
import { ResetPasswordForm, ResetPasswordFormSuccess } from '../../../../components/Forms';
import { styles } from '../../styles';
import { ButtonBack, FooterSection } from '../../../shared/components';

class InnerComponent extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Восстановление пароля',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      isFirstStep: true,
    };
    props.initFirstStepResetPassword();
  }

  onButtonPress = email => {
    this.setState({ isFirstStep: false, email });
    this.props.resetPassword(email);
  };

  render() {
    const {
      userStatus,
      navigation,
      sendEmailLoading,
      errorText,
      isFirstStepResetPassword,
      setErrorResetPassword,
    } = this.props;
    return (
      <Container style={styles.resetContainer}>
        <Content style={styles.content} scrollEnabled={false}>
          {(isFirstStepResetPassword && (
            <KeyboardAvoidingView>
              <View style={styles.resetSection}>
                <Text style={styles.textStyle}>Пожалуйста, укажите адрес электронной почты от учетной записи.</Text>
                <ResetPasswordForm
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
              <ResetPasswordFormSuccess email={this.state.email} goBack={this.props.navigation.goBack} />
            </View>
          )}
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}
export const PasswordResetScreen = connect(
  state => ({ ...state.authReducer }),
  { ...action },
)(InnerComponent);
