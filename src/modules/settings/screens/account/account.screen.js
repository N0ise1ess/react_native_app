import { isEmpty } from 'lodash';
import { Button, Container, Icon, Text } from 'native-base';
import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import { connect } from 'react-redux';

import { editPhoneNumber } from '../../../../actions/authorizationAction';
import { ButtonBack, CustomIcon, FooterSection } from '../../../shared/components';
import { styles } from './styles';

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Учетная запись',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      editableMode: false,
      phoneNumber: props.phoneNumber,
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  render() {
    const { userStatus, navigation, lastName, firstName, secondName, role, email } = this.props;
    const { editableMode, phoneNumber, styles } = this.state;
    const studentIndex = role.findIndex(item => item.type === 'STUDENT');
    const renderPhone = () => {
      return (
        <>
          <Text style={styles.label}>{'Телефон'.toUpperCase()}</Text>
          {!editableMode && isEmpty(phoneNumber) ? (
            <Text style={styles.errorText}>Номер отсутствует</Text>
          ) : (
            <TextInputMask
              editable={editableMode}
              value={phoneNumber}
              style={editableMode ? styles.inputStyle : styles.textStyle}
              onChangeText={(formatted, extracted) => {
                this.setState({ phoneNumber: extracted });
              }}
              mask="8([000])[000]-[00]-[00]"
            />
          )}
        </>
      );
    };

    const renderEmail = () => {
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
                {role.some(item => item['type'] === 'STUDENT') ? (
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

        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
  onToggleEdit = () => {
    this.setState(prevState => ({ editableMode: !prevState.editableMode, phoneNumber: this.props.phoneNumber }));
  };
  onSubmitEdit = () => {
    this.setState(prevState => ({ editableMode: !prevState.editableMode }));
    this.props.editPhone(this.state.phoneNumber, this.props.token);
  };
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.accountReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = dispatch => ({
  editPhone: (phoneNumber, token) => dispatch(editPhoneNumber(phoneNumber, token)),
  dispatch,
});

export const AccountScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
