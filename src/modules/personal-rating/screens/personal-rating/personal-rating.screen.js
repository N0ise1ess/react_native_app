import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../../../actions/authorizationAction';
import { ButtonBack, FooterSection } from '../../../shared/components';
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
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Персональный рейтинг',
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

  render() {
    const { userStatus, navigation, token } = this.props;
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

export const PersonalRatingScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
