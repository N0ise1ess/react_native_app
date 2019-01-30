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

import styles from './styles/personalityStyle';

import FooterSection from '../../components/Footer';

import {
  img_teacher,
} from '../../assets/images';

class PersonalityScreen extends Component {
  static navigationOptions = {
    title: 'Персоналии'
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
            <View style={styles.imageStyle} />
            <Image source={{uri: 'https://i.imgur.com/Fy3Xj9j.png'}} style={styles.photoStyle} />
          </View>
          <View style={styles.sectionStyle}>
            <Image source={img_teacher} style={styles.imageStyle} />
            <View style={{flex: 1}}>
              <Text style={styles.nameStyle}>Иванов Иван Иванович</Text>
              <View style={styles.info}>
                <View>
                  <Text style={styles.textStyle}>Проректор</Text>
                  <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>Администрация</Text>
                </View>
              </View>
              <View style={styles.dataSection}>
                <View style={{flexDirection: 'column'}}>
                  {this.renderLabel('E-mail')}
                  <Text style={styles.dataStyle}>example@example.com</Text>
                </View>
                <Image source={img_teacher} style={styles.imageStyle} />
              </View>
              <View style={styles.dataSection}>
                <View style={{flexDirection: 'column'}}>
                  {this.renderLabel('Телефон')}
                  <Text style={styles.dataStyle}>+7 (979) 234-56-78</Text>
                </View>
                <Image source={img_teacher} style={styles.imageStyle} />
              </View>
              <View style={styles.dataSection}>
                <View style={{flexDirection: 'column'}}>
                  {this.renderLabel('Чат')}
                  <Text style={styles.dataStyle}>Написать в чат</Text>
                </View>
                <Image source={img_teacher} style={styles.imageStyle} />
              </View>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalityScreen);
