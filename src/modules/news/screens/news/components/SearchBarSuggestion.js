import React from 'react';
import { FlatList, Text } from 'react-native';
// import { ListItem } from 'react-native-elements';

export default class SeachBarSuggestion extends React.Component {
  state = {
    suggestion: [
      {id: 1, title: 'suggestion'},
      {id: 2, title: 'suggestion'},
      {id: 3, title: 'suggestion'}
    ]
  }

  render() {
    return (
      <FlatList
        data={this.state.suggestion}
        renderItem={({item}) => (
          <Text key={item.id}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
} 