import React, {Component} from "react";
import {ButtonBack} from "../../../shared/components";
import {connect} from 'react-redux';
import {styles} from './styles';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Container,Button, Content, Form, Spinner, Text} from "native-base";
import {FooterSection} from "../../../shared/components/footer/index";
import {SignUp} from "../../components";

class InnerComponent extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitleStyle: {
      paddingLeft: 0,
      marginLeft: 0,
      // fontSize: getSizeFonts(settingsFonts.FONT_SIZE_16, this.props.fontSize),
      fontWeight: 'normal',
    },
    title: 'Регистрация (3 из 3)',
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
        <KeyboardAvoidingView>
          <ScrollView contentContainerStyle={[styles.container, {marginTop: 10}]} keyboardShouldPersistTaps={'handled'}>
            <SignUp {...this.props}/>
          </ScrollView>
        </KeyboardAvoidingView>
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
