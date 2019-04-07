import { Container, Content } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FooterSection } from '../../../shared';
import { News } from '../../components';

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Новости университета',
        },
      },
    };
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { userStatus } = this.props;
    return (
      <Container>
        <Content>
          <News {...this.props.dataNews} />
        </Content>
        <FooterSection {...this.props} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
  };
};

export const NewsDetailsScreen = connect(
  mapStateToProps,
  null,
)(InnerComponent);
