import { Container, Content } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ButtonBack, FooterSection } from '../../../shared/components';
import { News } from '../../components';

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Новости университета',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { userStatus, navigation } = this.props;
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Content>
          <News
            newsType={params.newsType}
            title={params.title}
            time={params.time}
            image={params.image}
            description={params.description}
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

export const NewsDetailsScreen = connect(
  mapStateToProps,
  null,
)(InnerComponent);
