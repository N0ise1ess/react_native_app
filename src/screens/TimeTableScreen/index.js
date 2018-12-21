import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  Content,
  Container
} from 'native-base';

import FooterSection from '../../components/Footer';


class TimeTableScreen extends Component {
  static navigationOptions = {
    title: 'Расписание',
  };


  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { userStatus, navigation } = this.props;
    return (
      <Container>
        <Content>
          <Text>Расписание</Text>
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

export default connect(mapStateToProps, null)(TimeTableScreen);
