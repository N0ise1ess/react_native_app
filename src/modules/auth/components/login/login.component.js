import { Button, CheckBox, Form, Icon, Input, Item, Label, ListItem, Spinner, Text } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
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
          placeholderTextColor="silver"
          secureTextEntry={type == 'password'}
          style={this.state.styles.inputStyle}
        />
        {touched && hasError && <Text style={this.state.styles.errorStyle}>{error}</Text>}
      </Item>
    );
  };

  upperCaseWord = word => <Label style={this.state.styles.label}>{word.toUpperCase()}</Label>;

  renderCheckbox = ({ input, label, type, meta: { touched, error, warning } }) => {
    console.log(input.value);
    if (input.value === '') {
      input.onChange(!input.value);
    }
    return (
      <ListItem
        style={{
          borderBottomWidth: 0,
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: height < 550 ? 0 : 10,
          marginLeft: 0,
        }}
      >
        <CheckBox {...input} onPress={() => input.onChange(!input.value)} checked={!!input.value} color="#163D7D" />
        <Text style={this.state.styles.text}>Запомнить</Text>
      </ListItem>
    );
  };

  render() {
    const { handleSubmit, reset, isLoading, fontSize } = this.props;
    const {styles} = this.state;

    return (
      <Form style={{ justifyContent: 'space-around' }}>
        {this.upperCaseWord('Логин')}
        <Field name="username" placeholder="ivanov.ii" iconName="user" type="username" component={this.renderInput} />
        {this.upperCaseWord('Пароль')}
        <Field name="password" placeholder="*********" iconName="lock" type="password" component={this.renderInput} />
        <Field name="checkbox" type="checkbox" component={this.renderCheckbox} />
        <Button onPress={handleSubmit} full rounded style={styles.buttonStyle}>
          {isLoading ? <Spinner color="#fff" size="small" /> : <Text>Войти</Text>}
        </Button>
      </Form>
    )
  }
};

export const Login = reduxForm({
  form: 'login',
  validate,
  destroyOnUnmount: false,
})(connect(
  (state) => ({...state.settings}),
  {}
)(innerComponent));
