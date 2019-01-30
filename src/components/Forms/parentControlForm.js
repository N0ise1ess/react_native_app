import React from 'react';
import { Container, Item, Icon, Input, Header, Form, Body, Content, CheckBox, ListItem, Label, Title, Button, Text, Spinner } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import styles from './styles';

const renderCheckbox = ({ input, label, type, meta: { touched, error, warning }}) => {
  if(input.value === '') {
    input.onChange(!input.value);
  }
  return <ListItem style={{borderBottomWidth: 0, justifyContent: 'center', flexDirection: 'row', marginLeft: 0, paddingTop: 10, paddingBottom: 0}}>
    <CheckBox
      {...input}
      onPress={() => input.onChange(!input.value)}
      checked={!!input.value}
      color="#163D7D"
    />
    <Text style={{paddingLeft: 10, fontSize: 14}}>{label}</Text>
  </ListItem>
}

let ParentControlForm = props => {
  const { handleSubmit, reset, isLoading } = props;
  return <Form style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
    <Field name="recordBookField" label="Зачетная книжка" type="checkbox" component={renderCheckbox} />
    <Field name="ratingField" label="Персональный рейтинг" type="checkbox" component={renderCheckbox} />
    <Field name="questionnairesField" label="Анкеты" type="checkbox" component={renderCheckbox} />
    <Field name="financeField" label="Финансы" type="checkbox" component={renderCheckbox} />
    <Field name="wifiAccessField" label="Доступ Wi-Fi" type="checkbox" component={renderCheckbox} />
  </Form>
}

export default ParentControlForm = reduxForm({
  // a unique name for the form
  form: 'parentControl',
  destroyOnUnmount: false,
})(ParentControlForm)
