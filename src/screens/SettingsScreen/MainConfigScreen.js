import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Text,
} from 'react-native'
import {
  Container,
  Label,
  List,
  ListItem,
  Button,
} from 'native-base';
import Slider from "react-native-slider";


import FooterSection from '../../components/Footer';
import store from '../../store/configureStore';
import styles from './styles/mainConfigStyles';

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
          <View style={styles.sliderView}>
            <View style={styles.sliderCircleOne}></View>
            <Slider
              style={styles.slider}
              thumbStyle={styles.thumbSlider}
              maximumValue={2}
              minimumValue={0}
              step={1}
              thumbTintColor={'#0060f7'}
              minimumTrackTintColor={'#26518f'}
              maximumTrackTintColor={'#26518f'}
            />
            <View style={styles.sliderCircleTwo}></View>
          </View>
        </ListItem>
        <ListItem button style={styles.listItemStyle} >
          <Text style={styles.textStyle}>Очистка кэш памяти</Text>
          <View style={styles.textRam}>
            <Text style={styles.textRam_title}>Занимаемая память</Text>
            <View style={styles.textRam_description}>
              <Text style={styles.textRam_number}>25</Text>
              <Text style={styles.textRam_size}>GB</Text>
            </View>
          </View>
          <View style={styles.buttonClear_box}>
            <Button block rounded style={styles.buttonClear}>
              <Text style={styles.buttonClear_text}>ОЧИСТИТЬ</Text>
            </Button>
          </View>
        </ListItem>
      </Container>
    )
  }
}

export default MainConfigScreen;
