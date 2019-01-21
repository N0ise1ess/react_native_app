import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import {
  StatusBar,
  Image,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {
  Content,
  Item,
  ListItem,
  Icon,
  Input,
  CheckBox,
  Text,
  Body,
  Button,
  Header,
  Right,
  Left,
  Title,
  Toast,
} from 'native-base';

import { login } from '../../actions/authorizationAction';
import { LoginForm } from '../../components/Forms';

import { MainView } from '../../components/Views/MainView';
import FooterSection from '../../components/Footer';
import { img_logo } from '../../assets/images';
import styles from './styles';

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      values: {
        username: '',
        password: '',
        isScrollable: false
      }
    }
  }

  static navigationOptions = {
    headerTitle: 'Авторизация',
  };

  componentWillReceiveProps(newProps) {
    if(this.props.token !== newProps.token) {
      this.props.navigation.navigate('News');
    }
    if(this.props.errorMessage !== newProps.errorMessage) {
      this.showToast(newProps.errorMessage);
    }
  }

  onButtonPress = async () => {
    const { form } = this.props;
    await this.props.login(form.values);
    !form.values.checkbox && this.props.reset();
  }

  showToast(message) {
    return (
      Toast.show({
        text: message,
        buttonText: 'Ок',
        duration: 2000,
        type: 'danger'
      })
    );
  }

  render(){
    const { authLoading, errorMessage, userStatus, navigation } = this.props;

    return (
      <MainView>
        <StatusBar />
        <View>
          <Content style={styles.content} scrollEnabled={false}>
            <KeyboardAvoidingView>
              <View style={styles.section}>
                <Image
                  source={img_logo}
                  resizeMode='contain'
                  style={styles.imageStyle}
                />
                <LoginForm
                  errorMessage
                  handleSubmit={this.onButtonPress}
                  isLoading={authLoading}
                />
                <Text
                  style={styles.linkedTextStyle}
                >Зарегистрироваться</Text>
                <Text
                  onPress={() => navigation.navigate('ResetPassword')}
                  style={styles.linkedTextStyle}
                >Восстановить пароль</Text>
              </View>
            </KeyboardAvoidingView>
          </Content>
          <FooterSection
            userStatus = {userStatus}
            navigate={navigation.navigate}
          />
        </View>
      </MainView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    form: state.form.login,
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (values) => dispatch(login(values)),
  reset: () => dispatch(reset('login')),
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
