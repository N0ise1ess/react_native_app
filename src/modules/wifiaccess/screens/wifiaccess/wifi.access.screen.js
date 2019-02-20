import {Button, Container, Content, Icon, Picker, List, ListItem, Toast, Text, CardItem, Card} from 'native-base';
import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import {connect} from 'react-redux';
import {ButtonBack} from "../../../shared/components/button-back";
import {styles} from "./styles";
import {FooterSection} from "../../../shared/components/footer";
import {CustomIcon} from "../../../shared/components/custom-icon";


class InnerComponent extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitleStyle: {
      paddingLeft: 0,
      marginLeft: 0,
      fontSize: 16,
      fontWeight: 'normal',
    },
    title: 'Доступ к Wi-Fi',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()}/>,
  });

  constructor(props) {
    super(props);
    this.state = {
      selected: 'SSTU-main',
      wifiPass: ""
    };
  }

  renderPicker = () => {
    return (
      <View style={styles.picker}>
        <CustomIcon name={'wifi'} style={styles.pickerIcon}/>
        <Picker
          mode="dropdown"
          iosHeader="Wi-fi"
          iosIcon={<Icon name="arrow-dropdown-circle" style={{color: "#007aff", fontSize: 25}}/>}
          style={styles.pickerShadow}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange}
        >
          <Picker.Item label="SSTU-main" value="key0"/>
          <Picker.Item label='SSTU-main2' value="key1"/>
        </Picker>
      </View>
    )
  }

  onValueChange = text => {
    console.log(text)
  }

  render() {
    const {userStatus, navigation, token} = this.props;
    let wifiPassIsPresent = this.state.wifiPass.length > 0;
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <View style={styles.dataSection}>
              <View style={styles.dummy}/>
              <Text style={styles.title}>Для подключения к сети Wi-Fi университета:</Text>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.stepText}>1)</Text>
              <Text style={styles.dataText}>Найдите одну из следующих доступных сетей:</Text>
            </View>
            <View style={styles.dataSection}>
              <View style={styles.dummy}/>
              {this.renderPicker()}
            </View>
            <View style={[styles.dataSection, {paddingBottom: 0}]}>
              <Text style={styles.stepText}>2)</Text>
              <Text style={[styles.dataText, {marginTop: 0}]}>Сгенерируйте пароль для данной сети:</Text>
            </View>
            <View style={styles.dataSection}>
              <View style={styles.dummy}/>
              <Button onPress={this.generatePassword}
                      disabled={wifiPassIsPresent}
                      full rounded style={!wifiPassIsPresent ? styles.activeButtonStyle : styles.inactiveButtonStyle}>
                <Text style={{fontSize: 12}}>Сгенерировать пароль</Text>
              </Button>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.stepText}>3)</Text>
              <Text style={styles.dataText}>Введите пароль в соответсвующее поле "Пароль"
                при подключении к сети.
              </Text>
            </View>
            {wifiPassIsPresent ?
              <View style={styles.dataSection}>
                <View style={styles.dummy}/>
                <View style={styles.card}>
                  <View style={styles.cardPassText}>
                    <Text style={{color: 'grey', fontSize: 12}}>Ваш пароль:</Text>
                    <Text style={{color: 'grey', fontSize: 25}}>{this.state.wifiPass}</Text>
                  </View>
                  <Button onPress={this.copyPass} full rounded style={styles.copyPassBtn}>
                    <Text style={{fontSize: 12}}>Скопировать пароль</Text>
                  </Button>
                </View>
              </View> : null}
          </View>
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate}/>
      </Container>
    )

  }

  copyPass = () => {
    Toast.show({
      text: "Скопированно в буфер обмена",
      buttonText: 'Ок',
      duration: 2000,
      type: 'warning',
    });
  }

  generatePassword = () => {
    const chars = ['1', '2', '3', '4', '5', '6', '7', 'a', 'B', 'w', 'e', 'i', 'p', 'Y'];
    let pass = '';
    while (pass.length !== 5) {
      pass += chars[Math.floor(Math.random() * chars.length)]
    }
    this.setState({wifiPass: pass})
  };
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export const WifiAccessScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
