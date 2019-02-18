import { Container, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import {
  img_collection,
  img_link,
  img_list,
  img_membership,
  img_notification,
  img_search,
  img_services,
  img_star,
} from '../../../../assets/images';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';

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
    title: 'Коллекции',
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
  },
];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Библиотека',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userStatus, navigation } = this.props;
    return (
      <Container style={styles.container}>
        <List
          scrollEnabled={false}
          style={styles.listStyle}
          dataArray={itemList}
          renderRow={item => (
            <ListItem
              button
              onPress={() => this.props.navigation.navigate(item.route ? item.route : '')}
              style={styles.listItemStyle}
            >
              <Image source={item.image} style={styles.iconStyle} />
              <Text style={styles.textStyle}>{item.title}</Text>
            </ListItem>
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
  };
};

export const LibraryScreen = connect(
  mapStateToProps,
  null,
)(InnerComponent);
