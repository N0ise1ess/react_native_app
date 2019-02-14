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
  img_account,
  img_students,
  img_parent,
} from '../../assets/images';

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
    fullName: 'Видова Фидора Васильевна',
    position: 'Бабушка',
  },
]

class ParentsScreen extends Component {
  
  static navigationOptions = ({navigation}) => ({
    title: 'Родители',
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
        <Content>
          <List style={styles.listStyle} dataArray={itemList}
            renderRow={(item) =>
              <ListItem
                button
                style={styles.listItemStyle}
                onPress={() => navigation.navigate('Parent')}
              >
                <Image source={img_parent} style={styles.imageStyle} />
                <View style={styles.columnStyle}>
                  <Text style={styles.titleStyle}>{item.fullName}</Text>
                  <Text style={styles.textStyle}>{item.position}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ParentsScreen);
