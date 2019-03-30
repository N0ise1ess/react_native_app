import { Button, CheckBox, Form, Icon, Input, Item, Label, ListItem, Spinner, Text,Body } from 'native-base';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import { styles } from './styles';

const { height, width } = Dimensions.get('window');

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
            <Field name="username" placeholder="Иванов" iconName="user" type="username" iconRight={true} component={this.renderInput} />
            {this.upperCaseWord('Имя:', true)}
            <Field name="password" placeholder="Иван" iconName="lock" type="password" component={this.renderInput} />
            {this.upperCaseWord('Отчество (при наличии):')}
            <Field name="password" placeholder="Иванович" iconName="lock" type="password" component={this.renderInput} />
            {this.upperCaseWord('E-mail:', true)}
            <Field name="password" placeholder="email@email.com" iconName="lock" type="password" component={this.renderInput} />
            {this.upperCaseWord('Номер телефона:',true)}
            <Field name="password" placeholder="*********" iconName="lock" type="password" component={this.renderInput} />
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
