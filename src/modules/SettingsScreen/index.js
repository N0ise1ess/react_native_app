import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { logout } from '../../actions/authorizationAction';
import {
  img_about,
  img_account,
  img_login,
  img_logout,
  img_notification_white,
  img_settings,
} from '../../assets/images';
import { ButtonBack, FooterSection } from '../shared/components';
import styles from './styles';

const itemList = [
  {
    title: 'Уведомления',
    image: img_notification_white,
  },
  {
    title: 'Учетная запись',
    route: 'Account',
    image: img_account,
  },
  {
    title: 'Основные',
    route: 'MainConfig',
    image: img_settings,
  },
  {
    title: 'О приложении',
    route: 'About',
    image: img_about,
  },
  {
    title: 'Выход из учетной записи',
    route: 'Login',
    image: img_logout,
    image2: img_login,
  },
];

const itemGuestList = [
  {
    title: 'Уведомления',
    image: img_notification_white,
  },
  {
    title: 'Основные',
    route: 'MainConfig',
    image: img_settings,
  },
  {
    title: 'О приложении',
    route: 'About',
    image: img_about,
  },
  {
    title: 'Выход из учетной записи',
    route: 'Login',
    image: img_logout,
    image2: img_login,
  },
];

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Настройки',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  onAuthHandle = () => {
    if (this.props.token) {
      this.props.logout();
      this.props.navigation.navigate('Login');
    } else {
      this.props.navigation.navigate('Login');
    }
  };

  render() {
    const { userStatus, navigation, token } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <List
            style={styles.listStyle}
            dataArray={userStatus === 'guest' ? itemGuestList : itemList}
            renderRow={item => (
              <ListItem
                button
                onPress={() =>
                  item.route === 'Login'
                    ? this.onAuthHandle()
                    : this.props.navigation.navigate(item.route ? item.route : '')
                }
                style={styles.listItemStyle}
              >
                <Image
                  source={item.route === 'Login' ? (token ? item.image : item.image2) : item.image}
                  style={styles.iconStyle}
                />
                <Text style={styles.textStyle}>
                  {item.route === 'Login' ? (token ? item.title : 'Войти в учетную запись') : item.title}
                </Text>
              </ListItem>
            )}
          />
        </Content>
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

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsScreen);
