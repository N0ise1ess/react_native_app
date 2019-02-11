import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import {
  Header,
  Item,
  Icon,
  Input,
  Button,
  Tab,
  Tabs,
  TabHeading,
  Text,
  Content,
  List,
  Container,
  Spinner,
} from 'native-base';

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
  }

  render() {
    const { userStatus, navigation, timeTableLoading, authLoading, errorDescription } = this.props;
    return (
      <Container style={styles.resetContainer}>
        <Content style={styles.content} scrollEnabled={false}>
        { this.state.isFirstStep &&
          <KeyboardAvoidingView>
              <View style={styles.resetSection}>
                <Text style={styles.textStyle}>Пожалуйста, укажите адрес электронной почты от учетной записи.</Text>
                <ResetPasswordForm
                  errorDescription
                  handleSubmit={this.onButtonPress}
                  isLoading={authLoading}
                />
              </View>
            
          </KeyboardAvoidingView> || <View style={styles.resetSection}>
            <ResetPasswordFormSuccess email={this.state.email}/>
          </View>
        } 
        </Content>
        <FooterSection
          userStatus = {userStatus}
          navigate={navigation.navigate}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    form: state.form.resetPassword,
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreen);
