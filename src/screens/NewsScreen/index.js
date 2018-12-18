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

import {
  getAllNews
} from '../../actions/newsAction';

import styles from './styles';

const imagesOnLoading = [{ isLoading: true }]

class NewsScreen extends Component {
  static navigationOptions = {
    title: 'Новости университета',
  };

  constructor(props){
    super(props)

    this.state = {
      slider: props.slider
    }
  }

  componentWillMount() {
    this.props.getAllNews();
  }

  renderNews = (news) => {
    return news.map((item, index) =>
      <News
        key={index}
        title={item.title}
        time={item.time}
        image={item.image}
        onPress={() => this.props.navigation.navigate('NewsDetails', {
          newsType: 'news',
          title: item.title,
          time: item.time,
          image: item.image,
          description: item.text
        })}
      />
    )
  }

  renderUpdates = (updates) => {
    return updates.map((item, index) =>
      <News
        newsType='advertisement'
        key={index}
        title={item.title}
        time={item.time}
        onPress={() => this.props.navigation.navigate('NewsDetails', {
          newsType: 'advertisement',
          title: item.title,
          time: item.time,
          description: item.text
        })}
      />
    )
  }

  renderEvents = (events) => {
    return events.map((item, index) =>
      <View>
        <Text style={{alignSelf: 'center', fontSize: 12, paddingTop: 15, paddingBottom: 15, }}>{item.time}</Text>
        <News
          newsType='events'
          key={index}
          title={item.title}
          description={item.text}
        />
      </View>
    )
  }

  renderSlider = (slider) => {
    return <ImageSlider
      style={styles.customSlide}
      loopBothSides
      images={slider}
      customSlide={({ index, item, }) => (
        // It's important to put style here because it's got offset inside
        <View key={index} style={[{width: Dimensions.get('window').width}, item.isLoading && {backgroundColor: 'silver', justifyContent: 'center', alignItems: 'center'}]}>
          {item.isLoading ? <Spinner color='blue' /> : <Image source={{ uri: `data:image/png;base64,${item.image}` }} style={styles.sliderImage} />}
        </View>
      )}
      customButtons={(position, move) => (
        <View style={styles.buttons}>
          {slider.map((image, index) => {
            return (
              <View
                key={index}
                style={styles.button}
              >
                <Icon onPress={() => move(index)} type='Octicons' name='primitive-dot' style={[{ color: '#163D7D', fontSize: 18, }, position === index && styles.buttonSelected]} />
              </View>
            );
          })}
        </View>
      )}
    />
  }



  render () {
    const { slider, news, advertisement, event } = this.props;
    const { isLoading } = this.state;
    if (!slider || !news) <Text>Laoding..</Text>
    return (
      <Container>
        {slider ? this.renderSlider(slider) : this.renderSlider(imagesOnLoading)}
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'transparent'}}>
          <Tab heading="Новости">
            <Content>
              {news ? this.renderNews(news) : <Spinner color='blue' />}
            </Content>
          </Tab>
          <Tab heading="Обновления">
            <Content>
              {advertisement ? this.renderUpdates(advertisement) : <Spinner color='blue' />}
            </Content>
          </Tab>
          <Tab heading="Мероприятия">
            <Content>
              {event ? this.renderEvents(event) : <Spinner color='blue' />}
            </Content>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.newsReducer,
  }
}

const mapDispatchToProps = dispatch => ({
  getAllNews: () => dispatch(getAllNews()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
