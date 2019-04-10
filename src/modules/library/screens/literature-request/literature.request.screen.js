import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Text, Picker, List, Button } from 'native-base';
import { FooterSection, CustomIcon } from '../../../shared';
import { View } from 'react-native';
import Modal from 'react-native-modalbox';

import { styles } from './styles';
import { Navigation } from 'react-native-navigation';

const books = [
  {
    author: 'Бражников М.А.',
    name: 'Управление изменениями: базовый курс: учеб. пособие'
  },
  {
    author: 'Хорина И.В.',
    name: 'Экономико-математические методы исследования и моделирования национальной экономики: практические решения'
  }
];

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Запрос на выдачу литературы',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  _handleOptionSelect = (option) => {
    // TODO
  }

  _onLinkPress = (e) => {
    this.setState({isOpen: true});
  }

  _onReadyClick = () => {
    if (this.state.isRequestSent) {
      this.setState({isOpen: true});
      Navigation.pop(this.props.componentId);
    } else {
      this.setState({isRequestSent: true});
    }
  }

  render() {
    const {styles, isRequestSent} = this.state;

    return (<Container style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[styles.picker]}>
          <Text style={styles.label}>ДАТА ВЫДАЧИ</Text>
          <View style={styles.searchInputWrapper}>
            <Picker
              style={styles.pickerText}
              itemStyle={styles.pickerItemText}
              mode="dropdown"
              selectedValue="Завтра, 16 сентября"
              onValueChange={option => this._handleOptionSelect(option)}>
              <Picker.Item label="Завтра, 16 сентября" value="Завтра, 16 сентября"/>
            </Picker>
          </View>
        </View>
        <View style={[styles.picker]}>
          <Text style={styles.label}>ВРЕМЯ ВЫДАЧИ</Text>
          <View style={styles.searchInputWrapper}>
            <Picker
              style={styles.pickerText}
              itemStyle={styles.pickerItemText}
              selectedValue="12:00-13:00"
              mode="dropdown"
              onValueChange={option => this._handleOptionSelect(option)}>
              <Picker.Item label="12:00-13:00" value="12:00-13:00"/>
            </Picker>
          </View>
        </View>
        <View style={[styles.picker]}>
          <Text style={styles.label}>АДРЕС ВЫДАЧИ</Text>
          <View style={styles.searchInputWrapper}>
            <Picker
              style={styles.pickerText}
              itemStyle={styles.pickerItemText}
              mode="dropdown"
              selectedValue="г. Самара, ул. Молодогвардейская"
              onValueChange={option => this._handleOptionSelect(option)}>
              <Picker.Item label="г. Самара, ул. Молодогвардейская" value="г. Самара, ул. Молодогвардейская"/>
            </Picker>
          </View>
        </View>
        <List
          style={styles.listStyle}
          dataArray={books}
          renderRow={(item) => (
            <View style={styles.listItemStyle}>
              <Text style={[styles.title, styles.textStyle]}>{item.author}</Text>
              <Text style={styles.title}>{item.name}</Text>
              <CustomIcon name="close1" style={styles.closeIcon} />
            </View>
        )} />
        <Button rounded style={styles.button} onPress={() => this._onLinkPress()}>
          <Text style={styles.buttonText}>ОТПРАВИТЬ ЗАЯВКУ</Text>
        </Button>
      </View>
      <FooterSection {...this.props} />
      <Modal
        backdrop={true}
        backdropPressToClose={false}
        isOpen={this.state.isOpen}
        onClosed={() => this.setState({isOpen: false})}
        style={[styles.modal]}
        position={"center"}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            {isRequestSent ? 'Запрос успешно отправлен' : 'Подтвердите отправку запроса на выдачу литературы'}
          </Text>
          <View style={styles.modalButtons}>
            {!isRequestSent && <Button onPress={() => this.setState({isOpen: false})} style={[styles.modalButton, styles.buttonCancel]}><Text>ОТМЕНА</Text></Button>}
            <Button onPress={() => this._onReadyClick()} style={[styles.modalButton, styles.buttonConfirm, isRequestSent && styles.buttonConfirmFull]}><Text>ГОТОВО</Text></Button>
          </View>
          <CustomIcon name="close1" style={styles.modalCloseIcon} />
        </View>
      </Modal>
    </Container>);
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

export const LiteratureRequestScreen = connect(
  mapStateToProps,
)(InnerComponent);
