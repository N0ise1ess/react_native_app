import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Text,
  Container,
  Content,
  List,
  ListItem,
  Icon,
  Spinner,
} from 'native-base';

import { logout } from '../../actions/authorizationAction';

import FooterSection from '../../components/Footer';

import {
  img_account,
  img_notification_white,
  img_about,
  img_logout,
  img_login,
  img_settings,
} from '../../assets/images';

import styles from './styles';

const itemList = [
  {
    title: 'Оценка качества оказания образовательных услуг',
    desc: '1 вопрос',
    passed: false,
  },
  {
    title: 'День здоровья',
    desc: '40 вопросов - 4 минуты',
    score: 0,
    passed: false,
  },
  {
    title: 'ЭКБ',
    desc: '20 вопросов - 2 минуты',
    score: 62,
    passed: true,
  },
  {
    title: 'Профориентация',
    desc: '20 вопросов - 2 минуты',
    score: 0,
    passed: true,
  },
]

class QuestionnairesScreen extends Component {
  static navigationOptions = {
    title: 'Анкетные опросы',
  };


  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { userStatus, navigation, token } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <List dataArray={itemList}
            renderRow={(item) =>
              <View style={[styles.listStyle, item.passed && styles.opacityStyle]}>
                <View style={styles.listItemStyle}>
                  {item.passed ? <Icon type='Octicons' name='check' style={{ color: '#163D7D', fontSize: 15, paddingRight: 7 }} /> :
                    <Icon type='Octicons' name='primitive-dot' style={{ color: 'red', fontSize: 22 }} />}
                  <Text style={styles.bookTitle} >{item.title}</Text>
                </View>
                <Text style={styles.bookAuthor}>{item.desc} {item.passed && 'Пройден 20.09.2018'}</Text>
              </View>
            }>
          </List>
        </Content>
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
  getQuestionnaire: () => dispatch(getQuestionnaire()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnairesScreen);
