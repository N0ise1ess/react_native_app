import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, TextInput } from 'react-native';
import { Button, Icon, Container, Content, Text } from 'native-base';
import styles from './styles/accountStyles';
import FooterSection from '../../components/Footer';
import Image from 'react-native-remote-svg';

import { img_account } from '../../assets/images';
import { editPhoneNumber } from '../../actions/authorizationAction';

class AccountScreen extends Component {
  static navigationOptions = {
    title: 'Учетная запись',
  };

  constructor(props) {
    super(props);
    this.state = {
      editableMode: false,
      phoneNumber: props.phoneNumber,
    };
  }

  render() {
    const { userStatus, navigation, lastName, firstName, secondName, role, email } = this.props;
    const { editableMode, phoneNumber } = this.state;
    const studentIndex = role.findIndex(item => item.type === 'STUDENT');

    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <View style={styles.sectionStyle}>
            {/* <Image source={img_account} style={styles.imageStyle} /> */}
            <Image source={require('../../assets/images/account.svg')} style={styles.imageStyle} />
            <View style={{ flex: 1 }}>
              {this.renderFullname(lastName, firstName, secondName)}
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

              {this.renderLabel('Телефон')}
              {editableMode ? (
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={phoneNumber => this.setState({ phoneNumber })}
                  value={phoneNumber}
                />
              ) : (
                <Text style={phoneNumber ? styles.textStyle : styles.errorText}>
                  {phoneNumber ? phoneNumber : 'Номер отсутствует'}
                </Text>
              )}

              {this.renderLabel('E-mail')}
              {email && <Text style={styles.textStyle}>{email}</Text>}
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

  renderLabel = text => <Text style={styles.label}>{text.toUpperCase()}</Text>;
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
  };
};

const mapDispatchToProps = dispatch => ({
  editPhone: (phoneNumber, token) => dispatch(editPhoneNumber(phoneNumber, token)),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountScreen);
