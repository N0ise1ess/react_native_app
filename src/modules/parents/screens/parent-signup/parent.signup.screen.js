import { Tab, Tabs, Text } from 'native-base';
import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, View, BackHandler } from 'react-native';
import { connect } from 'react-redux';

import { FooterSection } from '../../../shared';
import { styles } from './styles';
import {Navigation} from "react-native-navigation";
import {ParentAddFormOne} from "../../components/parent-adder-component";

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: `Регистрация родителя (1 из 2)`,
        }
      },
    };
  }

  constructor(props) {
    super(props)
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
      Navigation.mergeOptions(this.props.componentId, {
        topBar: {
          title: {
            text: `Регистрация родителя (${this.state.currentTab + 1} из 2)`,
          },
        },
      });
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
                  <ParentAddFormOne {...this.props} handleSwitchTab={this.handleSwitchTab} />
                </Tab>
                <Tab heading={<Text />}>
                  <ParentAddFormOne {...this.props} handleSwitchTab={this.handleSwitchTab} />
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
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        title: {
          text: `Регистрация родителя (${value + 1} из 2)`,
        },
      },
    });
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

export const ParentSignupScreen = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerComponent);
