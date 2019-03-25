import React, {Component} from "react";
import {ButtonBack} from "../../../shared/components";
import {connect} from 'react-redux';
import { styles } from './styles';
import {View} from 'react-native';
import {Button, Container, Content, Text} from "native-base";
import {getSizeFonts} from "../../../shared/functions/styles";
import * as settingsFonts from "../../../../constants/styles";
import {FooterSection} from "../../../shared/components/footer/index";

class InnerComponent extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitleStyle: {
      paddingLeft: 0,
      marginLeft: 0,
      // fontSize: getSizeFonts(settingsFonts.FONT_SIZE_16, this.props.fontSize),
      fontWeight: 'normal',
    },
    title: 'Регистрация',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()}/>,
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

  onValueChange = key => {
    this.setState({selected: key})
  }

  render() {
    const {userStatus, navigation, token} = this.props;
    const {styles} = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <View style={styles.dataSection}>
              <View style={styles.dummy}/>
              <Text style={styles.title}>Для подключения к сети Wi-Fi университета:</Text>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.stepText}>1)</Text>
              <Text style={styles.dataText}>Найдите одну из следующих доступных сетей:</Text>
            </View>
            <View style={[styles.dataSection, {paddingBottom: 0}]}>
              <Text style={styles.stepText}>2)</Text>
              <Text style={[styles.dataText, {marginTop: 0}]}>Сгенерируйте пароль для данной сети:</Text>
            </View>
            <View style={styles.dataSection}>
              <View style={styles.dummy}/>

            </View>
            <View style={styles.dataSection}>
              <Text style={styles.stepText}>3)</Text>
              <Text style={styles.dataText}>Введите пароль в соответсвующее поле "Пароль"
                при подключении к сети.
              </Text>
            </View>
          </View>
        </Content>
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

export const SignUpScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
