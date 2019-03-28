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
          placeholderTextColor="#747A7B"
          secureTextEntry={type === 'password'}
          style={this.state.styles.inputStyle}
        />
        {touched && hasError && <Text style={this.state.styles.errorStyle}>{error}</Text>}
      {iconRight ? <Icon type="FontAwesome" name='sort-down' style={[this.state.styles.inputIcon, {marginRight: 10}]} /> : null}
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
      <Form style={styles.form}>
        {this.upperCaseWord('Пол')}
        <Field name="username" placeholder="Иванов" iconName="user" type="username" iconRight={true} component={this.renderInput} />
        {this.upperCaseWord('Дата рождения', true)}
        <Field name="password" placeholder="Иван" iconName="lock" type="password" component={this.renderInput} />
        {this.upperCaseWord('Тип документа')}
        <Field name="password" placeholder="Иванович" iconName="lock" type="password" component={this.renderInput} />
        {this.upperCaseWord('Номер документа')}
        <Field name="password" placeholder="Иванович" iconName="lock" type="password" component={this.renderInput} />

      <View style={styles.buttons}>
          <Button rounded style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
              <Text>Назад</Text>
          </Button>
          <Button style={styles.nextButton} rounded onPress={() => this.props.navigation.navigate('SignUp3')}>
              <Text>Далее</Text>
          </Button>
      </View>

      </Form>
    )
  }
};

export const SignUpTwo = reduxForm({
  form: 'signuptwo',
  destroyOnUnmount: false,
})(connect(
  (state) => ({...state.settings}),
  {}
)(innerComponent));
