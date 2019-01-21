import React, { Component } from 'react';
import {
  AsyncStorage,
  Slider,
  View,
} from 'react-native'
import {
  Container,
  Label,
  List,
  ListItem,
  Text,
} from 'native-base';

import FooterSection from '../../components/Footer';
import store from '../../store/configureStore';
import styles from './styles/mainConfigStyles';

const itemList = [
  {
    title: 'Размер шрифта',
  },
  {
    title: 'Очистка кэш памяти',
  },
];

class MainConfigScreen extends Component {
  static navigationOptions = {
    title: 'Основные'
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  componentDidMount() {
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem();
      console.log(value);
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
     } catch (error) {
       // Error retrieving data
       console.log(error);
     }
  }

  render () {
    
    return (
      <Container style={styles.container}>
        <ListItem button style={styles.listItemStyle} >
          <Text style={styles.textStyle}>Размер шрифта</Text>
          <View style={styles.fontTitle}>
            <Label style={styles.smallTitle}>A</Label>
            <Label style={styles.mediumTitle}>A</Label>
            <Label style={styles.largeTitle}>A</Label>
          </View>
          <Slider
            step={3}
            style={{width: '100%'}}
            maximumValue={100}
            minimumValue={0}
          />
        </ListItem>
        <ListItem button style={styles.listItemStyle} >
          <Text style={styles.textStyle}>Очистка кэш памяти</Text>
          <Text>Занимаемая память</Text>
        </ListItem>
      </Container>
    )
  }
}

export default MainConfigScreen;
