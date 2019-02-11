import React from 'react';
import * as NB from 'native-base';

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

  upperCaseWord = (word) => <NB.Label style={styles.label}>{word.toUpperCase()}</NB.Label>;

  render() {
    return (
      <React.Fragment>
        {this.upperCaseWord('E-mail:')}
        <NB.Item regular style={[styles.item, styles.resetInputStyle]}>
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
            style={styles.inputStyle}
            onChangeText={this.handleChangeInput}
          />
        </NB.Item>
        <NB.Text style={styles.errorStyle}>{this.state.textError}</NB.Text>
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
