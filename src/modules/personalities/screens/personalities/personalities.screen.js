import { Button, Container, Content, Icon, Input, Item, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { img_teacher } from '../../../../assets/images';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';

const itemList = [
  {
    fullName: 'Иванов Иван Иванович',
    position: 'Проректор',
    workPlace: 'Администрация',
    image: img_teacher,
  },
  {
    fullName: 'Иванов Георгий Петрович',
    position: 'Ректор',
    workPlace: 'Администрация',
    image: img_teacher,
  },
  {
    fullName: 'Иванов Георгий Петрович',
    position: 'Ректор',
    workPlace: 'Администрация',
    image: img_teacher,
  },
  {
    fullName: 'Иванов Георгий Петрович',
    position: 'Ректор',
    workPlace: 'Администрация',
    image: img_teacher,
  },
  {
    fullName: 'Иванов Георгий Петрович',
    position: 'Ректор',
    workPlace: 'Администрация',
    image: img_teacher,
  },
  {
    fullName: 'Иванов Георгий Петрович',
    position: 'Ректор',
    workPlace: 'Администрация',
    image: img_teacher,
  },
];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Персоналии',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userStatus, navigation, token } = this.props;
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
              <ListItem button style={styles.listItemStyle} onPress={() => navigation.navigate('Personality')}>
                <Image source={item.image} style={styles.iconStyle} />
                <View style={styles.columnStyle}>
                  <Text style={styles.titleStyle}>{item.fullName}</Text>
                  <Text style={styles.textStyle}>{item.position}</Text>
                  <Text style={styles.textStyle}>{item.workPlace}</Text>
                </View>
              </ListItem>
            )}
          />
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export const PersonalitiesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
