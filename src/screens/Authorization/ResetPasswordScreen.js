import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  KeyboardAvoidingView,
} from 'react-native';
import * as NB from 'native-base';
import * as action from '../../actions/authorizationAction';
import FooterSection from '../../components/Footer';
import { ResetPasswordForm, ResetPasswordFormSuccess } from '../../components/Forms';
import styles from './styles';

class ResetPasswordScreen extends Component {

  static navigationOptions = {
    title: 'Восстановление пароля',
  };

  constructor(props) {
    super(props);
    this.state = {
      isFirstStep: true,
    }
  }

  onButtonPress = (email) => {
    this.setState({isFirstStep: false, email})
    this.props.resetPassword(email);
  }

  render() {
    const { userStatus, navigation, authLoading, } = this.props;
    return (
      <NB.Container style={styles.resetContainer}>
        <NB.Content style={styles.content} scrollEnabled={false}>
        { this.state.isFirstStep &&
          <KeyboardAvoidingView>
            <View style={styles.resetSection}>
              <NB.Text style={styles.textStyle}>Пожалуйста, укажите адрес электронной почты от учетной записи.</NB.Text>
              <ResetPasswordForm
                errorDescription
                handleSubmit={this.onButtonPress}
                isLoading={authLoading}
              />
            </View>
          </KeyboardAvoidingView> 
          || <View style={styles.resetSection}>
            <ResetPasswordFormSuccess email={this.state.email} goBack={this.props.navigation.goBack}/>
          </View>
        } 
        </NB.Content>
        <FooterSection
          userStatus = {userStatus}
          navigate={navigation.navigate}
        />
      </NB.Container>
    )
  }
}

export default connect((state) => ({...state.authReducer}), {...action})(ResetPasswordScreen);
