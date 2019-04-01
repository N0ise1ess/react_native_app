import React from 'react';
import { connect } from 'react-redux';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import {Navigation} from 'react-native-navigation';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Text, Button, Card, Spinner } from 'native-base';
import * as actions from '../../../../actions/questionnairesAction';

class InnerComponent extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('itemTitle'),
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  static options({dataQuestionnaire}) {
    return {
      topBar: {
        title: {
          text: dataQuestionnaire.itemTitle,
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      isFinished: false,
      step: 1,
      selectedAnswers: [],
    };
    props.getQuestionnaires(props.dataQuestionnaire.itemId, props.token)
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  renderAnswerQuestions = (styles) => {
    const selectedAnswer = this.state.selectedAnswers[this.state.step - 1]
    return (
    <React.Fragment>
      <View style={styles.text_margin}>
        <Text style={[styles.text, styles.text__normal, styles.text__blue, styles.padding_top_20]}>
          Вопрос {this.state.step} 
          из {this.props.questionnaires.questions && this.props.questionnaires.questions.length}
        </Text>
        <Text style={[styles.text, styles.text__normal, styles.text__bold, styles.padding_top_10]}>
          {this.props.questionnaires.questions[this.state.step - 1].value}
        </Text>
        <Text style={[styles.text, styles.text__small, styles.text__gray, styles.padding_top_10]}>
          {'Варианты ответов'.toUpperCase()}
        </Text>
      </View>
      <ScrollView style={styles.padding_top_10}>
        {this.props.questionnaires.questions[this.state.step - 1].answers.map(
          (item, index) => <TouchableOpacity key={index} onPress={() => {
            const selectedAnswers = this.state.selectedAnswers;
            selectedAnswers[this.state.step - 1] = item.id;
            this.setState({selectedAnswers})}
          }>
            <Card style={[styles.item_answer, 
              item.id === selectedAnswer && styles.item_answer__active,
              styles.text_margin]}
            >
              <Text style={[styles.text, 
                item.id === selectedAnswer && styles.text__white, 
                styles.text__normal, styles.text__bold]}>
                {item.value}
              </Text>
            </Card>
          </TouchableOpacity>)}
      </ScrollView>
    </React.Fragment>
  )};

  renderThankyouPage = (styles) => (
    <React.Fragment>
      <View style={[styles.text_margin, styles.full_container]}>
        <Text style={[styles.text, styles.text__normal, styles.text__blue, styles.padding_top_20]}>Опрос пройден</Text>
        <Text style={[styles.text, styles.text__normal, styles.text__bold, styles.padding_top_10]}>
          Спасибо за участие!{"\n"}Ваши ответы учтены.
        </Text>
      </View>
    </React.Fragment>
  )

  handlePressButton = () => {  
    this.state.isFinished && Navigation.pop(this.props.componentId);
    this.state.isFinished && Navigation.push(this.props.componentId, {
      component: {
        name: 'Questionnaires',
      }
    });
    if (this.props.questionnaires && this.state.step === this.props.questionnaires.questions.length) {
      this.props.saveAnswers({
        isFull: true,
        // questionnaireId: this.props.navigation.getParam('itemId'),
        answerLinks: this.state.selectedAnswers.map((id) => ({"answerId": id})),
      }, this.props.token)
      this.setState({ isFinished: true })
    } else {
      this.setState({ step: this.state.step + 1, })
    };
  }

  render() {

    const { styles, isFinished, selectedAnswers, step } = this.state;
    const { userStatus, questionnaires } = this.props;
    const isDisabledButton = !selectedAnswers[step - 1];

    return (
      <Container style={styles.container}>
        {questionnaires && Object.keys(questionnaires).length > 0 ? <React.Fragment>
          {isFinished ? this.renderThankyouPage(styles) : this.renderAnswerQuestions(styles)}
          <View style={[styles.button_container, 
            styles.button_container__right, styles.padding_10, 
            styles.margin_left__12]}
          >
            <Button rounded 
              style={[styles.button, 
                isDisabledButton && styles.button__disabled,
              ]} 
              onPress={this.handlePressButton}
              disabled={isDisabledButton}
            >
              <Text>Готово</Text>
            </Button>
          </View>
        </React.Fragment>
          : <View style={styles.full_container}><Spinner color="blue"/></View>}
        <FooterSection {...this.props}/>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
    ...state.questionnaires,
  };
};

export const QuestionnairesStep = connect(mapStateToProps, { ...actions })(InnerComponent);
