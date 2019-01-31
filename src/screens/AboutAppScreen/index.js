import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import {
  Dimensions,
  StatusBar,
  Image,
  Linking,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {
  Content,
  Item,
  ListItem,
  Icon,
  Input,
  CheckBox,
  Text,
  Body,
  Button,
  Header,
  Right,
  Left,
  Title,
  Toast,
} from 'native-base';

import { login } from '../../actions/authorizationAction';
import { LoginForm } from '../../components/Forms';

import { MainView } from '../../components/Views/MainView';
import FooterSection from '../../components/Footer';
import { img_logo_notext } from '../../assets/images';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class AboutAppScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      values: {
      }
    }
  }

  static navigationOptions = {
    headerTitle: 'О приложении',
  };

  render(){
    const { authLoading, errorMessage, userStatus, navigation } = this.props;
    return (
      <MainView>
        <StatusBar />
        <KeyboardAvoidingView>
          <View style={styles.content}>
            <View style={styles.section}>
              <Image
                source={img_logo_notext}
                style={styles.imageStyle}
              />
            <Text style={styles.textStyle}>Версия 2.0.1, сборка 15</Text>
            <Text style={styles.linkStyle} onPress ={() => Linking.openURL('https://samgtu.ru/').catch(err => console.error('An error occurred', err))}>samgtu.ru</Text>
            </View>
          </View>
          <FooterSection
            userStatus = {userStatus}
            navigate={navigation.navigate}
          />
        </KeyboardAvoidingView>
      </MainView>
    )
  }
}

export default AboutAppScreen;
