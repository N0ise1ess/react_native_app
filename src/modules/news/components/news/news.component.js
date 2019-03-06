import React from 'react';
import { Image, Dimensions, TouchableOpacity, Linking, Alert } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import m from 'moment/min/moment-with-locales';
import HTML from 'react-native-render-html';

import { styles } from './styles/news.styles'

const { width, height } = Dimensions.get('window');

const htmlProps = {
  onLinkPress: (evt, href) => {
    console.log(href);
    Alert.alert(
      'Хотите открыть ссылку в браузере?',
      'чтобы открыть ссылку ...',
      [
        {
          text: 'Открыть в браузере',
          onPress: () => Linking.openURL(href).catch(err => console.error('An error occurred', err)),
        },
        { text: 'Отмена', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      ],
      { cancelable: false },
    );
  },
};

export const News = props => {
  m.locale('ru');
  const cleanText = props.description && props.description.replace(/<\/?[^>]+(>|$)/g, '');
  const textWithoutEmptyLines = cleanText.replace(/\r?\n|\r/, '');
  const cleanTitle = props.title && props.title.replace(/<\/?[^>]+(>|$)/g, '');
  const titleWithoutEmptyLines = cleanTitle.replace(/\r?\n|\r/, '');
  const style = styles(props.fontSize);
  return (
    <TouchableOpacity activeOpacity={1} style={style.cardItem} disabled={!props.onPress} onPress={props.onPress}>
      <Card>
        {props.image && <Image style={style.imageStyle} source={{ uri: `data:image/png;base64,${props.image}` }} />}
        {props.time && (
          <CardItem style={style.sectionTime}>
            <Text style={style.timeStyle}>
              {props.time}
            </Text>
          </CardItem>
        )}
        <CardItem header style={style.sectionTitle}>
          {props.newsType === 'advertisement' ? (
            <Text style={style.titleStyle}>{titleWithoutEmptyLines}</Text>
          ) : (
            <Text style={style.titleStyle}>{props.title && props.title}</Text>
          )}
        </CardItem>
        <CardItem style={style.sectionText}>
          <Body>
            {props.description &&
              (props.isTruncate ? (
                <Text style={style.textStyle} numberOfLines={3}>
                  {textWithoutEmptyLines}
                </Text>
              ) : (
                <HTML baseFontStyle={style.textStyle} allowFontScaling {...htmlProps} html={props.description} imagesMaxWidth={width} />
              ))}
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};
