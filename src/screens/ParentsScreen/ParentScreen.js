import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {
  View,
  Image,
  TextInput
} from 'react-native';
import {
  Button,
  Icon,
  Container,
  Content,
  Text,
} from 'native-base';

import styles from './styles/parentStyle';

import FooterSection from '../../components/Footer';
import { ParentControlForm } from '../../components/Forms';

import {
  img_teacher,
  img_parent,
} from '../../assets/images';

class ParentScreen extends Component {
  static navigationOptions = {
    title: 'Родители'
  }

  constructor(props) {
    super(props);
    this.state = {
      editableMode: false,
    }
  }

  renderLabel = (text) => <Text style={styles.label}>{text.toUpperCase()}</Text>
  onHandleEdit = () => {
    this.setState(prevState => ({editableMode : !prevState.editableMode}))
    this.state.editableMode && console.log('saved in server');
  }
  render () {
    const { userStatus, navigation, lastName, firstName, secondName, phoneNumber, role, email, id } = this.props;
    const { editableMode, text } = this.state;

    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <View style={styles.sectionStyle}>
            <Image source={img_parent} style={styles.imageStyle} />
            <View style={{flex: 1}}>
              <Text style={styles.nameStyle}>Иванов Яков Самойлович</Text>
              <View style={styles.info}>
                <View>
                  <Text style={styles.textStyle}>Отец</Text>
                </View>
              </View>
              <View style={styles.dataSection}>
                {this.renderLabel('Учетные данные')}
                <Text style={styles.dataStyle}>Зарегистрирован 20.10.2018</Text>
                <Text style={styles.dataStyle}>Логин akjdaso</Text>
                <Text style={styles.dataStyle}>Email akjdaso@kleo.com</Text>
              </View>
              <View style={styles.dataSection}>
                {this.renderLabel('Доступ')}
                <ParentControlForm />
              </View>
            </View>
          </View>
          <Button rounded style={styles.buttonStyle}>
            <Text>Сохранить</Text>
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ParentScreen);
