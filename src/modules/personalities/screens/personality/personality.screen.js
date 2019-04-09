import { Button, Container, Content, Spinner, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, Linking, NativeModules, View } from 'react-native';
import { connect } from 'react-redux';

import { CustomIcon, CustomSnackbar, FooterSection } from '../../../shared';
import { findPersonalityById } from '../../store/personalities-actions';
import { styles } from './styles';
import { img_men } from '../../../../assets/images';

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Персоналии',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      editableMode: false,
      styles: styles(props.fontSize),
    };
  }

  componentDidMount() {
    this.props.findPersonalityById(this.props.dataNavigate.personId);
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  renderLabel = (text) => <Text style={this.state.styles.label}>{text.toUpperCase()}</Text>;

  onHandleEdit = () => {
    this.setState((prevState) => ({ editableMode: !prevState.editableMode }));
    this.state.editableMode && console.log('saved in server');
  };

  render() {
    const { userStatus, personality, personalityIsLoading } = this.props;
    const photo = personality && personality.photo.length > 0 ? personality.photo : null

    const { styles } = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          {!personalityIsLoading && personality ? (
            <View style={styles.content}>
              <View style={styles.sectionStyle}>
                <View style={[styles.imgTeacher, { width: 40, height: 40 }]} />
                {photo ?
                    <Image source={{ uri: `data:image/png;base64,${photo}` }} style={styles.photoStyle} />
                : <Image source={img_men} style={styles.photoStyle} /> }
              </View>
              <View style={styles.sectionStyle}>
                <CustomIcon name={'teacher'} style={styles.imgTeacher} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.nameStyle}>{personality.name}</Text>
                  <View style={styles.info}>
                    <View>
                      <Text style={styles.textStyle}>{personality.post}</Text>
                      <Text style={styles.departmentLabel}>{personality.department}</Text>
                    </View>
                  </View>
                  <View style={[styles.dataSection, styles.info]}>
                    <View style={{ flexDirection: 'column' }}>
                      {this.renderLabel('E-mail')}
                      <Text style={styles.dataStyle}>{personality.email}</Text>
                    </View>
                    <Button style={styles.btnImageStyle} info>
                      <CustomIcon
                        name={'message'}
                        style={styles.imageStyle}
                        onPress={() => this.handleSendEmail(personality.email)}
                      />
                    </Button>
                  </View>
                  <View style={[styles.dataSection, styles.info]}>
                    <View style={{ flexDirection: 'column' }}>
                      {this.renderLabel('Телефон')}
                      <Text style={styles.dataStyle}>{personality.phoneNumber}</Text>
                    </View>
                    <Button style={styles.btnImageStyle} info>
                      <CustomIcon
                        name={'call'}
                        style={styles.imageStyle}
                        onPress={() => this.makeACall(personality.phoneNumber)}
                      />
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
          ) : (
            <Spinner color="#163D7D" style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} />
          )}
        </Content>
        <FooterSection {...this.props} />
      </Container>
    );
  }

  makeACall(phoneNumber) {
    if (phoneNumber.length > 0) {
      Linking.openURL(`tel://${phoneNumber}`);
    }
  }

  handleSendEmail(email) {
    if (email.length > 0) {
      NativeModules.CampusModule.sendEmail(email, () => {
        Linking.canOpenURL(`mailto:${email}`).then((supported) => {
          if (supported) {
            Linking.openURL(`mailto:${email}`);
          } else {
            CustomSnackbar.show({
              title: 'Почтовая программа недоступна',
            });
          }
        });
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    ...state.personalitiesReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  findPersonalityById: (personId) => dispatch(findPersonalityById(personId)),
});

export const PersonalityScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
