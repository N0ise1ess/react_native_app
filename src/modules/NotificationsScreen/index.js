import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/authorizationAction';
import { ButtonBack, FooterSection } from '../shared/components';
import styles from './styles';

const itemList = [
  {
    date: '21 сентября 2018 20:00',
    title: 'Информационная встреча с ректором университета, часть 3',
    place: '512 ауд., корпус 6',
  },
];

class NotificationsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Уведомления',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  onAuthHandle = () => {
    if (this.props.token) {
      this.props.logout();
      this.props.navigation.navigate('Login');
    } else {
      this.props.navigation.navigate('Login');
    }
  };

  render() {
    const { userStatus, navigation } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          {userStatus !== 'guest' && (
            <List
              style={styles.listStyle}
              dataArray={itemList}
              renderRow={item => (
                <ListItem style={styles.listItemStyle}>
                  <Text style={styles.dateStyle}>{item.date}</Text>
                  <Text style={styles.titleStyle}>{item.title}</Text>
                  <Text style={styles.textStyle}>{item.place}</Text>
                </ListItem>
              )}
            />
          )}
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
)(NotificationsScreen);
