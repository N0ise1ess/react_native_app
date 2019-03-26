import { CheckBox, Form, ListItem, Text } from 'native-base';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderCheckbox = ({ input, label, type, meta: { touched, error, warning }, ...styles}) => {
  if(input.value === '') {
    input.onChange(!input.value);
  }
  return <ListItem style={styles.styles.parentForm}>
    <CheckBox
      {...input}
      onPress={() => input.onChange(!input.value)}
      checked={!!input.value}
      color="#163D7D"
    />
    <Text style={styles.styles.parentLabel}>{label}</Text>
  </ListItem>
}

let innerComponent = props => {
  const { handleSubmit, reset, isLoading } = props;
  return <Form style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
    <Field name="recordBookField" label="Зачетная книжка" type="checkbox" component={renderCheckbox} styles={props.styles}/>
    <Field name="ratingField" label="Персональный рейтинг" type="checkbox" component={renderCheckbox} styles={props.styles}/>
    <Field name="questionnairesField" label="Анкеты" type="checkbox" component={renderCheckbox} styles={props.styles}/>
    <Field name="financeField" label="Финансы" type="checkbox" component={renderCheckbox} styles={props.styles}/>
    <Field name="wifiAccessField" label="Доступ Wi-Fi" type="checkbox" component={renderCheckbox} styles={props.styles}/>
  </Form>
}

export const Parent = reduxForm({
  form: 'parentControl',
  destroyOnUnmount: false,
})(innerComponent)
