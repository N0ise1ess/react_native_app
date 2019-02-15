import { Text } from 'native-base';
import React, { Component, Fragment } from 'react';
import { Image, KeyboardAvoidingView, Linking, StatusBar, View } from 'react-native';

import { img_logo_notext } from '../../assets/images';
import ButtonBack from '../../components/ButtonBack';
import FooterSection from '../../components/Footer';
import { MainView } from '../../components/Views/MainView';
import styles from './styles';
import DeviceInfo from 'react-native-device-info';

class AboutAppScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
    };
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'О приложении',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  render() {
    const { authLoading, errorMessage, userStatus, navigation } = this.props;
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

export default AboutAppScreen;
