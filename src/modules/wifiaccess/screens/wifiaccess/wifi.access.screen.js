import {Button, Container, Content, Icon, Input, Item, List, ListItem, Spinner, Text} from 'native-base';
import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import {connect} from 'react-redux';
import {ButtonBack} from "../../../shared/components/button-back";
import {styles} from "./styles";
import {FooterSection} from "../../../shared/components/footer";
import {getDepartments} from "../../../../actions/contactsAction";

const {width, height} = Dimensions.get('window');

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
    this.state = {};
  }

  render() {
    const {userStatus, navigation, token} = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.section}>
            <View style={styles.dataSection}>
              <View style={styles.dummy}/>
              <Text style={styles.title}>Для подключения к сети Wi-Fi университета:</Text>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.stepText}>1)</Text>
              <Text style={styles.dataText}>Найдите одну из следующих доступных сетей:</Text>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.stepText}>2)</Text>
              <Text style={[styles.dataText, {marginTop: 0}]}>Сгенерируйте пароль для данной сети:</Text>
            </View>
            <View>
              <Button onPress={this.onHandleSubmit} full rounded style={[styles.buttonStyle, styles.dummy]}>
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
    const {searchedText} = this.state;
    this.props.getDepartments(searchedText);
  };
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  getDepartments: (searchedText) => dispatch(getDepartments(searchedText)),
  dispatch,
});

export const WifiAccessScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
