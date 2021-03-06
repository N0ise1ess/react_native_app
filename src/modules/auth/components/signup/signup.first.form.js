import {Button, Form, Input, Item, Label, Tab, TabHeading, Tabs, Text} from 'native-base';
import React from 'react';
import {Dimensions, KeyboardAvoidingView, View} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {styles} from './styles';
import TextInputMask from 'react-native-text-input-mask';
import { Navigation } from 'react-native-navigation';

const PHONE_REGEXP = new RegExp("^[0-9]+$");
const EMAIL_REGEXP = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
const PHONE_MASK = '([000]) [000]-[00]-[00]';

const validate = values => {
  const error = {};
  error.email = '';
  if (!EMAIL_REGEXP.test(values.email)) {
    error.email = 'Email неправильный'
  }
  return error;
};

class innerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      phoneNumber: '',
      currentTab: 0
    }
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  renderInput = ({input, label, type, meta: {touched, error, warning}, iconName, placeholder, iconRight}) => {
    let hasError = error !== undefined
    return (
        <Item regular error={touched && hasError} style={this.state.styles.item}>
          <Input
              {...input}
              placeholder={placeholder}
              placeholderTextColor="#747A7B"
              secureTextEntry={type === 'password'}
              style={this.state.styles.inputStyle}
          />
          {touched && hasError && <Text style={this.state.styles.errorStyle}>{error}</Text>}
        </Item>
    );
  };

  renderPhone = () => {
    const {phoneNumber, styles} = this.state
    return (
        <TextInputMask
            keyboardType='numeric'
            editable={true}
            value={phoneNumber}
            onChangeText={() => {
              this._inputPhone
            }}
            style={styles.inputPhone}
            mask={PHONE_MASK}
            maskDefaultValue={false}
            placeholder={'(XXX) XXX-XX-XX'}
        />
    )
  }

  _inputPhone = text => {
    if (PHONE_REGEXP.test(text)) {
      this.setState({phoneNumber: text});
    }
  }

  upperCaseWord = (word, asterisk = false) =>
      <Label style={this.state.styles.label}>{word.toUpperCase()}
        {asterisk ? <Text style={this.state.styles.asterisk}>*</Text> : null}
      </Label>;

  render() {
    const {handleSubmit, reset, isLoading, fontSize} = this.props;

    const {styles} = this.state
    return (
        <View style={styles.formContainer}>
          <Form style={styles.form}>
            {this.upperCaseWord('Фамилия:', true)}
            <Field name="surname" placeholder="Иванов" iconName="user" type="username" iconRight={true}
                   component={this.renderInput}/>
            {this.upperCaseWord('Имя:', true)}
            <Field name="name" placeholder="Иван" iconName="lock" type="text" component={this.renderInput}/>
            {this.upperCaseWord('Отчество (при наличии):')}
            <Field name="lastName" placeholder="Иванович" iconName="lock" type="text" component={this.renderInput}/>
            {this.upperCaseWord('E-mail:', true)}
            <Field name="email" placeholder="email@email.com" iconName="lock" type="text"
                   component={this.renderInput}/>
            {this.upperCaseWord('Номер телефона:', true)}
            <Field name="phone" placeholder="*********" iconName="lock" type="text" component={this.renderPhone}/>
          </Form>
          <View style={styles.buttons}>
            <Button rounded style={styles.backButton} onPress={() => Navigation.push(this.props.componentId, {
              component: {
                name: "Auth",
              }})}>
              <Text style={styles.buttonText}>Отмена</Text>
            </Button>
            <Button style={styles.nextButton} rounded onPress={() => this.props.handleSwitchTab(1)}>
              <Text style={styles.buttonText}>Далее...</Text>
            </Button>
          </View>
        </View>
    )
  }
}

export const SignUpFirstForm = reduxForm({
  form: 'signupfirstform',
  validate,
  destroyOnUnmount: false,
})(connect(
    (state) => ({...state.settings})
)(innerComponent));
