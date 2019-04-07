import { Button, Container, Content, Picker, Spinner, Text } from 'native-base';
import React, { Component } from 'react';
import { Clipboard, View } from 'react-native';
import { connect } from 'react-redux';

import { CustomIcon, CustomSnackbar, fontSettings, FooterSection, getSizeFonts } from '../../../shared';
import * as action from '../../store/wifi-actions';
import { styles } from './styles';

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Доступ к Wi-Fi',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: 'key0',
      wifiPass: '',
      isShowedPassword: false,
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getWifi(this.props.token);
  }

  renderPicker = () => {
    return (
      <View style={this.state.styles.picker}>
        {Array.isArray(this.props.dataWifi) ? (
          <React.Fragment>
            <CustomIcon name={'wifi'} style={this.state.styles.pickerIcon} />
            <Picker
              mode="dropdown"
              style={this.state.styles.pickerShadow}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange}
            >
              {this.props.dataWifi.map((item) => (
                <Picker.Item label={item.name} value={item.password} />
              ))}
            </Picker>
          </React.Fragment>
        ) : (
          this.props.dataWifi && <Text style={this.state.styles.pickerShadow}>{this.props.dataWifi.name}</Text>
        )}
      </View>
    );
  };

  onValueChange = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { isLoadingWifi, dataWifi } = this.props;
    const { styles, selected, isShowedPassword } = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <View style={styles.dataSection}>
              <View style={styles.dummy} />
              <Text style={styles.title}>Для подключения к сети Wi-Fi университета:</Text>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.stepText}>1)</Text>
              <Text style={styles.dataText}>Найдите одну из следующих доступных сетей:</Text>
            </View>
            <View style={styles.dataSection}>
              <View style={styles.dummy} />
              {isLoadingWifi ? <Spinner color="blue" /> : this.renderPicker()}
            </View>
            <View style={[styles.dataSection, { paddingBottom: 0 }]}>
              <Text style={styles.stepText}>2)</Text>
              <Text style={[styles.dataText, { marginTop: 0 }]}>Сгенерируйте пароль для данной сети:</Text>
            </View>
            <View style={styles.dataSection}>
              <View style={styles.dummy} />
              <Button
                onPress={() => this.setState({ isShowedPassword: true })}
                disabled={selected && Array.isArray(this.props.dataWifi)}
                full
                rounded
                style={
                  !(selected && Array.isArray(this.props.dataWifi))
                    ? styles.activeButtonStyle
                    : styles.inactiveButtonStyle
                }
              >
                <Text
                  allowFontScaling={false}
                  style={{ fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, this.props.fontSize) }}
                >
                  Сгенерировать пароль
                </Text>
              </Button>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.stepText}>3)</Text>
              <Text style={styles.dataText}>Введите пароль в соответсвующее поле "Пароль" при подключении к сети.</Text>
            </View>
            {isShowedPassword && ((Array.isArray(dataWifi) && selected) || dataWifi.password) ? (
              <View style={styles.dataSection}>
                <View style={styles.dummy} />
                <View style={styles.card}>
                  <View style={styles.cardPassText}>
                    <Text
                      style={{
                        color: 'grey',
                        marginTop: 5,
                        fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, this.props.fontSize),
                      }}
                    >
                      Ваш пароль:
                    </Text>
                    <Text
                      style={{
                        color: 'grey',
                        marginBottom: 5,
                        fontSize: getSizeFonts(fontSettings.FONT_SIZE_26, this.props.fontSize),
                      }}
                    >
                      {Array.isArray(dataWifi) ? selected : dataWifi.password}
                    </Text>
                  </View>
                  <Button onPress={this.copyPass} full rounded style={styles.copyPassBtn}>
                    <Text style={{ fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, this.props.fontSize) }}>
                      Скопировать пароль
                    </Text>
                  </Button>
                </View>
              </View>
            ) : null}
          </View>
        </Content>
        <FooterSection {...this.props} />
      </Container>
    );
  }

  copyPass = async () => {
    let password = Array.isArray(this.props.dataWifi) ? this.state.selected : this.props.dataWifi.password;
    await Clipboard.setString(password);
    CustomSnackbar.show({
      title: 'Скопировано в буфер обмена',
    });
  };

  generatePassword = () => {
    const chars = ['1', '2', '3', '4', '5', '6', '7', 'a', 'B', 'w', 'e', 'i', 'p', 'Y'];
    let pass = '';
    while (pass.length !== 5) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    this.setState({ wifiPass: pass });
  };
}

const mapStateToProps = (state) => ({
  ...state.authReducer,
  ...state.settings,
  ...state.wifi,
});

export const WifiAccessScreen = connect(
  mapStateToProps,
  { ...action },
)(InnerComponent);
