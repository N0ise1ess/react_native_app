import React from 'react';
import { Container, Item, Icon, Input, Header, Form, Body, Content, CheckBox, ListItem, Label, Title, Button, Text, Spinner } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import styles from './styles';

const validate = values => {
  const error= {};
  error.email= '';
  var email = values.email;
  if(values.email === undefined){
    email = '';
  }
  if(!values.email){
    error.password = 'Пустое поле';
  }
  return error;
};

const renderInput = ({ input, label, type, meta: { touched, error, warning }, iconName, placeholder }) => {
  var hasError= false;
  if(error !== undefined){
    hasError= true;
  }
  return(
    <Item regular error={touched && hasError} style={[styles.item, styles.resetInputStyle]}>
      <Icon
        type="FontAwesome"
        name={iconName}
        style={styles.inputIcon}
      />
      <Input
        {...input}
        placeholder={placeholder}
        placeholderTextColor='silver'
        style={styles.inputStyle}
      />
      {touched && hasError && <Text style={styles.errorStyle}>{error}</Text>}
    </Item>
  )
}

const upperCaseWord = (word) => <Label style={styles.label}>{word.toUpperCase()}</Label>

let LoginForm = props => {
  const { handleSubmit, reset, isLoading } = props;
  return <Form style={{justifyContent: 'space-around'}}>
    {upperCaseWord('E-mail')}
    <Field name="email" placeholder="ivanov.ivan@example.com" iconName='user' type="email" component={renderInput} />
    <Button onPress={handleSubmit} full rounded style={styles.resetButtonStyle}>
      {isLoading ? <Spinner color='#fff' size="small" /> : <Text>Выслать пароль</Text>}
    </Button>
  </Form>
}

export default LoginForm = reduxForm({
  // a unique name for the form
  form: 'resetPassword',
  validate,
  destroyOnUnmount: false,
})(LoginForm)
