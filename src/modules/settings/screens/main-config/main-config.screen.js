import { Button, Container, Label, ListItem } from 'native-base';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slider from 'react-native-slider';
import clear from 'react-native-clear-app-cache'
import { connect } from 'react-redux';
import * as actions from '../../store/settings-actions';
import { styles } from './styles';
import { CustomSnackbar } from '../../../shared';

class Settings extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Основные',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      sizeCacheNumber: 0,
      sizeCacheUnit: 'kB',
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  async componentWillMount() {
    await clear.getAppCacheSize((value, unit) => {
      this.setState({ sizeCacheNumber: value, sizeCacheUnit: unit, })
    })
  }

  render() {
    const { styles, sizeCacheUnit, sizeCacheNumber } = this.state;
    return (
      <Container style={styles.container}>
        <ListItem button style={styles.listItemStyle}>
          <Text style={styles.textStyle}>Размер шрифта</Text>
          <View style={styles.fontTitle}>
            <Label style={styles.smallTitle}>A</Label>
            <Label style={styles.mediumTitle}>A</Label>
            <Label style={styles.largeTitle}>A</Label>
          </View>
          <View style={styles.sliderView}>
            <View style={styles.sliderCircleOne} />
            <Slider
              style={styles.slider}
              thumbStyle={styles.thumbSlider}
              // value=
              maximumValue={1}
              minimumValue={-1}
              value={this.props.fontSize}
              step={1}
              thumbTintColor={'#0060f7'}
              minimumTrackTintColor={'#26518f'}
              maximumTrackTintColor={'#26518f'}
              onSlidingComplete={(e) => this.props.setFontSize(e)}
            />
            <View style={styles.sliderCircleTwo} />
          </View>
        </ListItem>
        <ListItem button style={styles.listItemStyle}>
          <Text style={styles.textStyle}>Очистка кэш памяти</Text>
          <View style={styles.textRam}>
            <Text style={styles.textRam_title}>Занимаемая память</Text>
            <View style={styles.textRam_description}>
              <Text style={styles.textRam_number}>{sizeCacheNumber}</Text>
              <Text style={styles.textRam_size}>{sizeCacheUnit}</Text>
            </View>
          </View>
          <View style={styles.buttonClear_box}>
            <Button block rounded style={styles.buttonClear} onPress={() => clear.clearAppCache(() => {
              this.setState({sizeCacheNumber: 0, sizeCacheUnit: 'kB'});
              CustomSnackbar.show({ title: 'Clear!' });
            })}>
              <Text style={styles.buttonClear_text}>ОЧИСТИТЬ</Text>
            </Button>
          </View>
        </ListItem>
      </Container>
    );
  }
}

export const MainConfigScreen = connect(
  (state) => state.settings,
  actions,
)(Settings);
