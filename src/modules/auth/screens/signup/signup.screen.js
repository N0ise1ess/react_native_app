import React, { Component } from "react";
import { connect } from 'react-redux';
import { styles } from './styles';
import { KeyboardAvoidingView, ScrollView, View , BackHandler} from 'react-native';
import { SignUpFirstForm, SignUpSecondForm, SignUpThirdForm } from "../../components/signup";
import { FooterSection } from "../../../shared/components/footer";
import { Tab, Tabs, Text } from "native-base";
import {ButtonBack} from "../../../shared/components/button-back";
import {Navigation} from "react-native-navigation";

// text: `Регистрация (${passProps.getParam("step") || '1'} из 3)`,
//<ButtonBack onPress={passProps.getParam("customGoBack", () => { })}/>

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: `Регистрация`,
        }
    }
  }
}

  constructor(props) {
      super(props);
      this.state = {
          styles: styles(props.fontSize),
          currentTab: 0
      };
      this.handleSwitchTab = this.handleSwitchTab.bind(this)
      this._handleBackButtonClick = this._handleBackButtonClick.bind(this);
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

    componentDidMount() {
      // this.props.navigation.setParams({ customGoBack: this.handleBackArrow });
      // this.props.navigation.setParams({ step: 1 });
    }

  componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this._handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._handleBackButtonClick);
    }

    // handleBackArrow = () => {
    //   if (this.state.currentTab !== 0){
    //     this.setState(prevState => ({
    //       currentTab: prevState.currentTab - 1
    //     }));
    //     this.props.navigation.setParams({ step : this.state.currentTab + 1 })
    //   } else this.props.navigation.goBack();
    // };

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
            // this.props.navigation.setParams({ step : this.state.currentTab + 1})
        }
        return true;
    }

    onValueChange = key => {
        this.setState({selected: key})
    }

    render() {
      const {styles } = this.state;
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={'handled'}>
              <Tabs initialPage={0}
                locked={true}
                page={this.state.currentTab}
                renderTabBar={(() => <View style={styles.height0} />)}
                tabContainerStyle={styles.elevation0}
                tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}>
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
      )
  }

  handleSwitchTab(value) {
    this.setState({ currentTab: value })
    // this.props.navigation.setParams({ step: value + 1 })
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
