import React from 'react';
import { Image, Dimensions, TouchableOpacity, Linking, Alert } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import HTML from 'react-native-render-html';
import m from 'moment/min/moment-with-locales';

// m.locale('ru');

import { styles } from './styles/news.styles'

const { width, height } = Dimensions.get('window');

const htmlProps = {
  onLinkPress: (evt, href) => {
    console.log(href);
    Alert.alert(
      'Переход по внешней ссылке. Открыть ссылку в браузере?',
      '',
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

renderTime = (time) => {
  const formatTime = m(time).format('LL').replace('г.', '');
  if (formatTime === m().format('LL').replace('г.', '')) return 'Сегодня';
  return formatTime;
}

export const News = props => {
  const cleanText = props.description && props.description.replace(/<\/?[^>]+(>|$)/g, '');
  const textWithoutEmptyLines = cleanText;
  const cleanTitle = props.title && props.title.replace(/<\/?[^>]+(>|$)/g, '');
  const titleWithoutEmptyLines = cleanTitle.replace(/\r?\n|\r/, '');
  const style = styles(props.fontSize);
  return (
    <TouchableOpacity activeOpacity={1} style={style.cardItem} disabled={!props.onPress} onPress={props.onPress}>
      <Card>
        {props.image && <Image style={style.imageStyle} source={{ uri: props.image }} />}
        {props.time && (
          <CardItem style={style.sectionTime}>
            <Text style={style.timeStyle}>
              {props.typeTime === 'hour' && (m(props.time).format('HH:mm') !== '00:00'
                ? m(props.time).format('HH:mm') : 'Весь день') || renderTime(props.time)}
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
                  <HTML
                    tagsStyles={{
                      p: {
                        color: '#979797',
                      }
                    }}
                    baseFontStyle={style.textStyle}
                    allowFontScaling
                    {...htmlProps}
                    html={props.description}
                    imagesMaxWidth={width}
                  />
                ))}
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};
