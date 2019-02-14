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
import FooterSection from '../../components/Footer';
import ButtonBack from '../../components/ButtonBack';

import styles from './styles';

const imagesOnLoading = [{ isLoading: true }]

class NewsDetailsScreen extends Component {
  
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Новости университета',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()}/>,
  });

  constructor(props){
    super(props)

    this.state = {

    }
  }



  render () {
    const { userStatus, navigation } = this.props;
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

export default connect(mapStateToProps, null)(NewsDetailsScreen);
