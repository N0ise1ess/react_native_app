import React, {Component} from "react";
import {ButtonBack} from "../../../shared/components";
import {connect} from 'react-redux';
import {styles} from './styles';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Container,Button, Content, Form, Spinner, Text} from "native-base";
import {FooterSection} from "../../../shared/components/footer/index";
import {SignUp} from "../../components";

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Регистрация',
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

  onValueChange = key => {
    this.setState({selected: key})
  }

  render() {
    const {userStatus, navigation, token} = this.props;
    const {styles} = this.state;
    return (
      <Container style={styles.container}>
        <KeyboardAvoidingView>
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={'handled'}>
            <SignUp/>
          </ScrollView>
        </KeyboardAvoidingView>
        <FooterSection {...this.props}/>
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
