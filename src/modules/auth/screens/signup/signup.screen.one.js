import React, {Component} from "react";
import {connect} from 'react-redux';
import {styles} from './styles';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {SignUpOne} from "../../components/signup";
import {ButtonBack} from "../../../shared/components/button-back";
import {FooterSection} from "../../../shared/components/footer";

class InnerComponent extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitleStyle: {
            paddingLeft: 0,
            marginLeft: 0,
            fontWeight: 'normal',
        },
        title: 'Регистрация (1 из 3)',
        headerLeft: <ButtonBack onPress={() => navigation.navigate('Auth')}/>,
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
                        <SignUpOne {...this.props}/>
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
      ...state.accountReducer,
      ...state.settings
    };
};

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export const SignUpScreenOne = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerComponent);
