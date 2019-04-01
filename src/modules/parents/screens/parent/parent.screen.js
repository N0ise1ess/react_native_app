import { Button, Container, Text } from 'native-base';
import React, { Component, Fragment } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import {Navigation} from 'react-native-navigation';

import { img_parent } from '../../../../assets/images';
import { Parent } from '../../components';
import {ButtonBack, CustomIcon, FooterSection} from '../../../shared/components';
import { styles } from './styles';

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Родители',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      editableMode: false,
      styles: styles(props.fontSize),
    };
  }

  renderLabel = text => <Text style={this.state.styles.label}>{text.toUpperCase()}</Text>;
  onHandleEdit = () => {
    this.setState(prevState => ({ editableMode: !prevState.editableMode }));
    this.state.editableMode && console.log('saved in server');
  };
  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }
  render() {
    const { userStatus } = this.props;
    const { styles } = this.state;
    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <View style={styles.sectionStyle}>
            <View style={styles.btnImageStyle}>
              <Image source={img_parent} style={styles.imageStyle} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.nameStyle}>Иванов Яков Самойлович</Text>
              <View style={styles.info}>
                <View>
                  <Text style={styles.textStyle}>Отец</Text>
                </View>
              </View>
              <View style={styles.dataSection}>
                {this.renderLabel('Учетные данные: ')}
                <Text style={styles.dataStyle}>Зарегистрирован 20.10.2018</Text>
                <View style={{flexDirection: "row"}}>
                  <Text style={styles.dataStyle}>Логин </Text>
                  <Text style={[styles.dataStyle, {color:'black', fontWeight: 'bold',}]}>akjdaso</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                  <Text style={styles.dataStyle}>Email </Text>
                  <Text style={[styles.dataStyle, {color:'#3c87f2', fontWeight: 'bold',}]}>akjdaso@kleo.com</Text>
                </View>
              </View>
              <View style={styles.dataSection}>
                {this.renderLabel('Доступ:')}
                <Parent styles={styles}/>
              </View>
            </View>
          </View>
          <Button rounded style={styles.buttonStyle}>
            <Text>Сохранить</Text>
          </Button>
        </View>
        <FooterSection {...this.props} />
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

export const ParentScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
