import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  StatusBar,
  Image,
  View,
} from 'react-native';
import {
  Content,
  Item,
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
} from 'native-base';

import { login } from '../../actions/authorizationAction';

import { MainView } from '../../components/Views/MainView';
import { img_logo } from '../../assets/images';
import styles from './styles';

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      values: {
        username: '',
        password: '',
      }
    }
  }

  static navigationOptions = {
    header: <Header style={styles.headerStyle}>
      <Left>
        <Button transparent>
          <Icon name='arrow-back' style={{color: 'white'}}/>
        </Button>
      </Left>
      <Body>
        <Title style={{color: '#fff'}}>Авторизация</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon type='Feather' name='settings' style={{color: 'white'}} />
        </Button>
      </Right>
    </Header>
  };

  componentWillReceiveProps(newProps) {
    if(this.props.token !== newProps.token) {
      this.props.navigation.navigate('App');
    }
  }

  onButtonPress = () => {
    console.log('login is precessing');
    this.props.login(this.state.values);
  }

  onInputUsernameChange = (event) => {
    console.log(event.type);
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        username: event
      }
    }))
  }

  onInputPasswordChange = (event) => {
    console.log(event.type);
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        password: event
      }
    }))
  }

  renderInputForm = () => {
    return <Fragment>
      <Item regular style={styles.item}>
        <Icon
          type="FontAwesome"
          name='user'
          style={styles.inputIcon}
        />
        <Input
          onChangeText={this.onInputUsernameChange}
          value={this.state.values.username}
          style={styles.inputStyle}
          placeholder='Логин'/>
      </Item>
      <Item regular style={styles.item} >
        <Icon
          type="FontAwesome"
          name='lock'
          style={styles.inputIcon}/>
        <Input
          onChangeText={this.onInputPasswordChange}
          value={this.state.values.password}
          style={styles.inputStyle}
          placeholder='Пароль'/>
      </Item>
      <Item style={[styles.item, {borderBottomWidth: 0}]}>
        <CheckBox checked={true} color="#163D7D"/>
        <Body>
          <Text>Запомнить</Text>
        </Body>
      </Item>
      <Button onPress={this.onButtonPress} full rounded style={styles.buttonStyle}>
        <Text>Войти</Text>
      </Button>
    </Fragment>
  }

  render(){
    console.log(this.props);
    return (
      <MainView>
        <StatusBar />
        <Content>
          <View style={styles.content}>
            <Image
              source={img_logo}
              resizeMode='contain'
              style={styles.imageStyle}
            />
          {this.renderInputForm()}
          <Text style={styles.linkedTextStyle}>Зарегистрироваться</Text>
          <Text style={styles.linkedTextStyle}>Восстановить пароль</Text>
          </View>
        </Content>
      </MainView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (values) => dispatch(login(values)),
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
