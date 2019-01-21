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
import { ResetPasswordForm } from '../../components/Forms';

import { getSearchedTimetable } from '../../actions/timetableAction';

import styles from './styles';

const timeTableList = [
  {
    title: 'Разработка программного обеспечения обеспечения',
    text: 'Иванова Н.М. 524 ауд., корпус 8',
    time: '16:30-18:00',
  },
  {
    title: 'ИНО, практика',
    text: 'Иванова Н.М. 524 ауд., корпус 8',
    time: '18:00-19.30',
  },
  {
    title: 'Иностранный язык',
    text: 'Сергеев, Н.М. 524 ауд., корпус 8',
    time: '16:30-18:00',
  },
  {
    title: 'Разработка программного обеспечения',
    text: 'Иванова Н.М. 524 ауд., корпус 8',
    time: '16:30-18:00',
  },
];

class ResetPasswordScreen extends Component {
  static navigationOptions = {
    title: 'Восстановление пароля',
  };


  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { userStatus, navigation, timeTableLoading, authLoading, errorCode, error, errorDescription } = this.props;
    return (
      <Container style={styles.resetContainer}>
        <Content style={styles.content} scrollEnabled={false}>
          <KeyboardAvoidingView>
            <View style={styles.resetSection}>
              <Text style={styles.textStyle}>Пожалуйста, укажите адрес электронной почты от учетной записи.</Text>
              <ResetPasswordForm
                errorMessage
                handleSubmit={this.onButtonPress}
                isLoading={authLoading}
              />
            </View>
          </KeyboardAvoidingView>
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
