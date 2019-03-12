import React from 'react';
import { connect } from 'react-redux';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import {View, TouchableOpacity, ScrollView} from 'react-native';
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
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  render() {
    
    const {styles} = this.state;
    const {userStatus, navigation} = this.props;
    return (
      <Container style={styles.container}>
        <View style={styles.text_margin}>
          <Text style={[styles.text, styles.text__normal, styles.text__blue, styles.padding_top_20]}>Вопрос 1 из 1</Text>
          <Text style={[styles.text, styles.text__normal, styles.text__bold, styles.padding_top_20]}>Lorem bla bla bla bla bla bla bla bla bla bla bla bla</Text>
          <Text style={[styles.text, styles.text__small, styles.text__gray, styles.padding_top_20 ]}>{'Варианты ответов'.toUpperCase()}</Text>
        </View>
        <ScrollView style={styles.padding_top_20}>
          {new Array(1, 2, 3, 4, 5).map((item, index) => <Card key={index} style={[styles.item_answer, styles.text_margin]}>
            <Text style={[styles.text, styles.text__normal, styles.text__bold]}>{item}</Text>
          </Card>)}
        </ScrollView>
        <Button rounded style={[styles.button, styles.padding_20]}>
          <Text>Готово</Text>
        </Button>
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
