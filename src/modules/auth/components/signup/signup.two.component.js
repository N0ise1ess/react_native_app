import {Button, Form, Icon, Input, Item, Label, Text} from 'native-base';
import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {styles} from './styles';
import {CustomIcon} from "../../../shared/components/custom-icon";

const { height, width } = Dimensions.get('window');

class innerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      currentTab : 0,
      currentTabPassport : 0,
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

    upperCaseWord = (word, asterisk = false) =>
        <Label style={this.state.styles.label}>{word.toUpperCase()}
            {asterisk ? <Text style={this.state.styles.asterisk}>*</Text> : null}
        </Label>;

    gender = () => {
      return (
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
                onPress={() => this.setState({currentTab: 0})}
                style={[
              this.state.currentTab % 3 === 0 ? this.state.styles.activeTabStyle : {backgroundColor:'#163D7D', },
                this.state.styles.tabHeadingLeft, {flex: 1, alignItems: 'center', justifyContent: 'center'} ]}>
              <Text style={{color: 'white'}}>Женский</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.setState({currentTab: 1})}
                style={[
              this.state.currentTab % 3 === 1 ? this.state.styles.activeTabStyle : {backgroundColor:'#163D7D', },
                this.state.styles.tabHeadingRight, {flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
              <Text style={{color: 'white'}}>Мужской</Text>
            </TouchableOpacity>
          </View>
      )
    }

    dateOfBirth = () => {
      const styles = this.state.styles
      return (
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center', width : '60%'}}>
            <Input style={styles.dateOfBirthInput} placeholder="  ДД" placeholderTextColor="#C4C4C4"/>
            <Text style={{color:'#C4C4C4'}}>/ </Text>
            <Input style={styles.dateOfBirthInput} placeholder="  ММ" placeholderTextColor="#C4C4C4"/>
            <Text style={{color:'#C4C4C4'}}>/ </Text>
            <Input style={styles.dateOfBirthInput} placeholder="  ГГГГ" placeholderTextColor="#C4C4C4"/>
          </View>
      )
    }

    passport = () => {
      const styles = this.state.styles
      return (
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={[this.state.styles.tabHeadingLeft, {backgroundColor:'#163D7D' ,flex:1, alignItems: 'stretch', justifyContent: 'center'} ]}>
              <CustomIcon name="arrow_left" style={styles.iconLeft} />
            </TouchableOpacity>
            <View style={{backgroundColor:'#163D7D', alignItems:'center', justifyContent:'center'}}>
              <Text style={styles.passportText} uppercase={true}>Паспорт</Text>
            </View>
            <TouchableOpacity style={[this.state.styles.tabHeadingRight, {backgroundColor:'#163D7D',flex:1, alignItems: 'stretch', justifyContent: 'center'}]}>
              <CustomIcon name="arrow_right" style={styles.iconRight} />
            </TouchableOpacity>
          </View>
      )
    };

  render() {
    const { handleSubmit, reset, isLoading, fontSize } = this.props;
    const {styles} = this.state;

    return (
      <Form style={styles.form}>
        {this.upperCaseWord('Пол')}
        <Field name="username" placeholder="Иванов" type="username" component={this.gender} />
        {this.upperCaseWord('Дата рождения', true)}
        <Field name="password" placeholder="Иван" type="text" component={this.dateOfBirth} />
        {this.upperCaseWord('Тип документа')}
        <Field name="password" placeholder="Иванович" type="text" component={this.passport} />
        {this.upperCaseWord('Номер документа')}
        <Field name="password" placeholder="XXXXXXXX" type="password" component={this.renderInput} />

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
