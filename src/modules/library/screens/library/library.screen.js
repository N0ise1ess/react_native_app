import { Container, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, ScrollView, Linking } from 'react-native';
import {Navigation} from 'react-native-navigation';
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
import { FooterSection } from '../../../shared/components';
import { styles } from './styles';

const itemList = [
  {
    title: 'Поиск книг',
    route: 'LibrarySearch',
    image: img_search,
  },
  {
    title: 'Избранное',
    image: img_star,
    route: 'LibraryFavourite'
  },
  {
    title: 'Коллекции',
    image: img_collection,
    route: 'LibraryCollections'
  },
  {
    title: 'Список книг',
    image: img_list,
  },
  {
    title: 'Услуги',
    route: 'Services',
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
    link: 'https://elib.samgtu.ru/',
    image: img_link,
  },
];

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Библиотека',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  onListItemClick = (item) => {
    if (item.route) {
      Navigation.push(this.props.componentId, {
        component: {
          name: item.route,
        }
      })
    }
    if (item.link) {
      Linking.openURL(item.link).catch(err => console.error('An error occurred', err));
    }
  }

  render() {
    const { userStatus } = this.props;
    const { styles } = this.state;
    return (
      <Container style={styles.container}>
        <ScrollView>
          <List
            scrollEnabled={false}
            style={styles.listStyle}
            dataArray={itemList}
            renderRow={item => (
              <ListItem
                button
                onPress={() => this.onListItemClick(item)}
                style={styles.listItemStyle}
              >
                <Image source={item.image} style={styles.iconStyle} />
                <Text style={styles.textStyle}>{item.title}</Text>
              </ListItem>
            )}
          />
        </ScrollView>
        <FooterSection {...this.props}/>
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

export const LibraryScreen = connect(
  mapStateToProps,
  null,
)(InnerComponent);
