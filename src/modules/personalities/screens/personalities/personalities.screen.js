import {Button, Container, Content, Icon, Input, Item, List, ListItem, Spinner, Text} from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { img_teacher } from '../../../../assets/images';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import {findPersonalityByName } from "../../../../actions/personalityAction";
import {News} from "../../../news/components/news";


const itemList = [
  {
    name: 'Иванов Иван Иванович',
    post: 'Проректор',
    department: 'Администрация',
    image: img_teacher,
  },
  {
    name: 'Иванов Георгий Петрович',
    post: 'Ректор',
    department: 'Администрация',
    image: img_teacher,
  },
  {
    name: 'Иванов Георгий Петрович',
    post: 'Ректор',
    department: 'Администрация',
    image: img_teacher,
  },
  {
    name: 'Иванов Георгий Петрович',
    post: 'Ректор',
    department: 'Администрация',
    image: img_teacher,
  },
  {
    name: 'Иванов Георгий Петрович',
    post: 'Ректор',
    department: 'Администрация',
    image: img_teacher,
  },
  {
    name: 'Иванов Георгий Петрович',
    post: 'Ректор',
    department: 'Администрация',
    image: img_teacher,
  },
];

const alphabets = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Персоналии',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize)
    };
  }

  componentWillMount() {
    //Getting first 50 contacts
    this.props.findPersonalityByName('', 20, null)
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }
  render() {
    const { userStatus, navigation, token, personalities, personalitiesIsLoading } = this.props;
    const { styles } = this.state;
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
        <View style={{flex:9, flexDirection: 'row'}}>
          <View style={styles.alphabetContainer}>
            <View style={{flex: alphabets.length}}>
              {alphabets.map((item, index) =>
                <View style={styles.wordContainer(alphabets.length, index)} key={index}>
                  <Text style={{color:'white', alignSelf:'center', fontSize: 11}}
                        numberOfLines={1}
                        uppercase={true}>{item}</Text>
                </View>)}
            </View>
          </View>
          <Content contentContainerStyle={{flex: 8.9, marginLeft: 5}}>
            {!false ?
                <List
                  style={styles.listStyle}
                  dataArray={itemList}
                  renderRow={item => (
                    <ListItem button style={styles.listItemStyle} onPress={() => navigation.navigate('Personality')}>
                      <Image source={img_teacher} style={styles.iconStyle} />
                      <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle}>{item.name}</Text>
                        <Text style={[styles.textStyle, {color: '#979797'}]}>{item.post}</Text>
                        <Text style={styles.textStyle}>{item.department}</Text>
                      </View>
                    </ListItem>

                  )}/>: <Spinner color='#163D7D' style={{justifyContent: 'center', alignItems: 'center'}}/> }
          </Content>
        </View>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} maxHeight={40} />
      </Container>
    );
  }

  onHandleSubmit = () => {
    this.props.findPersonalityByName(this.state.searchedText)
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
  findPersonalityByName: (name, size, page) => dispatch(findPersonalityByName(name, size, page)),
});

export const PersonalitiesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
