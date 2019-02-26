import {Button, Container, Content, Icon, Input, Item, List, ListItem, Spinner, Text} from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { img_teacher } from '../../../../assets/images';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import {findPersonalityByName} from "../../../../actions/personalityAction";

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
    this.state = {
      styles: styles(props.fontSize),
      searchedPersonalities:[]
    };
  }

  componentWillMount() {
    this.props.findPersonalityByName('')
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }
  render() {
    const { userStatus, navigation, token, personalities, personalitiesIsLoading } = this.props;
    const { styles, searchedPersonalities } = this.state;
    return (
      <Container style={styles.container}>
        <Item style={styles.searchBar}>
          <Icon name="ios-search" style={styles.searchIcon} />
          <Input
            style={styles.searchInput}
            placeholder="Поиск по ФИО"
            value={this.state.searchedText}
            onChangeText={text => this.setState({ searchedText: text })}
          />
          <Button transparent onPress={this.onHandleSubmit}>
            <Text>Найти</Text>
          </Button>
        </Item>
        <Content>
          {!personalitiesIsLoading ?
          <List
            style={styles.listStyle}
            dataArray={searchedPersonalities.length > 0 ? searchedPersonalities : personalities}
            renderRow={item => (
              <ListItem button style={styles.listItemStyle} onPress={() => navigation.navigate('Personality')}>
                <Image source={item.image} style={styles.iconStyle} />
                <View style={styles.columnStyle}>
                  <Text style={styles.titleStyle}>{item.name}</Text>
                  <Text style={[styles.textStyle, {color: '#979797'}]}>{item.post}</Text>
                  <Text style={styles.textStyle}>{item.department}</Text>
                </View>
              </ListItem>
            )}
          /> : <Spinner color='#163D7D' style={{justifyContent: 'center', alignItems: 'center'}}/> }
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }

  onHandleSubmit = name => {
    this.props.findPersonalityByName(name)
    this.setState({searchedPersonalities : []})
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
  findPersonalityByName: (name) => dispatch(findPersonalityByName(name)),
});

export const PersonalitiesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
