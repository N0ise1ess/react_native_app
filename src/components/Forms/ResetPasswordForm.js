import React from 'react';
import * as NB from 'native-base';

import styles from './styles';

class LoginForm extends React.Component {

  state = {
    email: '',
  }

  handleSubmit = (email) => {
    const isValid = email !== '' && email !== undefined; 
    isValid ? this.props.handleError('') : this.props.handleError('Пустое поле');
    this.props.handleSubmit && isValid && this.props.handleSubmit(email);
  }

  handleChangeInput = (e) => this.setState({email: e});

  upperCaseWord = (word) => <NB.Label style={styles.label}>{word.toUpperCase()}</NB.Label>;

  render() {
    return (
      <React.Fragment>
        {this.upperCaseWord('E-mail:')}
        <NB.Item regular style={[
          styles.item, 
          styles.resetInputStyle, 
          this.props.errorText !== '' ? styles.resetInputStyle_error : {}
        ]}>
          <NB.Icon
            type="FontAwesome"
            name={'user'}
            style={styles.inputIcon}
          />
          <NB.Input
            type="email"
            name="email" 
            placeholder="ivanov.ivan@example.com"
            placeholderTextColor='silver'
            style={[styles.inputStyle]}
            onChangeText={this.handleChangeInput}
          />
        </NB.Item>
        <NB.Text style={styles.errorStyle}>{this.props.errorText}</NB.Text>
        <NB.Button onPress={() => this.handleSubmit(this.state.email)} full rounded style={styles.resetButtonStyle}>
          {this.props.isLoading ?
            <NB.Spinner color='#fff' size="small" /> 
            : <NB.Text style={styles.resetButtonStyle_text}>Выслать пароль</NB.Text>
          }
        </NB.Button>
      </React.Fragment>
    )
  }
}

export default LoginForm;
