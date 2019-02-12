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
} from 'native-base';

import FooterSection from '../../components/Footer';

import { getDepartments } from '../../actions/contactsAction';

import styles from './styles';

import {
  img_campus_dorm,
  img_university_section,
} from '../../assets/images';

const itemList = [
  {
    title: 'Подразделения',
    text: 'Информация о структуре Университета',
    image: img_university_section,
    route: 'Divisions'
  },
  {
    title: 'Корпуса и общежития',
    text: 'Информация о корпусах и общежитиях',
    image: img_campus_dorm,
    route: 'BuildingDorms',
  },
]

class ContactsScreen extends Component {
  static navigationOptions = {
    title: 'Контакты университета',
  };

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {
    this.props.getDepartments('');
  }

  render () {
    const { userStatus, navigation, token } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <List style={styles.listStyle} dataArray={itemList}
            renderRow={(item) =>
              <ListItem button onPress={() => navigation.navigate(item.route ? item.route : '')} style={styles.listItemStyle} >
                <Image source={item.image} style={styles.iconStyle} />
                <View style={styles.columnStyle}>
                  <Text style={styles.titleStyle}>{item.title}</Text>
                  <Text style={styles.textStyle}>{item.text}</Text>
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
  getDepartments: (searchedText) => dispatch(getDepartments(searchedText)),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);
