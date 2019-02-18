import { Button, Text } from 'native-base';
import React from 'react';

import { styles } from './styles';

export class PasswordResetSuccess extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Text style={styles.textStyle}>
          На адрес{' '}
          <Text style={styles.textStyle__email}>
            {this.props.email}
            {'\n'}
          </Text>
          направлена ссылка для{'\n'}
          восстановления пароля.
        </Text>
        <Text style={styles.textStyle}>
          Пожалуйста, следуйте указанным в{'\n'}
          письме инструкциям.
        </Text>
        <Button full rounded style={styles.resetButtonStyle} onPress={() => this.props.goBack()}>
          <Text style={styles.resetButtonStyle_text}>Вернуться к авторизации</Text>
        </Button>
      </React.Fragment>
    );
  }
}
