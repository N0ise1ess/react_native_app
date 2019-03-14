import { Container, Content, Icon, List, Text, Spinner } from 'native-base';
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/questionnairesAction';

import { ButtonBack, FooterSection, CustomIcon } from '../../../shared/components';
import { styles } from './styles';

const itemList = [
  {
    title: 'Оценка качества оказания образовательных услуг',
    desc: '1 вопрос',
    passed: false,
  },
  {
    title: 'День здоровья',
    desc: '40 вопросов - 4 минуты',
    score: 0,
    passed: false,
  },
  {
    title: 'ЭКБ',
    desc: '20 вопросов - 2 минуты',
    score: 62,
    passed: true,
  },
  {
    title: 'Профориентация',
    desc: '20 вопросов - 2 минуты',
    score: 0,
    passed: true,
  },
];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Анкетные опросы',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  componentDidMount() {
    this.props.getAllQuestionnaires(this.props.token);
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  handleClickQuestionnaire = (id) => {
    this.props.navigation.navigate('QuestionnairesStep', {
      itemId: id,
    });
  }

  render() {
    const { userStatus, navigation, listQuestionnaires } = this.props;
    const {styles} = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          {listQuestionnaires ? <List
            dataArray={listQuestionnaires}
            renderRow={item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => this.handleClickQuestionnaire(item.id)}
                style={[styles.listStyle, item.passed && styles.opacityStyle]}>
                <View style={styles.listItemStyle}>
                 {item.passed ? <CustomIcon style={styles.icon} name="ok"/> : <View style={styles.octions}/>}
                  <Text style={styles.bookTitle}>{item.value}</Text>
                </View>
                <Text style={styles.bookAuthor}>
                  ~{item.minutes}
                </Text>
              </TouchableOpacity>
            )}
          /> : <Spinner/>}
          
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.questionnaires,
    ...state.authReducer,
    ...state.settings,
  };
};

// const mapDispatchToProps = dispatch => ({
//   getQuestionnaire: () => dispatch(getQuestionnaire()),
//   dispatch,
// });

export const QuestionnairesScreen = connect(
  mapStateToProps,
  {...actions},
)(InnerComponent);
