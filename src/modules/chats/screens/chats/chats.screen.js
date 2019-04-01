import { Button, Container, Content, Icon, Input, Item, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import {Navigation} from 'react-native-navigation';

import { img_account, img_students } from '../../../../assets/images';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';

const itemList = [
  {
    fullName: 'Иванов Иван Иванович',
    position: 'Преподаватель',
    image: img_account,
  },
  {
    fullName: 'Иванов Георгий Петрович',
    position: 'Преподаватель',
    image: img_account,
  },
  {
    fullName: 'Иванов Георгий Петрович',
    position: 'Преподаватель',
    image: img_account,
  },
  {
    fullName: 'Иванов Георгий Петрович',
    position: 'Преподаватель',
    image: img_account,
  },
  {
    fullName: 'Иванов Георгий Петрович',
    position: 'Преподаватель',
    image: img_account,
  },
  {
    fullName: 'Группа 09.03.01',
    position: '12 человек',
    image: img_students,
  },
];

class InnerComponent extends Component {
  
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Чат',
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

  render() {
    const { userStatus, navigation, token } = this.props;
    const {styles} = this.state;
    return (
      <Container style={styles.container}>
        <Item style={styles.searchBar}>
          <Icon name="ios-search" style={styles.searchIcon} />
          <Input
            style={styles.searchInput}
            placeholder="Поиск по ФИО или должности"
            value={this.state.searchedText}
            onChangeText={text => this.setState({ searchedText: text })}
          />
          <Button transparent onPress={this.onHandleSubmit}>
            <Text>Найти</Text>
          </Button>
        </Item>
        <Content>
          <List
            style={styles.listStyle}
            dataArray={itemList}
            renderRow={item => (
              <ListItem button style={styles.listItemStyle}>
                <Image source={item.image} style={styles.imageStyle} />
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

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export const ChatScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
