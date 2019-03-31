import React, {Component} from "react";
import {connect} from 'react-redux';
import {styles} from './styles';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {SignUpFirstForm, SignUpSecondForm, SignUpThirdForm} from "../../components/signup";
import {ButtonBack} from "../../../shared/components/button-back";
import {FooterSection} from "../../../shared/components/footer";
import {Tab, TabHeading, Tabs, Text} from "native-base";

class InnerComponent extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitleStyle: {
            paddingLeft: 0,
            marginLeft: 0,
            fontWeight: 'normal',
        },
        title: `Регистрация (${navigation.getParam("step") || '1'} из 3)`,
        headerLeft: <ButtonBack onPress={() => navigation.navigate('Auth')}/>,
    });

    constructor(props) {
        super(props);
        this.state = {
            styles: styles(props.fontSize),
            currentTab: 0
        };
        this.handleSwitchTab = this.handleSwitchTab.bind(this)
    }

    componentDidUpdate(props) {
        this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
    }

    componentDidMount() {
        this.props.navigation.setParams({ step: 1 });
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
                        <Tabs initialPage={0}
                              locked={true}
                              page={this.state.currentTab}
                              renderTabBar={(() => <View style={{height: 0}}/>)}
                              tabContainerStyle={{ elevation: 0}}
                              tabBarUnderlineStyle={{ backgroundColor: 'transparent'}}>
                            <Tab heading={<Text/>}>
                                <SignUpFirstForm {...this.props} handleSwitchTab={this.handleSwitchTab}/>
                            </Tab>
                            <Tab heading={<Text/>}>
                                <SignUpSecondForm {...this.props} handleSwitchTab={this.handleSwitchTab}/>
                            </Tab>
                            <Tab heading={<Text/>}>
                                <SignUpThirdForm {...this.props} handleSwitchTab={this.handleSwitchTab}/>
                            </Tab>
                        </Tabs>
                    </ScrollView>
                </KeyboardAvoidingView>
                <FooterSection userStatus={userStatus} navigate={navigation.navigate}/>
            </View>
        )

    }

    handleSwitchTab(value) {
        this.setState({currentTab: value})
        this.props.navigation.setParams({ step : value + 1})
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
