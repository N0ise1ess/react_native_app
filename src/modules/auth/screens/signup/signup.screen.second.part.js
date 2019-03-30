import React, {Component} from "react";
import {connect} from 'react-redux';
import {styles} from './styles';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Container,Button, Content, Form, Spinner, Text} from "native-base";
import {SignUpFirstPart, SignUpSecondPart} from "../../components/signup";
import {ButtonBack} from "../../../shared/components/button-back";
import {FooterSection} from "../../../shared/components/footer";

class InnerComponent extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitleStyle: {
            paddingLeft: 0,
            marginLeft: 0,
            fontWeight: 'normal',
        },
        title: 'Регистрация (2 из 3)',
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
                        <SignUpSecondPart {...this.props}/>
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

export const SignUpScreenSecondPart = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerComponent);
