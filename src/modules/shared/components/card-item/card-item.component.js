import { Card, Text } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function CardItem(props) {
  if (props.image && props.title) {
    return (
      <TouchableOpacity onPress={props.navigate}>
        <Card style={styles.cardStyle}>
          <View style={styles.borderStyle}>
            <Image source={props.image} style={styles.imageStyle} />
            <View style={styles.textSectionStyle}>
              <Text style={styles.textStyle}>{props.title}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  } else {
    return <View style={[{ visibility: 'hidden' }, styles.cardStyle]} />;
  }
}
