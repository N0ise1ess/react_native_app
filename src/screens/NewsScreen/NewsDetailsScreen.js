import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Icon,
  Tab,
  Tabs,
  Spinner,
} from 'native-base';
import ImageSlider from 'react-native-image-slider';

import { News } from '../../components/News';

import styles from './styles';

const imagesOnLoading = [{ isLoading: true }]

class NewsDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Новости университета',
  };

  constructor(props){
    super(props)

    this.state = {

    }
  }



  render () {
    const { params } = this.props.navigation.state
    return (
      <Container>
        <Content>
          <News
            newsType={params.newsType}
            title={params.title}
            time={params.time}
            image={params.image}
            description={params.description}
          />
        </Content>
      </Container>
    )
  }
}

export default NewsDetailsScreen;
