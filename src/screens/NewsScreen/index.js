import React, { Component } from 'react';
import { connect } from 'react-redux';
import m from 'moment/min/moment-with-locales';
import {
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {
  Button,
  Container,
  Content,
  Text,
  Icon,
  Left,
  Tab,
  TabHeading,
  Tabs,
  Spinner,
} from 'native-base';
import ImageSlider from 'react-native-image-slider';

import { News } from '../../components/News';
import FooterSection from '../../components/Footer';

import {
  getAllNews
} from '../../actions/newsAction';

import styles from './styles';

const imagesOnLoading = [{ isLoading: true }]

class NewsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Новости университета',
      headerLeft: <Left>
        <Button transparent onPress={() => navigation.replace('Home')}>
          <Icon name='arrow-back' style={{color: 'white'}}/>
        </Button>
      </Left>
    }
  };

  constructor(props){
    super(props);

    this.state = {
      slider: props.slider,
      isSliderShown: true,
      currentTab: 0,
    }
  }

  componentWillMount() {
    this.props.getAllNews();
    m.locale('ru');
  }

  renderNews = (news) => {
    return news.map((item, index) =>
      <News
        key={index}
        title={item.title}
        time={item.time}
        image={item.image}
        description={item.text}
        isTruncate={true}
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
        description={item.text}
        isTruncate={true}
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
        <Text style={{alignSelf: 'center', fontSize: 14, color: '#2F528B', paddingTop: 10, }}>{m(item.time).format('LL')}</Text>
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

  _upperCase(word) {
    return <Text style={styles.tabTitleStyle}>{word.toUpperCase()}</Text>;
  }

  onScrollGetsHeight = (height) => {
    if(height > 400) {
      this.setState({
        isSliderShown: false
      })
    } else {
      this.setState({
        isSliderShown: true,
      })
    }
  }


  render () {
    const { slider, news, advertisement, event, userStatus, navigation } = this.props;
    const { isLoading, isSliderShown, currentTab } = this.state;
    if (!slider || !news) <Text>Laoding..</Text>

    return (
      <Container>
        {isSliderShown && (slider ? this.renderSlider(slider) : this.renderSlider(imagesOnLoading))}
        <Tabs
          onChangeTab={({i}) => this.setState({ currentTab: i})}
          tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
        >
          <Tab
            heading={<TabHeading style={styles.tabHeaderStyle}>
              <View style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab === 0 && styles.activeTabStyle]}>
                {this._upperCase('Новости')}
              </View>
            </TabHeading>}
          >
            <Content
              style={styles.tabSectionStyle}
            >
              {news ? this.renderNews(news) : <Spinner color='blue' />}
            </Content>
          </Tab>
          <Tab heading={<TabHeading style={styles.tabHeaderStyle}>
              <View style={[styles.tabHeadingStyle, currentTab === 1 && styles.activeTabStyle]}>
                {this._upperCase('Обновления')}
              </View>
            </TabHeading>}>
            <Content
              style={styles.tabSectionStyle}
            >
              {advertisement ? this.renderUpdates(advertisement) : <Spinner color='blue' />}
            </Content>
          </Tab>
          <Tab heading={<TabHeading style={styles.tabHeaderStyle}>
              <View style={[styles.tabHeadingStyle, styles.tabHeadingRight, currentTab === 2 && styles.activeTabStyle]}>
                {this._upperCase('Мероприятия')}
              </View>
            </TabHeading>}>
            <Content
              style={styles.tabSectionStyle}
            >
              {event ? this.renderEvents(event) : <Spinner color='blue' />}
            </Content>
          </Tab>
        </Tabs>
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
    ...state.newsReducer,
  }
}

const mapDispatchToProps = dispatch => ({
  getAllNews: () => dispatch(getAllNews()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
