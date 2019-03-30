import { Button, CheckBox, Form, Icon, Input, Item, Label, ListItem, Spinner, Text,Body } from 'native-base';
import React from 'react';
import { Dimensions, View, KeyboardAvoidingView } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import { styles } from './styles';
import TextInputMask from 'react-native-text-input-mask';

const PHONE_REGEXP = new RegExp("^[0-9]+$");
const PHONE_MASK = '([000]) [000]-[00]-[00]';

class innerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      phoneNumber: ('123') + ' 456' + '-78' + '-90'
    }
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  renderInput = ({ input, label, type, meta: { touched, error, warning }, iconName, placeholder, iconRight }) => {
    return (
      <Item regular error={touched && error} style={this.state.styles.item}>
        <Input
          {...input}
          placeholder={placeholder}
          placeholderTextColor="#747A7B"
          secureTextEntry={type === 'password'}
          style={this.state.styles.inputStyle}
        />
        {touched && error && <Text style={this.state.styles.errorStyle}>{error}</Text>}
      </Item>
    );
  };

  renderPhone = () => {
    const { phoneNumber, styles } = this.state
    return (
        <TextInputMask
            editable={true}
            value={phoneNumber}
            onChangeText={() => {this._inputPhone}}
            style={styles.inputPhone}
            mask={PHONE_MASK}
        />
    )
  }

  _inputPhone = text => {
    if (PHONE_REGEXP.test(text)) {
      this.setState({ phoneNumber: text });
    }
  }

  upperCaseWord = (word, asterisk = false) =>
      <Label style={this.state.styles.label}>{word.toUpperCase()}
          {asterisk ? <Text style={this.state.styles.asterisk}>*</Text> : null}
      </Label>;

  render() {
    const { handleSubmit, reset, isLoading, fontSize } = this.props;
    const {styles} = this.state;

    return (
        <View style={styles.form}>
          <Form style={styles.form}>
            {this.upperCaseWord('Фамилия:', true)}
            <Field name="surname" placeholder="Иванов" iconName="user" type="username" iconRight={true} component={this.renderInput} />
            {this.upperCaseWord('Имя:', true)}
            <Field name="name" placeholder="Иван" iconName="lock" type="password" component={this.renderInput} />
            {this.upperCaseWord('Отчество (при наличии):')}
            <Field name="lastName" placeholder="Иванович" iconName="lock" type="password" component={this.renderInput} />
            {this.upperCaseWord('E-mail:', true)}
            <Field name="email" placeholder="email@email.com" iconName="lock" type="password" component={this.renderInput} />
            {this.upperCaseWord('Номер телефона:',true)}
            <Field name="phone" placeholder="*********" iconName="lock" type="text" component={this.renderPhone} />
          </Form>
          <View style={styles.buttons}>
            <Button rounded style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
              <Text>Отмена</Text>
            </Button>
            <Button style={styles.nextButton} rounded onPress={() => this.props.navigation.navigate('SignUp2')}>
              <Text>Далее</Text>
            </Button>
          </View>
        </View>
    )
  }
};

export const SignUpOne = reduxForm({
  form: 'signupone',
  destroyOnUnmount: false,
})(connect(
    (state) => ({...state.settings})
)(innerComponent));
