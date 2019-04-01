import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Navigation} from 'react-native-navigation';

import { logout } from '../../../../actions/authorizationAction';
import { FooterSection } from '../../../shared/components';
import { styles } from './styles';

const itemList = [
  {
    date: '21 сентября 2018 20:00',
    title: 'Информационная встреча с ректором университета, часть 3',
    place: '512 ауд., корпус 6',
  },
];

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Уведомления',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    }
  }

  onAuthHandle = () => {
    this.props.token && this.props.logout();
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Login',
      }
    })
  };

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  render() {
    const { userStatus } = this.props;
    const {styles} = this.state;
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
        <FooterSection {...this.props} />
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

export const NotificationsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
