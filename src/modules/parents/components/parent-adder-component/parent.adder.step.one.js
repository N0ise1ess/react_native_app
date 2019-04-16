import React from "react";
import {styles} from "./styles";
import {Button, Form, Input, Item, Label, Text} from "native-base";
import {Dimensions, KeyboardAvoidingView, View} from 'react-native';
import {Field, reduxForm} from "redux-form";
import {Navigation} from "react-native-navigation";
import {connect} from "react-redux";

const DIGITS_REGEXP = new RegExp('^[0-9]+$');

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

  _validateDigit = (text, length, field) => {
    if ((DIGITS_REGEXP.test(text) && text.length <= length) || text.length === 0) {
      this.setState({ [field]: text });
    }
  };

  dateOfBirth = () => {
    const styles = this.state.styles;
    return (
        <View style={styles.dateOfBirth}>
          <Input
              style={styles.dateOfBirthInput}
              value={this.state.date}
              keyboardType="numeric"
              placeholder="  ДД"
              placeholderTextColor="#C4C4C4"
              onChangeText={(text) => this._validateDigit(text, 2, 'date')}
          />
          <Text style={styles.separator}> / </Text>
          <Input
              style={styles.dateOfBirthInput}
              value={this.state.month}
              keyboardType="numeric"
              placeholder="  ММ"
              placeholderTextColor="#C4C4C4"
              onChangeText={(text) => this._validateDigit(text, 2, 'month')}
          />
          <Text style={styles.separator}> / </Text>
          <Input
              style={styles.dateOfBirthInput}
              value={this.state.year}
              keyboardType="numeric"
              placeholder="  ГГГГ"
              placeholderTextColor="#C4C4C4"
              onChangeText={(text) => this._validateDigit(text, 4, 'year')}
          />
        </View>
    );
  };

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
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Личные данные</Text>
            </View>
            {this.upperCaseWord('Фамилия:', true)}
            <Field name="surname" placeholder="Иванов" iconName="user" type="username" iconRight={true}
                   component={this.renderInput}/>
            {this.upperCaseWord('Имя:', true)}
            <Field name="name" placeholder="Иван" iconName="lock" type="text" component={this.renderInput}/>
            {this.upperCaseWord('Отчество (при наличии):')}
            <Field name="lastName" placeholder="Иванович" iconName="lock" type="text" component={this.renderInput}/>
            {this.upperCaseWord('Дата рождения', true)}
            <Field name="dateofBirth" placeholder="Иван" type="text" component={this.dateOfBirth} />
            {this.upperCaseWord('Родство', true)}
            <Field name="inheritance" placeholder="Отец" type="text" component={this.renderInput}/>
          </Form>
          <View style={styles.buttons}>
            <Button rounded style={styles.backButton} onPress={() => Navigation.push(this.props.componentId, {
              component: {
                name: "Parents",
              }})}>
              <Text style={styles.buttonText}>Отмена</Text>
            </Button>
            <Button style={styles.nextButton} rounded onPress={() => this.props.handleSwitchTab(1)}>
              <Text style={styles.buttonText}>Далее</Text>
            </Button>
          </View>
        </View>
    )
  }
}

export const ParentAddFormOne = reduxForm({
  form: 'parentformone',
  destroyOnUnmount: false,
})(connect(
    (state) => ({...state.settings})
)(innerComponent));