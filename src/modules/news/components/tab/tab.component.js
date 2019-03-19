import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spinner, Text } from 'native-base';
import m from 'moment/min/moment-with-locales';
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
    time={m(item.time)
      .format('LL')
      .replace('г.', '')}
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
  />

  renderUpdates = item => <News
    fontSize={this.props.fontSize}
    newsType='advertisement'
    title={item.title}
    time={m(item.time)
      .format('LL')
      .replace('г.', '')}
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

  renderEvents = item => <View>
    <Text
    >
      {m(item.time).format('LL').replace('г.', '')}
    </Text>
    <News
      fontSize={this.props.fontSize}
      newsType='events'
      time={m(item.time).format('HH:mm') !== '00:00'
        ? m(item.time).format('HH:mm') : 'Весь день'}
      title={item.title}
      description={item.text}
    />
  </View>

  render() {
    return (<React.Fragment>
      <FlatList
        style={styles.wrapper}
        data={this.props[this.props.route.key]}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={1}
        onEndReached={() => this.props.route.key === 'news' 
          && !this.props.isLoadingNews
          && this.props.getNews(this.props.newsPage + 1)}
        tabRoute={this.props.route.key}
        renderItem={({ item }) => (<React.Fragment>
          {this.props.route.key === 'news' && this.renderNews(item)}
          {this.props.route.key === 'advertisement' && this.renderUpdates(item)}
          {this.props.route.key === 'event' && this.renderEvents(item)}
        </React.Fragment>)}
      />
      {
        this.props.route.key === 'news' 
        && this.props.isLoadingNews
        && <Spinner/>
      }
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15
  },
  item: {
    height: 150,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: 'rgb(75, 89, 101)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  }
})