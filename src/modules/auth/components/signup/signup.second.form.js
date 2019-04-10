import { Button, Form, Icon, Input, Item, Label, Text } from 'native-base';
import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { styles } from './styles';
import { CustomIcon } from '../../../shared';

const DIGITS_REGEXP = new RegExp('^[0-9]+$');

class innerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      currentTab: 1,
      currentTabPassport: 0,
      gender: 'female',
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
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

  upperCaseWord = (word, asterisk = false) => (
    <Label style={this.state.styles.label}>
      {word.toUpperCase()}
      {asterisk ? <Text style={this.state.styles.asterisk}>*</Text> : null}
    </Label>
  );

  gender = ({ input, label, type, meta: { touched, error, warning }, currentTab }) => {
    const { styles } = this.state;
    return (
      <View style={styles.genderContainer}>
        <TouchableOpacity
          onPress={() => this.setState({ currentTab: 0 })}
          style={[currentTab === 0 ? styles.activeTabStyle : styles.inactiveTabStyle, styles.tabHeadingLeft]}
        >
          <Text style={styles.genderText}>Женский</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({ currentTab: 1 })}
          style={[currentTab === 1 ? styles.activeTabStyle : styles.inactiveTabStyle, styles.tabHeadingRight]}
        >
          <Text style={styles.genderText}>Мужской</Text>
        </TouchableOpacity>
      </View>
    );
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

  _validateDigit = (text, length, field) => {
    if ((DIGITS_REGEXP.test(text) && text.length <= length) || text.length === 0) {
      this.setState({ [field]: text });
    }
  };

  document = () => {
    const styles = this.state.styles;
    return (
      <View style={styles.documentContainer}>
        <TouchableOpacity style={this.state.styles.iconContainerLeft}>
          <CustomIcon name="arrow_left" style={styles.iconLeft} />
        </TouchableOpacity>
        <View style={styles.document}>
          <Text style={styles.documentText} uppercase={true}>
            Паспорт
          </Text>
        </View>
        <TouchableOpacity style={this.state.styles.iconContainerRight}>
          <CustomIcon name="arrow_right" style={styles.iconRight} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { handleSubmit, reset, isLoading, fontSize } = this.props;
    const { styles } = this.state;

    return (
      <View style={styles.formContainer}>
        <Form style={styles.form}>
          {this.upperCaseWord('Пол')}
          <Field name="username" placeholder="Иванов" type="username" component={this.gender} currentTab={this.state.currentTab} />
          {this.upperCaseWord('Дата рождения', true)}
          <Field name="dateofBirth" placeholder="Иван" type="text" component={this.dateOfBirth} />
          {this.upperCaseWord('Тип документа')}
          <Field name="password" placeholder="Иванович" type="text" component={this.document} />
          {this.upperCaseWord('Номер документа')}
          <Field name="document" placeholder="XXXXXXXX" type="text" component={this.renderInput} />
        </Form>
        <View style={styles.buttons}>
          <Button rounded style={styles.backButton} onPress={() => this.props.handleSwitchTab(0)}>
            <Text style={styles.buttonText}>Назад</Text>
          </Button>
          <Button style={styles.nextButton} rounded onPress={() => this.props.handleSwitchTab(2)}>
            <Text style={styles.buttonText}>Далее...</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export const SignUpSecondForm = reduxForm({
  form: 'signupsecondform',
  destroyOnUnmount: false,
})(
  connect(
    (state) => ({ ...state.settings }),
    {},
  )(innerComponent),
);
