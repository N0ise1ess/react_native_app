import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  View,
} from 'react-native';
import {
  Container,
  Content,
  Icon,
  List,
  ListItem,
  Text,
} from 'native-base';

import FooterSection from '../../components/Footer';
import ButtonBack from '../../components/ButtonBack';
import styles from './styles/buildingDormsStyles';

import {
  img_campus_dorm,
  img_university_section,
} from '../../assets/images';

const itemList = [
  {
    title: 'Корпус 1',
    text: 'Учебный',
    image: img_campus_dorm,
  },
  {
    title: 'Корпус 2',
    text: 'Учебный',
    image: img_campus_dorm,
  },
  {
    title: 'Корпус 3',
    text: 'Учебный',
    image: img_campus_dorm,
  },
  {
    title: 'Корпус 4',
    text: 'Административный',
    image: img_campus_dorm,
  },
  {
    title: 'Корпус 5',
    text: 'Учебный',
    image: img_campus_dorm,
  },
]

class BuildingDormsScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Корпуса и общежития',
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
              <ListItem button onPress={() => navigation.navigate(item.route ? item.route : '')} style={styles.listItemStyle} >
                <View style={styles.viewStyle}>
                  <Image source={item.image} style={styles.imageStyle} />
                  <View style={styles.columnStyle}>
                    <Text style={styles.titleStyle}>{item.title}</Text>
                    <Text style={styles.textStyle}>{item.text}</Text>
                  </View>
                </View>
                <Icon type='Ionicons' name='ios-arrow-round-forward' style={styles.iconStyle} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BuildingDormsScreen);
