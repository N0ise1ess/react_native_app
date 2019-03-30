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
    return (
          <ListItem style={this.state.styles.listItem}>
              <CheckBox {...input} onPress={() => input.onChange(!input.value)} checked={!input.value} color="#163D7D" />
              <View style={this.state.styles.personal}>
                  <Text style={this.state.styles.text}>Согласен на обработку своих персональных данных согласно</Text>
                  <Text style={[this.state.styles.text, {color:'#0C68FF'}]}>Политики обработки персональных данных в ФБГОУ ВО "СамГТУ"
                      и Положения об обработке и защите персональных данных в ФБГОУ ВО "СамГТУ"</Text>
              </View>
          </ListItem>
      )
  };

  render() {
    const { handleSubmit, reset, isLoading, fontSize } = this.props;
    const {styles} = this.state;

    return (
        <View style={styles.form}>
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
            <Button rounded style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
              <Text>Назад</Text>
            </Button>
            <Button style={styles.nextButton} rounded>
              <Text>Готово</Text>
            </Button>
          </View>
        </View>
    )
  }
};

export const SignUpThree = reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
})(connect(
  (state) => ({...state.settings}),
  {}
)(innerComponent));
