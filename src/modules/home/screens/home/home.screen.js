import { Container, Icon, Left, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import { connect } from 'react-redux';

import {
  img_account,
  img_chat,
  img_finance,
  img_library,
  img_marker,
  img_news,
  img_parent,
  img_person,
  img_question,
  img_rating,
  img_rb,
  img_student,
  img_timetable,
  img_wifi,
  img_reports,
} from '../../../../assets/images';
import { CardItem, FooterSection } from '../../../shared/components';
import { styles } from './styles';

const cardList = [
  {
    list: [
      {
        title: 'Зачетная\nкнижка',
        route: 'ScratchBook',
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
    ],
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
        route: "WifiAccess",
        image: img_wifi
      },
    ],
  },
  {
    list: [
      {
        title: 'Ведомости\nи отчеты',
        route: 'Reports',
        image: img_reports,
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
        hidden: true,
      },
    ],
  },
];

class InnerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    }
  }

  static navigationOptions = (props) => {
    return {
      title: props.navigation.state.params && props.navigation.state.params.userFullName,
      headerLeft: (
        <Left>
          {props.navigation.state.params && props.navigation.state.params.userStatus === 'student' ? (
            <Image style={{resizeMode: 'contain',height: 30,}} source={img_student} />
          ) : (
            <Image style={{resizeMode: 'contain',height: 30, marginLeft: 10 }} source={img_account} />
          )}
        </Left>
      ),
    };
  };

  componentWillMount() {
    const { firstName, secondName, lastName, userStatus } = this.props;
    this.props.navigation.setParams({
      userFullName: lastName || firstName || secondName ? `${lastName} ${firstName} ${secondName}` : 'Гость',
      userStatus: userStatus,
    });
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  render() {
    const { navigation, userStatus } = this.props;
    const {styles} = this.state;
    return (
      <Container style={styles.container}>
        <ImageSlider
          images={userStatus === 'guest' ? cardGuestList : cardList}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View key={index} style={[style, styles.customSlide]}>
              <View style={styles.flatListStyle}>
                {item.list.map((item, index) => (
                  <CardItem
                    key={index}
                    image={item.image}
                    title={<Text allowFontScaling={false} style={styles.text}>{item.title}</Text>}
                    navigate={() => this.props.navigation.navigate(item.route ? item.route : '')}
                  />
                ))}
              </View>
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {userStatus === 'guest' ? (
                <Text />
              ) : (
                cardList.map((image, index) => (
                  <View onPress={() => move(index)} key={index} style={[
                    {backgroundColor: '#163D7D',
                      bottom: 10,
                      width: 10, 
                      height: 10, 
                      borderRadius: 20, 
                      marginLeft: 5, 
                      marginRight: 5,}, 
                      position === index && styles.buttonSelected]
                  }/>
                ))
              )}
            </View>
          )}
        />
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

export const HomeScreen = connect(
  mapStateToProps,
  null,
)(InnerComponent);
