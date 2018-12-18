import React from 'react';
import { Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import HTML from 'react-native-render-html';

import styles from './styles';

const { width, height } = Dimensions.get('window');

const htmlProps = {
  onLinkPress: (evt, href) => { Linking.openURL(href); },
}
export const News = (props) => {
  return (
    <TouchableOpacity disabled={!props.onPress} onPress={props.onPress}>
      <Card>
        {props.image && <Image style={styles.imageStyle} source={{uri: `data:image/png;base64,${props.image}`}} />}
        <CardItem>
          <Text>{props.time && props.time}</Text>
        </CardItem>
        <CardItem header>
          {props.newsType === 'advertisement' ?
            <HTML {...htmlProps} html={props.title && props.title} imagesMaxWidth={width} /> :
            <Text style={styles.titleStyle}>{props.title && props.title}</Text>}
        </CardItem>
        <CardItem>
          <Body>
            <HTML html={props.description && props.description} imagesMaxWidth={width} />
          </Body>
        </CardItem>
     </Card>
    </TouchableOpacity>)
}
