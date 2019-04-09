import { Container, Content, List, ListItem, Spinner, Text } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRaitingUser } from '../../../auth/store/auth-actions';
import { FooterSection } from '../../../shared';
import { styles } from './styles';

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
];

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Персональный рейтинг',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  componentDidMount() {
    this.props.getRaitingUser(this.props.token);
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  getSumm = () => this.props.userRaiting.items.reduce((accumulator, item) => accumulator + parseFloat(item.value), 0);

  render() {
    const { styles } = this.state;
    const { userRaiting, isLoadingRaiting } = this.props;

    return (
      <Container style={styles.container}>
        <Content>
          {isLoadingRaiting ? (
            <Spinner />
          ) : (
            <React.Fragment>
              {userRaiting && userRaiting.items && (
                <List
                  style={styles.listStyle}
                  dataArray={userRaiting.items}
                  renderRow={(item) => (
                    <ListItem button style={[styles.listItemStyle, item.last && styles.lastItemStyle]}>
                      <Text style={[styles.textStyle, item.last && styles.lastTextStyle]}>{item.name}</Text>
                      <Text style={[item.score > 0 && styles.scoreStyle, item.last && styles.lastTextStyle]}>
                        {item.value}
                      </Text>
                    </ListItem>
                  )}
                />
              )}
              {userRaiting && userRaiting.items && (
                <ListItem button style={[styles.listItemStyle, styles.lastItemStyle]}>
                  <Text style={[styles.textStyle, styles.lastTextStyle]}>{'Всего баллов'}</Text>
                  <Text style={[styles.scoreStyle, styles.lastTextStyle]}>{this.getSumm()}</Text>
                </ListItem>
              )}
            </React.Fragment>
          )}
        </Content>
        <FooterSection {...this.props} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getRaitingUser: (token) => dispatch(getRaitingUser(token)),
  dispatch,
});

export const PersonalRatingScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
