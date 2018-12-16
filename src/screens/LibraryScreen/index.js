import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Text,
  Container,
  Content,
  List,
  ListItem,
} from 'native-base';

import {
  img_star,
  img_link,
  img_membership,
  img_notification,
  img_services,
  img_collection,
  img_list,
  img_search,
} from '../../assets/images';

import styles from './styles';

const itemList = [
  {
    title: 'Поиск книг',
    image: img_search,
  },
  {
    title: 'Избранное',
    image: img_star,
  },
  {
    title: 'Коллекция',
    image: img_collection,
  },
  {
    title: 'Список книг',
    image: img_list,
  },
  {
    title: 'Услуги',
    image: img_services,
  },
  {
    title: 'Читательский билет',
    route: 'LibraryCard',
    image: img_membership,
  },
  {
    title: 'Оповещения библиотеки',
    image: img_notification,
  },
  {
    title: 'Переход на сайт ЭБС',
    image: img_link,
  }
]

class LibraryScreen extends Component {
  static navigationOptions = {
    title: 'Библиотека',
  };


  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List style={styles.listStyle} dataArray={itemList}
            renderRow={(item) =>
              <ListItem button onPress={() => this.props.navigation.navigate(item.route)} style={styles.listItemStyle} >
                <Image source={item.image} style={styles.iconStyle} />
                <Text style={styles.textStyle}>{item.title}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    )
  }
}

export default LibraryScreen;
