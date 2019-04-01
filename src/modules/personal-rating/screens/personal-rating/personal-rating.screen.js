import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Navigation} from 'react-native-navigation';

import { logout } from '../../../../actions/authorizationAction';
import { FooterSection } from '../../../shared/components';
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
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  render() {
    const { userStatus, token } = this.props;
    const {styles} = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <List
            style={styles.listStyle}
            dataArray={itemList}
            renderRow={item => (
              <ListItem button style={[styles.listItemStyle, item.last && styles.lastItemStyle]}>
                <Text style={[styles.textStyle, item.last && styles.lastTextStyle]}>{item.title}</Text>
                <Text style={[item.score > 0 && styles.scoreStyle, item.last && styles.lastTextStyle]}>
                  {item.score}
                </Text>
              </ListItem>
            )}
          />
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

export const PersonalRatingScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
