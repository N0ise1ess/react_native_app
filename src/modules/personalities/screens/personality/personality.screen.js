import { Button, Container, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import {CustomIcon} from "../../../shared/components/custom-icon";

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Персоналии',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      editableMode: false,
      styles: styles(props.fontSize),
    };
  }
  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }
  renderLabel = text => <Text style={styles.label}>{text.toUpperCase()}</Text>;
  onHandleEdit = () => {
    this.setState(prevState => ({ editableMode: !prevState.editableMode }));
    this.state.editableMode && console.log('saved in server');
  };
  render() {
    const { userStatus, navigation, lastName, firstName, secondName, phoneNumber, role, email, id } = this.props;
    const { editableMode, text, styles } = this.state;

    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <View style={styles.sectionStyle}>
            <View style={[styles.imgTeacher, {width: 40, height: 40}]} />
            <Image source={{ uri: 'https://i.imgur.com/Fy3Xj9j.png' }} style={styles.photoStyle} />
          </View>
          <View style={styles.sectionStyle}>
            <CustomIcon name={'teacher'} style={styles.imgTeacher} />
            <View style={{ flex: 1 }}>
              <Text style={styles.nameStyle}>Иванов Иван Иванович</Text>
              <View style={styles.info}>
                <View>
                  <Text style={styles.textStyle}>Проректор</Text>
                  <Text style={styles.departmentLabel}>Администрация</Text>
                </View>
              </View>
              <View style={[styles.dataSection, styles.info]}>
                <View style={{ flexDirection: 'column' }}>
                  {this.renderLabel('E-mail')}
                  <Text style={styles.dataStyle}>example@example.com</Text>
                </View>
                <Button style={styles.btnImageStyle} info>
                  <CustomIcon name={'message'} style={styles.imageStyle} />
                </Button>
              </View>
              <View style={[styles.dataSection, styles.info]}>
                <View style={{ flexDirection: 'column' }}>
                  {this.renderLabel('Телефон')}
                  <Text style={styles.dataStyle}>+7 (979) 234-56-78</Text>
                </View>
                <Button style={styles.btnImageStyle} info>
                  <CustomIcon name={'call'} style={styles.imageStyle} />
                </Button>
              </View>
              <View style={[styles.dataSection, styles.info]}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.dataStyle}>Написать в чат</Text>
                </View>
                <Button style={styles.btnImageStyle}>
                  <CustomIcon name={'chat_1'} style={styles.imageStyle} />
                </Button>
              </View>
            </View>
          </View>
        </View>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
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

export const PersonalityScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
