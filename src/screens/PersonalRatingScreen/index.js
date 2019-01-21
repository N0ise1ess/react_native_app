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
  img_account,
  img_notification_white,
  img_about,
  img_logout,
  img_login,
  img_settings,
} from '../../assets/images';

import styles from './styles';

const itemList = [
  {
    title: 'Научно-исследовательская деятельность',
    score: 0,
  },
  {
    title: 'Общественная деятельность',
    score: 0,
  },
  {
    title: 'Спортивная деятельность',
    score: 62,
  },
  {
    title: 'Учебная деятельность',
    score: 0,
  },
  {
    title: 'Всего баллов',
    score: 62,
    last: true,
  },
]

class PersonalRatingScreen extends Component {
  static navigationOptions = {
    title: 'Персональный рейтинг',
  };


  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { userStatus, navigation, token } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <List style={styles.listStyle} dataArray={itemList}
            renderRow={(item) =>
              <ListItem
                button
                style={[styles.listItemStyle, item.last && styles.lastItemStyle]}
              >
                <Text style={[styles.textStyle, item.last && styles.lastTextStyle]}>{item.title}</Text>
                <Text style={[item.score > 0 && styles.scoreStyle, item.last && styles.lastTextStyle]}>{item.score}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalRatingScreen);
