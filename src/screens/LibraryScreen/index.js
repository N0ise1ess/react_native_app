import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import FooterSection from '../../components/Footer';
import ButtonBack from '../../components/ButtonBack';

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
  }
]

class LibraryScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Библиотека',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()}/>,
  });


  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { userStatus, navigation } = this.props;
    return (
      <Container style={styles.container}>
        <List scrollEnabled={false} style={styles.listStyle} dataArray={itemList}
          renderRow={(item) =>
            <ListItem button onPress={() => this.props.navigation.navigate(item.route ? item.route : '')} style={styles.listItemStyle} >
              <Image source={item.image} style={styles.iconStyle} />
              <Text style={styles.textStyle}>{item.title}</Text>
            </ListItem>
          }>
        </List>
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

export default connect(mapStateToProps, null)(LibraryScreen);
