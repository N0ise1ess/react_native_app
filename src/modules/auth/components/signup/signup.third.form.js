import { Button, CheckBox, Form, Icon, Input, Item, Label, ListItem, Spinner, Text,Body } from 'native-base';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import { styles } from './styles';

class innerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      policyAgreement: false
    }
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  renderInput = ({ input, label, type, meta: { touched, error, warning }, iconName, placeholder, iconRight }) => {
    return (
        <Item regular error={touched && error} style={this.state.styles.item}>
          <Icon type="FontAwesome" name={iconName} style={this.state.styles.inputIcon} />
          <Input
              {...input}
              placeholder={placeholder}
              placeholderTextColor="#747A7B"
              secureTextEntry={type === 'password'}
              style={this.state.styles.inputStyle}
          />
          {touched && error && <Text style={this.state.styles.errorStyle}>{error}</Text>}
          {iconRight ? <Icon type="FontAwesome" name='sort-down' style={[this.state.styles.sortDownIcon]} /> : null}
        </Item>
    );
  };

  upperCaseWord = (word, asterisk = false) =>
      <Label style={this.state.styles.label}>{word.toUpperCase()}
        {asterisk ? <Text style={this.state.styles.asterisk}>*</Text> : null}
      </Label>;

  renderCheckbox = ({ input, label, type, meta: { touched, error, warning } }) => {
    const {policyAgreement} = this.state;
    return (
        <ListItem style={this.state.styles.listItem}>
          <CheckBox {...input} onPress={() => this._handleCheckBox(input)} checked={policyAgreement} color="#163D7D" />
          <View style={this.state.styles.personal}>
            <Text style={this.state.styles.text}>Согласен на обработку своих персональных данных согласно</Text>
            <Text style={this.state.styles.policy}>Политики обработки персональных данных в ФБГОУ ВО "СамГТУ"
              и Положения об обработке и защите персональных данных в ФБГОУ ВО "СамГТУ"</Text>
          </View>
        </ListItem>
    )
  };

  _handleCheckBox(input) {
    const {policyAgreement} = this.state;
    input.onChange(!policyAgreement)
    this.setState((prevState) => ({policyAgreement: !prevState.policyAgreement}))
  }

  render() {
    const { handleSubmit, reset, isLoading, fontSize } = this.props;
    const {styles} = this.state;

    return (
        <View style={styles.formContainer}>
          <Form style={styles.form}>
            {this.upperCaseWord('Выберите имя пользователя (логин)')}
            <Field name="username" placeholder="ivanov.ivan" iconName="user" type="username" iconRight={true} component={this.renderInput} />
            {this.upperCaseWord('Введите пароль:')}
            <Field name="password" placeholder="*********" iconName="lock" type="password" component={this.renderInput} />
            {this.upperCaseWord('Подтвердите пароль:')}
            <Field name="password" placeholder="*********" iconName="lock" type="password" component={this.renderInput} />

            <Field name="checkbox" type="checkbox" component={this.renderCheckbox}/>
          </Form>
          <View style={styles.buttons}>
            <Button rounded style={styles.backButton} onPress={() => this.props.handleSwitchTab(1)}>
              <Text style={styles.buttonText}>Назад</Text>
            </Button>
            <Button style={this.state.policyAgreement ? styles.nextButton : styles.disabledNextButton}
                    disabled={!this.state.policyAgreement}
                    rounded onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.readyBtnText}>Готово</Text>
            </Button>
          </View>
        </View>
    )
  }
};

export const SignUpThirdForm = reduxForm({
  form: 'signupthirdform',
  destroyOnUnmount: false,
})(connect(
    (state) => ({...state.settings}),
    {}
)(innerComponent));
