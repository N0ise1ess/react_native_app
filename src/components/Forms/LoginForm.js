import React from 'react';
import { Container, Item, Icon, Input, Header, Form, Body, Content, CheckBox, ListItem, Label, Title, Button, Text, Spinner } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import styles from './styles';

const validate = values => {
  const error= {};
  error.password= '';
  error.username= '';
  var pass = values.password;
  var un = values.username;
  if(values.password === undefined){
    pass = '';
  }
  if(values.username === undefined){
    un = '';
  }
  if(!values.password){
    error.password = 'Пустое поле';
  }
  if(!values.username){
    error.username = 'Пустое поле';
  }
  return error;
};

const renderInput = ({ input, label, type, meta: { touched, error, warning }, iconName, placeholder }) => {
  var hasError= false;
  if(error !== undefined){
    hasError= true;
  }
  return(
    <Item regular error={touched && hasError} style={styles.item}>
      <Icon
        type="FontAwesome"
        name={iconName}
        style={styles.inputIcon}
      />
      <Input
        {...input}
        placeholder={placeholder}
        placeholderTextColor='silver'
        secureTextEntry={type == 'password'}
        style={styles.inputStyle}
      />
      {touched && hasError && <Text style={styles.errorStyle}>{error}</Text>}
    </Item>
  )
}

const renderCheckbox = ({ input, label, type, meta: { touched, error, warning }}) => {
  console.log(input.value);
  if(input.value === '') {
    input.onChange(!input.value);
  }
  return <ListItem style={{borderBottomWidth: 0, justifyContent: 'center', flexDirection: 'row', marginTop: 10, marginLeft: 0,}}>
    <CheckBox
      {...input}
      onPress={() => input.onChange(!input.value)}
      checked={!!input.value}
      color="#163D7D"
    />
  <Text style={{paddingLeft: 10, fontSize: 14, color: 'silver'}}>Запомнить</Text>
  </ListItem>
}

const upperCaseWord = (word) => <Label style={styles.label}>{word.toUpperCase()}</Label>

let LoginForm = props => {
  const { handleSubmit, reset, isLoading } = props;
  return <Form style={{justifyContent: 'space-around'}}>
    {upperCaseWord('Логин')}
    <Field name="username" placeholder="ivanov.ii" iconName='user' type="username" component={renderInput} />
    {upperCaseWord('Пароль')}
    <Field name="password" placeholder="*********" iconName='lock' type="password" component={renderInput} />
    <Field name="checkbox" type="checkbox" component={renderCheckbox} />
    <Button onPress={handleSubmit} full rounded style={styles.buttonStyle}>
      {isLoading ? <Spinner color='#fff' size="small" /> : <Text>Войти</Text>}
    </Button>
  </Form>
}

export default LoginForm = reduxForm({
  // a unique name for the form
  form: 'login',
  validate,
  destroyOnUnmount: false,
})(LoginForm)
