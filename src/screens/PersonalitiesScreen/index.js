import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  View,
} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Item,
  Icon,
  Input,
  Button,
} from 'native-base';
import ButtonBack from '../../components/ButtonBack';
import FooterSection from '../../components/Footer';

import { getDepartments } from '../../actions/contactsAction';

import styles from './styles';

import {
  img_campus_dorm,
  img_teacher,
} from '../../assets/images';

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
]

class PersonalitiesScreen extends Component {
  
  static navigationOptions = ({navigation}) => ({
    title: 'Персоналии',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()}/>,
  });

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    const { userStatus, navigation, token } = this.props;
    return (
      <Container style={styles.container}>
        <Item style={styles.searchBar}>
          <Icon name="ios-search" style={styles.searchIcon} />
          <Input
            style={styles.searchInput}
            placeholder="Поиск по ФИО или должности"
            value={this.state.searchedText}
            onChangeText={(text) => this.setState({searchedText: text}) } />
          <Button transparent onPress={this.onHandleSubmit}>
            <Text>Найти</Text>
          </Button>
        </Item>
        <Content>
          <List style={styles.listStyle} dataArray={itemList}
            renderRow={(item) =>
              <ListItem
                button
                style={styles.listItemStyle}
                onPress={() => navigation.navigate('Personality')}
              >
                <Image source={item.image} style={styles.iconStyle} />
                <View style={styles.columnStyle}>
                  <Text style={styles.titleStyle}>{item.fullName}</Text>
                  <Text style={styles.textStyle}>{item.position}</Text>
                  <Text style={styles.textStyle}>{item.workPlace}</Text>
                </View>
              </ListItem>
            }>
          </List>
        </Content>
        <FooterSection
          userStatus = {userStatus}
          navigate={navigation.navigate}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalitiesScreen);
