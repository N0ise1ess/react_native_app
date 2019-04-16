import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { img_parent } from '../../../../assets/images';
import { FooterSection } from '../../../shared';
import { styles } from './styles';
import {Navigation} from "react-native-navigation";

const itemList = [
  {
    fullName: 'Иванов Яков Самойлович',
    position: 'Отец',
  },
  {
    fullName: 'Видова Аркадия Федотовна',
    position: 'Мать',
  },
  {
    fullName: 'Видова Федора Васильевна',
    position: 'Бабушка',
  },
];

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Родители',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }
  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }
  render() {
    const { styles } = this.state;
    const { userStatus, navigation, token } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <List
            style={styles.listStyle}
            dataArray={itemList}
            renderRow={(item) => (
              <ListItem button style={styles.listItemStyle} onPress={() => Navigation.push(this.props.componentId, {
                component: {
                  name: 'Parent'
                },
              })}>
                <View style={styles.btnImageStyle}>
                  <Image source={img_parent} style={styles.imageStyle} />
                </View>
                <View style={styles.columnStyle}>
                  <Text style={styles.titleStyle}>{item.fullName}</Text>
                  <Text style={styles.textStyle}>{item.position}</Text>
                </View>
              </ListItem>
            )}
          />
        </Content>
        <FooterSection {...this.props} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export const ParentsListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
