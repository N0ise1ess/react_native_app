import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Card, Text } from 'native-base';

import styles from './styles';

import { img_rb } from '../../assets/images';


export default function CardItem(props) {
    return <TouchableOpacity onPress={() => console.log('asdasd')}>
      <Card style={styles.cardStyle}>
        <Image source={props.image} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{props.title}</Text>
      </Card>
    </TouchableOpacity>
}
