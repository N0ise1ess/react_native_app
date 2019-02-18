import { Button, Icon, Input, Item, Label, Spinner, Text } from 'native-base';
import React from 'react';

import { styles } from './styles';

export class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleSubmit = email => {
    const isValid = email !== '' && email !== undefined;
    isValid ? this.props.handleError('') : this.props.handleError('Пустое поле');
    this.props.handleSubmit && isValid && this.props.handleSubmit(email);
  };

  handleChangeInput = e => this.setState({ email: e });

  upperCaseWord = word => <Label style={styles.label}>{word.toUpperCase()}</Label>;

  render() {
    return (
      <React.Fragment>
        {this.upperCaseWord('E-mail:')}
        <Item
          regular
          style={[styles.item, styles.resetInputStyle, this.props.errorText !== '' ? styles.resetInputStyle_error : {}]}
        >
          <Icon type="FontAwesome" name={'user'} style={styles.inputIcon} />
          <Input
            type="email"
            name="email"
            placeholder="ivanov.ivan@example.com"
            placeholderTextColor="silver"
            style={[styles.inputStyle]}
            onChangeText={this.handleChangeInput}
          />
        </Item>
        <Text style={styles.errorStyle}>{this.props.errorText}</Text>
        <Button onPress={() => this.handleSubmit(this.state.email)} full rounded style={styles.resetButtonStyle}>
          {this.props.isLoading ? (
            <Spinner color="#fff" size="small" />
          ) : (
            <Text style={styles.resetButtonStyle_text}>Выслать пароль</Text>
          )}
        </Button>
      </React.Fragment>
    );
  }
}
