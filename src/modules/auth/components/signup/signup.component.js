import { Button, CheckBox, Form, Icon, Input, Item, Label, ListItem, Spinner, Text,Body } from 'native-base';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import { styles } from './styles';

const { height } = Dimensions.get('window');

const validate = values => {
  const error = {};
  error.password = '';
  error.username = '';
  if (values.password === undefined) {
  }
  if (values.username === undefined) {
  }
  if (!values.password) {
    error.password = 'Пустое поле';
  }
  if (!values.username) {
    error.username = 'Пустое поле';
  }
  return error;
};

class innerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    }
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  renderInput = ({ input, label, type, meta: { touched, error, warning }, iconName, placeholder }) => {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item regular error={touched && hasError} style={this.state.styles.item}>
        <Icon type="FontAwesome" name={iconName} style={this.state.styles.inputIcon} />
        <Input
          {...input}
          placeholder={placeholder}
          placeholderTextColor="black"
          secureTextEntry={type == 'password'}
          style={this.state.styles.inputStyle}
        />
        {touched && hasError && <Text style={this.state.styles.errorStyle}>{error}</Text>}
      </Item>
    );
  };

  upperCaseWord = word => <Label style={this.state.styles.label}>{word.toUpperCase()}</Label>;

  renderCheckbox = ({ input, label, type, meta: { touched, error, warning } }) => {
    if (input.value === '') {
      input.onChange(!input.value);
    }
    return (
        <ListItem style={{flex:1}}>
            <CheckBox {...input} onPress={() => input.onChange(!input.value)} checked={!!input.value} color="#163D7D" />

            <Body style={{flex:1, justifyContent:'center', alignItems:'center',alignSelf:'center'}}>
            <Text style={{flexWrap:'wrap'}}>Даю свое согласение на своих обработку персональных данных согласно</Text>
            </Body>
        </ListItem>
    );
  };

  render() {
    const { handleSubmit, reset, isLoading, fontSize } = this.props;
    const {styles} = this.state;

    return (
      <Form style={{ justifyContent: 'space-around',flex:1 }}>
        {this.upperCaseWord('Выбирете имя пользователя (логин):')}
        <Field name="username" placeholder="ivanov.ivan" iconName="user" type="username" component={this.renderInput} />
        {this.upperCaseWord('Введите пароль')}
        <Field name="password" placeholder="*********" iconName="lock" type="password" component={this.renderInput} />
        {this.upperCaseWord('Подтвердите пароль')}
        <Field name="password" placeholder="*********" iconName="lock" type="password" component={this.renderInput} />

        <Field name="checkbox" type="checkbox" component={this.renderCheckbox} />

      </Form>
    )
  }
};

export const SignUp = reduxForm({
  form: 'signup',
  validate,
  destroyOnUnmount: false,
})(connect(
  (state) => ({...state.settings}),
  {}
)(innerComponent));
