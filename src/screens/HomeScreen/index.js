import React, { Component } from 'react';
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
  img_student
} from '../../assets/images';

const cardList = [
  {
    list: [
      {
        title: 'Зачетная книжка',
        image: img_rb,
      },
      {
        title: 'Новости',
        image: img_news,
      },
      {
        title: 'Финансы',
        image: img_finance,
      },
      {
        title: 'Чат',
        image: img_chat,
      },
      {
        title: 'Расписание',
        image: img_timetable,
      },
      {
        title: 'Библиотека',
        image: img_library,
      },
    ]
  },
  {
    list: [
      {
        title: 'Анкетные опросы',
        image: img_question,
      },
      {
        title: 'Персональный рейтинг',
        image: img_rating,
      },
      {
        title: 'Родители',
        image: img_parent,
      },
      {
        title: 'Персоналии',
        image: img_person,
      },
      {
        title: 'Контакты университета',
        image: img_marker,
      },
      {
        title: 'Доступ к Wi-Fi',
        image: img_wifi,
      },
    ]
  }
];


class HomeScreen extends Component {
  static navigationOptions = {
    header: <Header style={styles.headerStyle}>
      <Left>
        <Image style={styles.headerImageStyle} source={img_student} />
      </Left>
      <Body>
        <Text style={{color: '#fff', width: '100%', fontSize: 12,}}>Иванов Иван Иванович</Text>
      </Body>
      <Right>
        <Button transparent>
          <Icon type='Feather' name='settings' style={{color: 'white'}} />
        </Button>
      </Right>
    </Header>
  };

  render(){
    return (
      <Container>
          <ImageSlider
            images={cardList}
            customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
              <View key={index} style={[style, styles.customSlide]}>
                <View key={index} style={styles.flatListStyle}>
                  {item.list.map(item =>
                    <CardItem image={item.image} title={item.title}/>
                  )}
                </View>
              </View>
            )}
            customButtons={(position, move) => (
            <View style={styles.buttons}>
              {cardList.map((image, index) => {
                return (
                  <View
                    style={styles.button}
                  >
                    <Icon onPress={() => move(index)} type='Octicons' name='primitive-dot' style={[{ color: '#163D7D' }, position === index && styles.buttonSelected]} />
                  </View>
                );
              })}
            </View>
          )}
        />
      </Container>
    )
  }
}

export default HomeScreen;
