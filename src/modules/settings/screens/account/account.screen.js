import { isEmpty } from 'lodash';
import { Button, Container, Icon, Text } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import { connect } from 'react-redux';

import { CustomIcon, FooterSection } from '../../../shared';
import { editPhoneNumber } from '../../../auth/store/auth-actions';
import { styles } from './styles';

const PHONE_REGEXP = new RegExp(/^\(\d{3}\)\ \d{3}\-\d{2}\-\d{2}$/); // "(xxx) xxx-xx-xx";
const PHONE_MASK = '([000]) [000]-[00]-[00]';

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Учетная запись',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      editableMode: false,
      phoneNumber: props.phoneNumber,
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  render() {
    const { userStatus, lastName, firstName, secondName, role, email } = this.props;
    const { editableMode, phoneNumber, styles } = this.state;
    const studentIndex = role.findIndex((item) => item.type === 'STUDENT');
    const renderPhone = () => {
      return (
        <>
          <Text style={styles.label}>{'Телефон'.toUpperCase()}</Text>
          <Choose>
            {/** Режим просмотра */}
            <When condition={!editableMode}>
              {/** Вызвать функцию getValidatedPhoneNumber и присвоить результат переменной field */}
              <With field={this.getValidatedPhoneNumber(phoneNumber)}>
                <Text style={field.style}>{field.value}</Text>
              </With>
            </When>
            {/** В противном случае */}
            <Otherwise>
              <TextInputMask
                editable={editableMode}
                value={phoneNumber}
                onChangeText={(text) => {
                  this.setState({ phoneNumber: text });
                }}
                style={editableMode ? styles.inputStyle : styles.textStyle}
                mask={PHONE_MASK}
              />
            </Otherwise>
          </Choose>
        </>
      );
    };

    const renderEmail = () => {
      if (!email) return <></>;
      return (
        <>
          <Text style={styles.label}>{'E-mail'.toUpperCase()}</Text>
          {email && <Text style={styles.textStyle}>{email}</Text>}
        </>
      );
    };

    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <View style={styles.sectionStyle}>
            <CustomIcon name={'account'} style={styles.imageStyle} />
            <View style={{ flex: 1 }}>
              <Text style={styles.nameStyle}>
                {lastName && lastName} {firstName && firstName} {secondName && secondName}
              </Text>
              <View style={styles.info}>
                {role.some((item) => item['type'] === 'STUDENT') ? (
                  role[studentIndex].details && role[studentIndex].details.length === 0 ? (
                    <Text style={styles.errorText}>Пользователь не содержит данных</Text>
                  ) : (
                    <View>
                      <Text style={styles.textStyle}>Факультет: {role[studentIndex].details[0].plan.faculty.name}</Text>
                      <Text style={styles.textStyle}>
                        Направление: {role[studentIndex].details[0].plan.speciality.name}
                      </Text>
                      <Text style={styles.textStyle}>Группа: {role[studentIndex].details[0].group.name}</Text>
                    </View>
                  )
                ) : (
                  <Text />
                )}
              </View>
              {renderPhone()}
              {renderEmail()}
            </View>
          </View>

          <View style={styles.buttonSection}>
            {editableMode ? (
              <>
                <Button light style={[styles.buttonStyle, styles.cancelStyle]} onPress={this.onToggleEdit}>
                  <Icon type="MaterialCommunityIcons" name="cancel" style={styles.iconStyle} />
                </Button>
                <Button light style={[styles.buttonStyle, styles.editStyle]} onPress={this.onSubmitEdit}>
                  <Icon type="MaterialCommunityIcons" name="check" style={styles.iconStyle} />
                </Button>
              </>
            ) : (
              <Button light style={[styles.buttonStyle, styles.editStyle]} onPress={this.onToggleEdit}>
                <Icon type="MaterialCommunityIcons" name="pencil" style={styles.iconStyle} />
              </Button>
            )}
          </View>
        </View>

        <FooterSection {...this.props} />
      </Container>
    );
  }

  hasErrors = (phone) => {
    let validators = [
      {
        validate: (phone) => !isEmpty(phone) || this.props.userStatus !== 'STUDENT',
        message: 'Это обязательное поле',
      },
      {
        validate: (phone) => phone.match(PHONE_REGEXP) || (isEmpty(phone) && this.props.userStatus !== 'STUDENT'),
        message: 'Неправильный формат',
      },
    ];
    let error = validators.find((v) => !v.validate(phone));
    return (error && { value: true, message: error.message }) || false;
  };

  getValidatedPhoneNumber = (phone) => {
    let hasErrors = this.hasErrors(phone);
    return {
      style: hasErrors.value ? this.state.styles.errorText : this.state.styles.textStyle,
      value: hasErrors.value ? hasErrors.message : phone,
    };
  };

  onToggleEdit = () => {
    this.setState((prevState) => ({
      editableMode: !prevState.editableMode,
    }));
  };
  onSubmitEdit = () => {
    this.setState((prevState) => ({ editableMode: !prevState.editableMode }));
    let hasErrors = this.hasErrors(this.state.phoneNumber);
    if (!hasErrors.value) {
      this.props.editPhone(this.state.phoneNumber, this.props.token);
    }
  };
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    ...state.accountReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  editPhone: (phoneNumber, token) => dispatch(editPhoneNumber(phoneNumber, token)),
  dispatch,
});

export const AccountScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
