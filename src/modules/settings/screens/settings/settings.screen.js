import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../../../actions/authorizationAction';
import { ButtonBack, FooterSection, CustomIcon } from '../../../shared/components';
import { styles } from './styles';

const itemList = [
  {
    title: 'Уведомления',
    image: 'notification_2',
  },
  {
    title: 'Учетная запись',
    route: 'Account',
    image: 'account_2',
  },
  {
    title: 'Основные',
    route: 'MainConfig',
    image: 'settings',
  },
  {
    title: 'О приложении',
    route: 'About',
    image: 'info_3',
  },
  {
    title: 'Выход из учетной записи',
    route: 'Login',
    image: 'exit',
    image2: 'entry',
  },
];

const itemGuestList = [
  {
    title: 'Уведомления',
    image: 'notification_2',
  },
  {
    title: 'Основные',
    route: 'MainConfig',
    image: 'settings',
  },
  {
    title: 'О приложении',
    route: 'About',
    image: 'info_3',
  },
  {
    title: 'Выход из учетной записи',
    route: 'Login',
    image: 'exit',
    image2: 'entry',
  },
];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Настройки',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
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
    const {styles} = this.state;
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
                <CustomIcon 
                  style={styles.iconStyle}
                  name={item.route === 'Login' ? (token ? item.image : item.image2) : item.image}
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
    ...state.settings,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  dispatch,
});

export const SettingsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
