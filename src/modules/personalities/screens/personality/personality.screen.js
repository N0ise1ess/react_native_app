import {Button, Container, Spinner, Text} from 'native-base';
import React, { Component } from 'react';
import { Image, View, Linking } from 'react-native';
import { connect } from 'react-redux';

import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import {CustomIcon} from "../../../shared/components/custom-icon";
import {findPersonalityById} from "../../../../actions/personalityAction";

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Персоналии',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      editableMode: false,
      styles: styles(props.fontSize)
    };
  }

  componentWillMount() {
    const personId = this.props.navigation.state.params.personId;
    this.props.findPersonalityById(personId)
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }
  renderLabel = text => <Text style={this.state.styles.label}>{text.toUpperCase()}</Text>;
  onHandleEdit = () => {
    this.setState(prevState => ({ editableMode: !prevState.editableMode }));
    this.state.editableMode && console.log('saved in server');
  };
  render() {
    const { userStatus, navigation, lastName, firstName, secondName, personalities, personalitiesIsLoading } = this.props;
    const { editableMode, text, styles } = this.state;
    const person = personalities;
    return (
      <Container style={styles.container}>
        {!personalitiesIsLoading ?
        <View style={styles.content}>
          <View style={styles.sectionStyle}>
            <View style={[styles.imgTeacher, {width: 40, height: 40}]} />
            <Image source={{ uri: `data:image/png;base64,${person.photo}` }} style={styles.photoStyle} />
          </View>
          <View style={styles.sectionStyle}>
            <CustomIcon name={'teacher'} style={styles.imgTeacher} />
            <View style={{ flex: 1 }}>
              <Text style={styles.nameStyle}>{person.name}</Text>
              <View style={styles.info}>
                <View>
                  <Text style={styles.textStyle}>{person.post}</Text>
                  <Text style={styles.departmentLabel}>{person.department}</Text>
                </View>
              </View>
              <View style={[styles.dataSection, styles.info]}>
                <View style={{ flexDirection: 'column' }}>
                  {this.renderLabel('E-mail')}
                  <Text style={styles.dataStyle}>{person.email}</Text>
                </View>
                <Button style={styles.btnImageStyle} info>
                  <CustomIcon name={'message'} style={styles.imageStyle}
                              onPress={() => this.sendEmail(person.email)} />
                </Button>
              </View>
              <View style={[styles.dataSection, styles.info]}>
                <View style={{ flexDirection: 'column' }}>
                  {this.renderLabel('Телефон')}
                  <Text style={styles.dataStyle}>{person.phoneNumber}</Text>
                </View>
                <Button style={styles.btnImageStyle} info>
                  <CustomIcon name={'call'} style={styles.imageStyle}
                              onPress={() => this.makeACall(person.phoneNumber)} />
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
        </View> : <Spinner color='#163D7D' style={{justifyContent: 'center', alignItems: 'center', flex: 1}}/>}
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }

  makeACall(phoneNumber) {
    if (phoneNumber.length > 0) {
      Linking.openURL(`tel://${phoneNumber}`)
    }
  }

  sendEmail(email) {
    if (email.length > 0) {
      Linking.openURL(`mailto:${email}`)
    }
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.personalityReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  findPersonalityById: (personId) => dispatch(findPersonalityById(personId)),
});

export const PersonalityScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
