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

import { logout } from '../../actions/authorizationAction';

import FooterSection from '../../components/Footer';

import {
  img_star,
  img_link,
  img_membership,
  img_notification,
  img_services,
  img_collection,
  img_list,
  img_search,
  img_logout,
} from '../../assets/images';

import styles from './styles';

const itemList = [
  {
    title: 'Уведомления',
    image: img_search,
  },
  {
    title: 'Учетная запись',
    image: img_star,
  },
  {
    title: 'Основные',
    image: img_collection,
  },
  {
    title: 'О приложении',
    image: img_list,
  },
  {
    title: 'Выход из учетной записи',
    route: 'Login',
    image: img_logout,
  },
]

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Настройки',
  };


  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onAuthHandle = () => {
    if(this.props.token) {
      this.props.logout();
      this.props.navigation.navigate('Login');
    } else {
      this.props.navigation.navigate('Login');
    }
  }


  render() {
    const { userStatus, navigation, token } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <List style={styles.listStyle} dataArray={itemList}
            renderRow={(item) =>
              <ListItem button onPress={() => item.route === 'Login' ? this.onAuthHandle() : this.props.navigation.navigate(item.route ? item.route : '')} style={styles.listItemStyle} >
                <Image source={item.image} style={styles.iconStyle} />
                <Text style={styles.textStyle}>{item.route === 'Login' ? (token ? item.title : 'Войти в учетную запись') : item.title}</Text>
              </ListItem>
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
  logout: () => dispatch(logout()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
