import m from 'moment/min/moment-with-locales';
import * as NB from 'native-base';
import React, { Component } from 'react';
import * as RN from 'react-native';
import ImageSlider from 'react-native-image-slider';
import { connect } from 'react-redux';

import { getAllNews, getNewsPagination } from '../../../../actions/newsAction';
import { News } from '../../components';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';

import * as settingsFonts from '../../../../constants/styles';
import {getSizeFonts} from '../../../shared/functions/styles';

const { height: NAVBAR_HEIGHT } = RN.Dimensions.get('window');
const imagesOnLoading = [{ isLoading: true }];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Новости университета',
      headerLeft: <ButtonBack onPress={() => navigation.replace('Home')} />,
    };
  };
  constructor(props) {
    super(props);

    this.state = {
      slider: props.slider,
      isSliderShown: true,
      currentTab: 0,
      styles: styles(props.fontSize),
    };
    this.scroll = new RN.Animated.Value(0);
    this.headerY = RN.Animated.multiply(RN.Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT / 5), -1);
  }

  componentWillMount() {
    // this.props.getAllNews();
    m.locale('ru');
  }

  renderNews = data => <React.Fragment>
      <RN.FlatList
        data={data}
        renderItem={({item, index}) => <News
          fontSize={this.props.fontSize}
          key={index}
          title={item.title}
          time={item.time}
          image={item.image}
          description={item.text}
          isTruncate={true}
          onPress={() =>
            this.props.navigation.navigate('NewsDetails', {
              newsType: 'news',
              title: item.title,
              time: item.time,
              image: item.image,
              description: item.text,
            })
          }
        />}
      />
      <RN.View style={{flexDirection: "row", justifyContent: "center"}}>
        { this.props.isLoadingNews ? <NB.Spinner color="blue" /> :
          <NB.Button style={this.state.styles.buttonsPagination} onPress={() => this.props.getNews(this.props.newsPage + 1)}>
            <RN.Text style={this.state.styles.textEventWhite}>Показать еще</RN.Text>
          </NB.Button>}
      </RN.View>
    </React.Fragment>

  renderUpdates = updates => {
    return updates.map((item, index) => (
      <News
        fontSize={this.props.fontSize}
        newsType="advertisement"
        key={index}
        title={item.title}
        time={item.time}
        description={item.text}
        isTruncate={true}
        onPress={() =>
          this.props.navigation.navigate('NewsDetails', {
            newsType: 'advertisement',
            title: item.title,
            time: item.time,
            description: item.text,
          })
        }
      />
    ));
  };

  renderEvents = events => {
    return events.map((item, index) => (
      <RN.View key={index}>
        <NB.Text style={styles.textEvent}>
          {m(item.time)
            .format('LL')
            .replace('г.', '')}
        </NB.Text>
        <News newsType="events" key={index} title={item.title} description={item.text} />
      </RN.View>
    ));
  };

  renderSlider = (slider, styles) => {
    return (
      <ImageSlider
        style={styles.customSlide}
        loopBothSides
        images={slider}
        customSlide={({ index, item }) => (
          <RN.View
            key={index}
            style={[
              { width: RN.Dimensions.get('window').width },
              item.isLoading && {
                backgroundColor: 'silver',
                justifyContent: 'center',
                alignItems: 'center',
                height: NAVBAR_HEIGHT / 5,
              },
            ]}
          >
            {item.isLoading ? (
              <NB.Spinner color="blue" />
            ) : (
              <RN.Image source={{ uri: `data:image/png;base64,${item.image}` }} style={styles.sliderImage} />
            )}
          </RN.View>
        )}
        customButtons={(position, move) => (
          <RN.View style={styles.buttons}>
            {slider.map((image, index) => {
              return (
                <RN.View key={index} style={styles.button}>
                  {/* <NB.Icon
                    onPress={() => move(index)}
                    type="Octicons"
                    name="primitive-dot"
                    style={[{ color: '#163D7D', fontSize: 18 }, position === index && styles.buttonSelected]}
                  /> */}
                  <RN.View style={[
                    {backgroundColor: '#163D7D',
                     width: 10, 
                     height: 10, 
                     borderRadius: 20, 
                     marginLeft: 5, 
                     marginRight: 5,}, 
                    position === index && styles.buttonSelected]
                  }/>
                </RN.View>
              );
            })}
          </RN.View>
        )}
      />
    );
  };

  onScroll = event => {
    if (event.nativeEvent.contentOffset.y > 20) {
      this.setState({ isSliderShown: false });
    } else if (event.nativeEvent.contentOffset.y < 20) {
      this.setState({ isSliderShown: true });
    }
  };

  _upperCase(word) {
    return <NB.Text style={this.state.styles.tabTitleStyle}>{word.toUpperCase()}</NB.Text>;
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  render() {
    const { slider, news, advertisement, event, userStatus, navigation } = this.props;
    const { isSliderShown, currentTab } = this.state;
    const tabY = RN.Animated.add(this.scroll, this.headerY);
    const {styles} = this.state;

    return (
      <NB.Container>
        <RN.Animated.View
          style={[
            styles.sliderContainer,
            {
              transform: [
                {
                  translateY: this.headerY,
                },
              ],
            },
          ]}
        >
          {isSliderShown && (slider ? this.renderSlider(slider, styles) : this.renderSlider(imagesOnLoading, styles))}
        </RN.Animated.View>
        <RN.Animated.ScrollView
          contentContainerStyle={{ paddingTop: NAVBAR_HEIGHT / 5 }}
          scrollEventThrottle={1}
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{fontSize:getSizeFonts(settingsFonts.FONT_SIZE_12, this.props.fontSize), zIndex: 0, backgroundColor: '#CED8DA' }}
          onScroll={RN.Animated.event([{ nativeEvent: { contentOffset: { y: this.scroll } } }], {
            useNativeDriver: true,
          })}
          ref={ref => (this._scrollView = ref)}
        >
          <NB.Tabs
            renderTabBar={props => (
              <RN.Animated.View
                style={[
                  {
                    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, this.props.fontSize),
                    transform: [{ translateY: tabY }],
                    zIndex: 1,
                    width: '100%',
                    backgroundColor: '#CED8DA',
                  },
                  RN.Platform.OS === 'ios' ? { paddingTop: 20 } : null,
                ]}
              >
                <NB.ScrollableTab
                  {...props}
                  style={{ backgroundColor: '#CED8DA' }}
                  underlineStyle={{ backgroundColor: 'transparent' }}
                />
              </RN.Animated.View>
            )}
            onChangeTab={({ i }) => {
              this._scrollView.getNode().scrollTo({
                y: 0,
                animated: true,
              });
              this.setState({ currentTab: i });
            }}
          >
            <NB.Tab
              heading={
                <NB.TabHeading style={[styles.tabStyle, styles.tabLeft, currentTab === 0 && styles.activeTabStyle]}>
                  {this._upperCase('Новости')}
                </NB.TabHeading>
              }
            >
              <NB.Content onScroll={this.onScroll} style={styles.tabSectionStyle}>
                {news ? this.renderNews(news) : <NB.Spinner color="blue" />}
              </NB.Content>
            </NB.Tab>
            <NB.Tab
              heading={
                <NB.TabHeading style={[styles.tabStyle, currentTab === 1 && styles.activeTabStyle]}>
                  {this._upperCase('Объявления')}
                </NB.TabHeading>
              }
            >
              <NB.Content onScroll={this.onScroll} style={styles.tabSectionStyle}>
                {advertisement ? this.renderUpdates(advertisement) : <NB.Spinner color="blue" />}
              </NB.Content>
            </NB.Tab>
            <NB.Tab
              heading={
                <NB.TabHeading style={[styles.tabStyle, styles.tabRight, currentTab === 2 && styles.activeTabStyle]}>
                  {this._upperCase('Мероприятия')}
                </NB.TabHeading>
              }
            >
              <NB.Content onScroll={this.onScroll} style={styles.tabSectionStyle}>
                {event ? this.renderEvents(event) : <NB.Spinner color="blue" />}
              </NB.Content>
            </NB.Tab>
          </NB.Tabs>
        </RN.Animated.ScrollView>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </NB.Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.newsReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = dispatch => ({
  getAllNews: () => dispatch(getAllNews()),
  getNews: (page) => dispatch(getNewsPagination(page)),
  dispatch,
});

export const NewsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
