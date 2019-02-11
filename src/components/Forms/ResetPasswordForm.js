import React from 'react';
import { Item, Icon, Input, Label, Button, Text, Spinner } from 'native-base';

import styles from './styles';

const errorText = ({
  notFound: (<React.Fragment>Адрес отсутствует в системе, {"\n"}проверьте его правильность</React.Fragment>),
  null: 'Пустое поле',
})

class LoginForm extends React.Component {

  state = ({
    textError: '',
  })

  handleSubmit = (email) => {
    const isValid = email !== ''; 
    isValid ? this.setState({textError: ''}) : this.setState({textError: errorText['null']});
    this.props.handleSubmit && isValid && this.props.handleSubmit(email);
  }

  handleChangeInput = (e) => this.setState({email: e});

  upperCaseWord = (word) => <Label style={styles.label}>{word.toUpperCase()}</Label>;

  render() {
    return (
      <React.Fragment>
        {this.upperCaseWord('E-mail:')}
        <Item regular style={[styles.item, styles.resetInputStyle]}>
          <Icon
            type="FontAwesome"
            name={'user'}
            style={styles.inputIcon}
          />
          <Input
            type="email"
            name="email" 
            placeholder="ivanov.ivan@example.com"
            placeholderTextColor='silver'
            style={styles.inputStyle}
            onChangeText={this.handleChangeInput}
          />
        </Item>
        <Text style={styles.errorStyle}>{this.state.textError}</Text>
        <Button onPress={() => this.handleSubmit(this.state.email)} full rounded style={styles.resetButtonStyle}>
          {this.props.isLoading ?
            <Spinner color='#fff' size="small" /> 
            : <Text style={styles.resetButtonStyle_text}>Выслать пароль</Text>
          }
        </Button>
      </React.Fragment>
    )
  }
}

export default LoginForm;
