import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Icon,
  Header,
  Left,
  Right,
  Button,
  Body,
  Title,
} from 'native-base';
import ImageSlider from 'react-native-image-slider';
import CardItem from '../../components/CardItem';
import FooterSection from '../../components/Footer';
import styles from './styles';

import {
  img_rb,
  img_finance,
  img_chat,
  img_news,
  img_library,
  img_timetable,
  img_question,
  img_rating,
  img_person,
  img_parent,
  img_wifi,
  img_marker,
  img_student,
  img_account
} from '../../assets/images';

const cardList = [
  {
    list: [
      {
        title: 'Зачетная\nкнижка',
        image: img_rb,
      },
      {
        title: 'Новости',
        route: 'News',
        image: img_news,
      },
      {
        title: 'Финансы',
        route: 'Finance',
        image: img_finance,
      },
      {
        title: 'Чат',
        route: 'Chat',
        image: img_chat,
      },
      {
        title: 'Расписание',
        route: 'TimeTable',
        image: img_timetable,
      },
      {
        title: 'Библиотека',
        route: 'Library',
        image: img_library,
      },
    ]
  },
  {
    list: [
      {
        title: 'Анкетные\nопросы',
        route: 'Questionnaires',
        image: img_question,
      },
      {
        title: 'Персональный\nрейтинг',
        route: 'PersonalRating',
        image: img_rating,
      },
      {
        title: 'Родители',
        route: 'Parents',
        image: img_parent,
      },
      {
        title: 'Персоналии',
        route: 'Personalities',
        image: img_person,
      },
      {
        title: 'Контакты\nуниверситета',
        route: 'Contacts',
        image: img_marker,
      },
      {
        title: 'Доступ к Wi-Fi',
        image: img_wifi,
      },
    ]
  }
];

const cardGuestList = [
  {
    list: [
      {
        title: 'Новости',
        route: 'News',
        image: img_news,
      },
      {
        title: 'Расписание',
        route: 'TimeTable',
        image: img_timetable,
      },
      {
        title: 'Библиотека',
        route: 'Library',
        image: img_library,
      },
      {
        title: 'Персоналии',
        route: 'Personalities',
        image: img_person,
      },
      {
        title: 'Контакты\nуниверситета',
        route: 'Contacts',
        image: img_marker,
      },
      {
        hidden: true
      }
    ]
  },
];

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {

    return {
      title: navigation.state.params && navigation.state.params.userFullName,
      headerLeft: <Left>
        {navigation.state.params && navigation.state.params.userStatus === 'student' ?
          <Image style={styles.headerImageStyle} source={img_student} /> :
          <Image style={[styles.headerImageStyle, { marginLeft: 10 }]} source={img_account} />}
      </Left>
    }
  };

  componentWillMount() {
    const {firstName, secondName, lastName, userStatus } = this.props;
    this.props.navigation.setParams({
      userFullName: lastName || firstName || secondName ? `${lastName} ${firstName} ${secondName}` : 'Гость',
      userStatus: userStatus
    })
  }



  render(){
    const { navigation, userStatus } = this.props;
    return (
      <Container style={styles.container}>
        <ImageSlider
          images={userStatus === 'guest' ? cardGuestList : cardList}
          customSlide={({ index, item, style, width }) => (
          // It's important to put style here because it's got offset inside
            <View key={index} style={[style, styles.customSlide]}>
              <View style={styles.flatListStyle}>
                {item.list.map((item, index) =>
                  <CardItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    navigate={() => this.props.navigation.navigate(item.route ? item.route : '')}
                  />
                )}
              </View>
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {userStatus === 'guest'  ? <Text/> :
              cardList.map((image, index) => <Icon
                style={[{ color: '#163D7D' }, position === index && styles.buttonSelected]}
                key={index}
                onPress={() => move(index)}
                type='Octicons'
                name='primitive-dot'
              />)}
            </View>
          )}
        />
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

export default connect(mapStateToProps, null)(HomeScreen);
