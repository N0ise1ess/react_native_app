import React from 'react';
import { connect } from 'react-redux';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Text, Button, Card } from 'native-base';
class InnerComponent extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Анкетные опросы',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      isFinished: false,
    };
    alert(props.navigation.getParam('itemId'))
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  renderAnswerQuestions = (styles) => (
    <React.Fragment>
      <View style={styles.text_margin}>
        <Text style={[styles.text, styles.text__normal, styles.text__blue, styles.padding_top_20]}>Вопрос 1 из 1</Text>
        <Text style={[styles.text, styles.text__normal, styles.text__bold, styles.padding_top_10]}>Lorem bla bla bla bla bla bla bla bla bla bla bla bla</Text>
        <Text style={[styles.text, styles.text__small, styles.text__gray, styles.padding_top_10]}>{'Варианты ответов'.toUpperCase()}</Text>
      </View>
      <ScrollView style={styles.padding_top_10}>
        {new Array(1, 2, 3, 4, 5,).map((item, index) => <TouchableOpacity key={index}>
          <Card style={[styles.item_answer, styles.text_margin]}>
            <Text style={[styles.text, styles.text__normal, styles.text__bold]}>{item}</Text>
          </Card>
        </TouchableOpacity>)}
      </ScrollView>
    </React.Fragment>
  );

  renderThankyouPage = (styles) => (
    <React.Fragment>
      <View style={[styles.text_margin, styles.full_container]}>
        <Text style={[styles.text, styles.text__normal, styles.text__blue, styles.padding_top_20]}>Опрос пройден</Text>
        <Text style={[styles.text, styles.text__normal, styles.text__bold, styles.padding_top_10]}>Спасибо за участие!{"\n"}Ваши ответы учтены.</Text>
      </View>
    </React.Fragment>
  )

  render() {

    const { styles, isFinished } = this.state;
    const { userStatus, navigation } = this.props;
    return (
      <Container style={styles.container}>
        {isFinished ? this.renderThankyouPage(styles) : this.renderAnswerQuestions(styles)}
        <View style={[styles.button_container, styles.button_container__right, styles.padding_10, styles.margin_left__12]}>
          <Button rounded style={[styles.button]}>
            <Text>Готово</Text>
          </Button>
        </View>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

export const QuestionnairesStep = connect(mapStateToProps, {})(InnerComponent);
