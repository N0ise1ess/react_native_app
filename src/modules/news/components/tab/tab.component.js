import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spinner, Text } from 'native-base';
import m from 'moment/min/moment-with-locales';
import {Navigation} from 'react-native-navigation';
import { FlatList, News } from '../';

export class Tab extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    m.locale('ru');
  }

  renderNews = item => <News
    fontSize={this.props.fontSize}
    title={item.title}
    time={item.time}
    image={item.image}
    description={item.text}
    isTruncate={true}
    onPress={() => Navigation.push(this.props.componentId, {
        component: {
          name: 'NewsDetails',
        },
        passProps: {
          newsType: 'news',
          title: item.title,
          time: item.time,
          image: item.image,
          description: item.text,
        }
      })
    }
  />

  renderUpdates = item => <News
    fontSize={this.props.fontSize}
    newsType='advertisement'
    title={item.title}
    time={item.time}
    description={item.text}
    isTruncate={true}
    onPress={() => Navigation.push(this.props.componentId, {
        component: {
          name: 'NewsDetails',
        },
        passProps: {
          newsType: 'advertisement',
        title: item.title,
        time: item.time,
        description: item.text,
        }
      })
    }
  />

  renderEvents = item => <View>
    <Text
      style={{textAlign: 'center', color: '#053c81'}}
    >
      {m(item.time).format('LL')}
    </Text>
    <News
      fontSize={this.props.fontSize}
      newsType='events'
      time={item.time}
      typeTime={'hour'}
      title={item.title}
      description={item.text}
    />
  </View>

  render() {
    return (<React.Fragment>
      <FlatList
        data={this.props[this.props.route.key]}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={1}
        onEndReached={() => this.props.route.key === 'news'
          && !this.props.isLoadingNews
          && this.props.getNews(this.props.newsPage + 1)}
        tabRoute={this.props.route.key}
        renderItem={({ item, index }) => (<React.Fragment>
          {index === 0 && <View style={{height: 170}}></View>}
          {this.props.route.key === 'news' && this.renderNews(item)}
          {this.props.route.key === 'advertisement' && this.renderUpdates(item)}
          {this.props.route.key === 'event' && this.renderEvents(item)}
        </React.Fragment>)}
      />
      {
        this.props.route.key === 'news'
        && this.props.isLoadingNews
        && <Spinner color="blue" />
      }
    </React.Fragment>
    );
  }
}