import React from 'react';
import { StyleSheet, Dimensions, Animated, View, TouchableOpacity, Text, } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';

import { getNewsPagination, getUpdatesPagination, getEventsPagination } from '../../../../actions/newsAction';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { SearchBarProvider, Tab, Head } from '../../components';
import SearchBarSuggestion from './components/SearchBarSuggestion';

import { styles as myStyles } from './styles';

const initialLayout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 130,
};

class InnerComponent extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Новости университета',
      headerLeft: <ButtonBack onPress={() => navigation.replace('Home')} />,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      currentTab: 'news',
      routes: [
        { key: 'news', title: 'Новости' },
        { key: 'advertisement', title: 'Объявления' },
        { key: 'event', title: 'Мероприятия' },
      ],
      styles: myStyles(props.fontSize),
    };
  }

  _handleIndexChange = index => {
    this.setState({
      currentTab: this.state.routes[index].key,
      index
    });
  }

  _getLabelText = ({ route }) => route.title;

  _upperCase(word) {
    return <Text allowFontScaling={false} style={this.state.styles.tabTitleStyle}>{word.toUpperCase()}</Text>;
  }

  _renderHeader = (animation, canJumpToTab) => props => (
    <Head
      animation={animation}
      slider={this.props.slider}
      imagesOnLoading={this.props.imagesOnLoading}
      changeInputFocus={suggestionFocus =>
        this.setState({ suggestionFocus })
      }
      renderTabBar={() =>
        <View
          style={this.state.styles.tabbarBox}
        >{
            props.navigationState.routes.map((route, i) => (<TouchableOpacity
              key={i}
              onPress={() => {
                if (route.key != this.state.currentTab && canJumpToTab) {
                  animation.onTabPress(route);
                  this.setState({ currentTab: route.key, index: i })
                }
              }}
              style={[this.state.styles.tabStyle
                , route.key === this.state.currentTab && this.state.styles.activeTabStyle
                , i === 0 && this.state.styles.tabLeft
                , i === 2 && this.state.styles.tabRight
              ]}
            >
              {this._upperCase(route.title)}
            </TouchableOpacity>))}
        </View>
      }
    />
  );

  _renderScene = SceneMap({
    news: connect(mapStateToProps,
      mapDispatchToProps)(Tab),
    advertisement: connect(mapStateToProps,
      mapDispatchToProps)(Tab),
    event: connect(mapStateToProps,
      mapDispatchToProps)(Tab),
  });

  _renderSuggestion(animation) {
    let focus = this.state.suggestionFocus;
    if (focus) {
      let styleAnimation = animation.getStyleSuggestion();
      return (
        <Animated.View style={[initialLayout, styles.suggestionWrap, styleAnimation]}>
          <SearchBarSuggestion />
        </Animated.View>
      );
    }
  }
  componentDidUpdate(props, state) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: myStyles(this.props.fontSize) });
  }

  render() {
    const { slider, news, advertisement, event, userStatus, navigation } = this.props;

    return (
      <React.Fragment>
        <SearchBarProvider currentTab={this.state.currentTab}>
          {(animation, { canJumpToTab }) =>
            <View style={initialLayout}>
              <TabView
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderHeader(animation, canJumpToTab)}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
                swipeEnabled={true}
                canJumpToTab={() => canJumpToTab}
                useNativeDriver
              />
            </View>
          }
        </SearchBarProvider>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </React.Fragment>
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
  getNews: (page) => dispatch(getNewsPagination(page)),
  getUpdate: (page) => dispatch(getUpdatesPagination(page)),
  getEvents: (page) => dispatch(getEventsPagination(page)),
  dispatch,
});

export const NewsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edeef0'
  },
  tabbar: {
    backgroundColor: '#fff',
    elevation: 0
  },
  indicator: {
    backgroundColor: '#45688e'
  },
  label: {
    color: '#45688e',
    margin: 0,
    marginTop: 6,
    marginBottom: 6,
    fontWeight: '400'
  },
  suggestionWrap: {
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 3
  }
});