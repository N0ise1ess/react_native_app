import {Button, Container, Content, Text} from 'native-base';
import React, {Component} from 'react';
import { View, TextInput} from 'react-native';
import {connect} from 'react-redux';

import {styles} from "./styles";
import * as settingsFonts from '../../../../constants/styles';
import {getSizeFonts} from '../../../shared/functions/styles';
import { ButtonBack, FooterSection } from '../../../shared/components';


class InnerComponent extends Component {
  static navigationOptions = ({navigation, fontSize}) => ({
    headerTitleStyle: {
      paddingLeft: 0,
      marginLeft: 0,
      fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize)
    },
    title: 'Заявка на подбор литературы',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()}/>,
  });

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  onRequestReady = () => {
    // TODO connect to api
    this.props.navigation.goBack();
  }

  render() {
    const {styles} = this.state;
    const { userStatus, navigation } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <Text style={styles.title}>ВВЕДИТЕ КЛЮЧЕВЫЕ СЛОВА ИЛИ ЗАПРОС В СВОБОДНОЙ ФОРМЕ</Text>
            <TextInput
              style={styles.textarea}
              multiline={true}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
          </View>
        </Content>
        <View style={styles.actionButtons}>
          <Button onPress={() => navigation.goBack()}
              full rounded
              style={[styles.buttonStyle, styles.cancelButton]}>
              <Text allowFontScaling={false} style={{fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, this.props.fontSize)}}>ОТМЕНА</Text>
          </Button>
          <Button onPress={this.onRequestReady}
              full rounded
              style={[styles.buttonStyle, styles.readyButton]}>
              <Text allowFontScaling={false} style={{fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, this.props.fontSize)}}>ГОТОВО</Text>
          </Button>
        </View>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate}/>
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

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export const LiteratureRequestScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
