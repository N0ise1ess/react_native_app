import {Button, Container, Content, Icon, Picker, List, ListItem, Item, Text} from 'native-base';
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
      selected : 'SSTU-main'
    };
  }

  renderPicker = () => {
    return (
      <View style={styles.picker}>
        <CustomIcon name={'wifi'} style={styles.pickerIcon}/>
        <Picker
          mode="dropdown"
          iosHeader="Wi-fi"
          iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
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
              <Button onPress={this.onHandleSubmit} full rounded style={styles.buttonStyle}>
                <Text style={{fontSize: 12}}>Сгенерировать пароль</Text>
              </Button>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.stepText}>3)</Text>
              <Text style={styles.dataText}>Введите пароль в соответсвующее поле "Пароль"
                при подключении к сети.
              </Text>
            </View>
          </View>
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate}/>
      </Container>
    )

  }

  onHandleSubmit = () => {

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
