import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {
  View,
  TextInput
} from 'react-native';
import {
  Button,
  Icon,
  Container,
  Content,
  Text,
} from 'native-base';
import styles from './styles/accountStyles';
import FooterSection from '../../components/Footer';
import CustomIcon from '../../components/CustomIcon/CustomIcon.js'


class AccountScreen extends Component {
  static navigationOptions = {
    title: 'Учетная запись'
  }

  constructor(props) {
    super(props);
    this.state = {
      editableMode: false,
      text: props.phoneNumber,
    }
  }

  renderFullname = (lastName, firstName, secondName) => <Text style={styles.nameStyle}>{lastName && lastName} {firstName && firstName} {secondName && secondName}</Text>
  renderLabel = (text) => <Text style={styles.label}>{text.toUpperCase()}</Text>
  onHandleEdit = () => {
    this.setState(prevState => ({editableMode : !prevState.editableMode}))
    this.state.editableMode && console.log('saved in server'); 
  }
  render () {
    const { userStatus, navigation, lastName, firstName, secondName, phoneNumber, role, email, id } = this.props;
    const { editableMode, text } = this.state;
    const studentIndex = role.findIndex(item => item.type === 'STUDENT');

    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <View style={styles.sectionStyle}>
            {/* <Image source={img_account} style={styles.imageStyle} /> */}
            <CustomIcon
              name={'account'}
              style={styles.imageStyle}
            />
            <View style={{flex: 1}}>
              {this.renderFullname(lastName, firstName, secondName)}
              <View style={styles.info}>
                {role.some(item => item['type'] === 'STUDENT') ?
                  role[studentIndex].details && role[studentIndex].details.length === 0 ?
                    <Text style={styles.errorText}>Пользователь не содержит данных</Text> :
                    <View>
                      <Text style={styles.textStyle}>Факультет: {role[studentIndex].details[0].plan.faculty.name}</Text>
                      <Text style={styles.textStyle}>Направление: {role[studentIndex].details[0].plan.speciality.name}</Text>
                      <Text style={styles.textStyle}>Группа: {role[studentIndex].details[0].group.name}</Text>
                    </View> : <Text/>}
              </View>
              {this.renderLabel('Телефон')}
              {editableMode ?
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(text) => this.setState({text})}
                  value={text} />:
                <Text style={phoneNumber ? styles.textStyle : styles.errorText}>{text ? text : 'Номер отсутствует'}</Text>}
              {this.renderLabel('E-mail')}
              {email && <Text style={styles.textStyle}>{email}</Text>}
            </View>
          </View>
          <View style={styles.buttonSection}>
              {editableMode && <Button light style={[styles.buttonStyle, styles.cancelStyle]}>
                <Icon type='MaterialCommunityIcons' name='cancel' style={styles.iconStyle} />
              </Button>}
              <Button light style={[styles.buttonStyle, styles.editStyle]} onPress={this.onHandleEdit}>
                <Icon type='MaterialCommunityIcons' name={editableMode ? 'check' : 'pencil'} style={styles.iconStyle} />
              </Button>
          </View>
        </View>
        <FooterSection
          userStatus = {userStatus}
          navigate={navigation.navigate}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
