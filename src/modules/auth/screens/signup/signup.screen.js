import { Tab, Tabs, Text } from 'native-base';
import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';

import { FooterSection } from '../../../shared';
import { SignUpFirstForm, SignUpSecondForm, SignUpThirdForm } from '../../components/signup';
import { styles } from './styles';
import { KeyboardAvoidingView, ScrollView, View , BackHandler} from 'react-native';
import { SignUpFirstForm, SignUpSecondForm, SignUpThirdForm } from "../../components/signup";
import { FooterSection } from "../../../shared/components/footer";
import { Tab, Tabs, Text } from "native-base";
import {ButtonBack} from "../../../shared/components/button-back";

// text: `Регистрация (${passProps.getParam("step") || '1'} из 3)`,
//<ButtonBack onPress={passProps.getParam("customGoBack", () => { })}/>

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: `Регистрация`,
        },
        leftButtons: [],
      },
    };
  }
}

  constructor(props) {
      super(props);
      this.state = {
          styles: styles(props.fontSize),
          currentTab: 0
      };
      this.handleSwitchTab = this.handleSwitchTab.bind(this)
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => this._handleBackButtonClick());
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => this._handleBackButtonClick());
    }

    _handleBackButtonClick() {
        if (this.state.currentTab === 0) {
          Navigation.push(this.props.componentId, {
            component: {
              name: "Auth",
            }})
        } else {
            this.setState(prevState => ({
                currentTab: prevState.currentTab - 1
            }));
        }
        return true;
    }

  onValueChange = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { styles } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={'handled'}>
            <Tabs
              initialPage={0}
              locked={true}
              page={this.state.currentTab}
              renderTabBar={() => <View style={styles.height0} />}
              tabContainerStyle={styles.elevation0}
              tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}
            >
              <Tab heading={<Text />}>
                <SignUpFirstForm {...this.props} handleSwitchTab={this.handleSwitchTab} />
              </Tab>
              <Tab heading={<Text />}>
                <SignUpSecondForm {...this.props} handleSwitchTab={this.handleSwitchTab} />
              </Tab>
              <Tab heading={<Text />}>
                <SignUpThirdForm {...this.props} handleSwitchTab={this.handleSwitchTab} />
              </Tab>
            </Tabs>
          </ScrollView>
        </KeyboardAvoidingView>
        <FooterSection {...this.props} />
      </View>
    );
  }

  handleSwitchTab(value) {
    this.setState({ currentTab: value })
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.accountReducer,
    ...state.settings
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export const SignUpScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
