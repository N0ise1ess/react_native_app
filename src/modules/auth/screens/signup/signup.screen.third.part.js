import React, {Component} from "react";
import {ButtonBack} from "../../../shared/components";
import {connect} from 'react-redux';
import {styles} from './styles';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Container,Button, Content, Form, Spinner, Text} from "native-base";
import {FooterSection} from "../../../shared/components/footer/index";
import {SignUpThirdPart} from "../../components";

class InnerComponent extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitleStyle: {
      paddingLeft: 0,
      marginLeft: 0,
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
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={'handled'}>
            <SignUpThirdPart {...this.props}/>
          </ScrollView>
        </KeyboardAvoidingView>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate}/>
      </View>
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

export const SignUpScreenThirdPart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
