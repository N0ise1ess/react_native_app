import { Text } from 'native-base';
import React, { Component, Fragment } from 'react';
import { Image, KeyboardAvoidingView, Linking, StatusBar, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { img_logo_notext } from '../../../../assets/images';
import { MainView } from '../../../../components/Views/MainView';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/settingsAction';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'О приложении',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  render() {
    const { authLoading, errorMessage, userStatus, navigation } = this.props;
    const {styles} = this.state;
    return (
      <MainView>
        <StatusBar />
        <KeyboardAvoidingView>
          <View style={styles.content}>
            <View style={styles.section}>
              <Image source={img_logo_notext} style={styles.imageStyle} />
              <Text style={styles.textStyle}>
                Версия {DeviceInfo.getVersion()}, сборка {DeviceInfo.getBuildNumber()}
              </Text>
              <Text
                style={styles.linkStyle}
                onPress={() =>
                  Linking.openURL('https://samgtu.ru/').catch(err => console.error('An error occurred', err))
                }
              >
                samgtu.ru
              </Text>
            </View>
          </View>
          <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
        </KeyboardAvoidingView>
      </MainView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

export const AboutScreen = connect(mapStateToProps, actions)(About);