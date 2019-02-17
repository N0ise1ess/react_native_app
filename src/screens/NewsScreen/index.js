import React, { Component } from 'react';
import { connect } from 'react-redux';
import m from 'moment/min/moment-with-locales';
import * as RN from 'react-native';
import * as NB from 'native-base';
import ImageSlider from 'react-native-image-slider';
import { News } from '../../components/News';
import FooterSection from '../../components/Footer';
import ButtonBack from '../../components/ButtonBack';
import { getAllNews} from '../../actions/newsAction';
import styles from './styles';

const {height: NAVBAR_HEIGHT} = RN.Dimensions.get("window");
const imagesOnLoading = [{ isLoading: true }];

class NewsScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Новости университета',
      headerLeft: <ButtonBack onPress={() => navigation.replace('Home')}/>,
    }
  };
  constructor(props){
    super(props);

    this.state = {
      slider: props.slider,
      isSliderShown: true,
      currentTab: 0,
    }
    this.scroll = new RN.Animated.Value(0);
    this.headerY = RN.Animated.multiply(RN.Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT/5), -1);
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
      <RN.View key={index}>
        <NB.Text style={{alignSelf: 'center', fontSize: 14, color: '#2F528B', paddingTop: 10, }}>{m(item.time).format('LL').replace("г.", "")}</NB.Text>
        <News
          newsType='events'
          key={index}
          title={item.title}
          description={item.text}
        />
      </RN.View>
    )
  }

  renderSlider = (slider) => {
    return <ImageSlider
      style={styles.customSlide}
      loopBothSides
      images={slider}
      customSlide={({ index, item, }) => (
        <RN.View key={index} style={[{width: RN.Dimensions.get('window').width}, item.isLoading && {backgroundColor: 'silver', justifyContent: 'center', alignItems: 'center', height: NAVBAR_HEIGHT/5}]}>
          {item.isLoading ? <NB.Spinner color='blue' /> : <RN.Image source={{ uri: `data:image/png;base64,${item.image}` }} style={styles.sliderImage} />}
        </RN.View>
      )}
      customButtons={(position, move) => (
        <RN.View style={styles.buttons}>
          {slider.map((image, index) => {
            return (
              <RN.View
                key={index}
                style={styles.button}
              >
                <NB.Icon onPress={() => move(index)} type='Octicons' name='primitive-dot' style={[{ color: '#163D7D', fontSize: 18, }, position === index && styles.buttonSelected]} />
              </RN.View>
            );
          })}
        </RN.View>
      )}
    />
  }

  onScroll = (event) => {
    if(event.nativeEvent.contentOffset.y > 20) {
      this.setState({isSliderShown: false})
    } else if(event.nativeEvent.contentOffset.y < 20) {
      this.setState({isSliderShown: true})
    }
  }

  _upperCase(word) {
    return <NB.Text style={styles.tabTitleStyle}>{word.toUpperCase()}</NB.Text>
  }

  render () {
    const { slider, news, advertisement, event, userStatus, navigation, } = this.props;
    const { isSliderShown, currentTab, } = this.state;
    const tabY = RN.Animated.add(this.scroll, this.headerY);

    return (
      <NB.Container>
        <RN.Animated.View style={[styles.sliderContainer, {
          transform: [{
            translateY: this.headerY
          }],
        }]}>
          {isSliderShown && (slider ? this.renderSlider(slider) : this.renderSlider(imagesOnLoading))}
        </RN.Animated.View>
        <RN.Animated.ScrollView
          contentContainerStyle={{paddingTop: NAVBAR_HEIGHT/5}}
          scrollEventThrottle={1}
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{zIndex: 0, backgroundColor: '#CED8DA'}}
          onScroll={RN.Animated.event(
            [{nativeEvent: {contentOffset: {y: this.scroll}}}],
            {useNativeDriver: true},
          )}
        >
          <NB.Tabs renderTabBar={(props) => <RN.Animated.View
            style={[{
              transform: [{translateY: tabY}],
              zIndex: 1,
              width: "100%",
              backgroundColor: '#CED8DA',
            }, RN.Platform.OS === "ios" ? {paddingTop: 20} : null]}>
            <NB.ScrollableTab {...props} style={{backgroundColor: '#CED8DA',}} underlineStyle={{backgroundColor: "transparent"}}/>
          </RN.Animated.View>
          } onChangeTab={({i}) => this.setState({ currentTab: i})}>
          
            <NB.Tab
              heading={<NB.TabHeading style={[styles.tabStyle, styles.tabLeft, currentTab === 0 && styles.activeTabStyle]}>{
                  this._upperCase('Новости')
                }</NB.TabHeading>}
            >
              <NB.Content
                onScroll={this.onScroll}
                style={styles.tabSectionStyle}
              >
                {news ? this.renderNews(news) : <NB.Spinner color='blue' />}
              </NB.Content>
            </NB.Tab>
            <NB.Tab 
              heading={<NB.TabHeading style={[styles.tabStyle, currentTab === 1 && styles.activeTabStyle]}>{
                this._upperCase('Объявления')
              }</NB.TabHeading>} 
            >
              <NB.Content
                onScroll={this.onScroll}
                style={styles.tabSectionStyle}
              >
                {advertisement ? this.renderUpdates(advertisement) : <NB.Spinner color='blue' />}
              </NB.Content>
            </NB.Tab>
            <NB.Tab 
              heading={<NB.TabHeading style={[styles.tabStyle, styles.tabRight, currentTab === 2 && styles.activeTabStyle]}>{
                this._upperCase('Мероприятия')
              }</NB.TabHeading>}
            >
              <NB.Content
                onScroll={this.onScroll}
                style={styles.tabSectionStyle}
              >
                {event ? this.renderEvents(event) : <NB.Spinner color='blue' />}
              </NB.Content>
            </NB.Tab>
          </NB.Tabs>
        </RN.Animated.ScrollView>
        <FooterSection
          userStatus = {userStatus}
          navigate={navigation.navigate}
        />
      </NB.Container>
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
