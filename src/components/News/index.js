import React from 'react';
import { Image, Dimensions, TouchableOpacity, Linking, Alert } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import m from 'moment/min/moment-with-locales';
import HTML from 'react-native-render-html';

import styles from './styles';

const { width, height } = Dimensions.get('window');

const htmlProps = {
  onLinkPress: (evt, href) => {
    console.log(href);
    Alert.alert(
      'Хотите открыть ссылку в браузере?',
      'чтобы открыть ссылку ...',
      [
        {text: 'Открыть в браузере', onPress: () => Linking.openURL(href).catch(err => console.error('An error occurred', err))},
        {text: 'Отмена', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  },
}

export const News = (props) => {
  m.locale('ru');
  const cleanText = props.description && props.description.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <TouchableOpacity style={styles.cardItem} disabled={!props.onPress} onPress={props.onPress}>
      <Card>
        {props.image && <Image style={styles.imageStyle} source={{uri: `data:image/png;base64,${props.image}`}} />}
        {props.time && <CardItem style={styles.sectionTime}>
          <Text style={styles.timeStyle}>{props.time && m(props.time).format('LL').replace("г.", "")}</Text>
        </CardItem>}
        <CardItem header style={styles.sectionTitle}>
          {props.newsType === 'advertisement' ?
            <HTML {...htmlProps} html={props.title && props.title} imagesMaxWidth={width} /> :
            <Text style={styles.titleStyle}>{props.title && props.title}</Text>}
        </CardItem>
        <CardItem style={styles.sectionText}>
          <Body>
            {props.description && (props.isTruncate ?
              <Text style={styles.textStyle} numberOfLines={3}>{cleanText}</Text> :
              <HTML
                {...htmlProps}
                html={props.description}
                imagesMaxWidth={width}
              />)}
          </Body>
        </CardItem>
     </Card>
    </TouchableOpacity>)
}
