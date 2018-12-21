import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'native-base';

import styles from './styles';

import { img_rb } from '../../assets/images';


export default function CardItem(props) {
    return <TouchableOpacity onPress={props.navigate}>
      <Card style={styles.cardStyle}>
        <View style={styles.borderStyle}>
          <Image source={props.image} style={styles.imageStyle} />
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
      </Card>
    </TouchableOpacity>
}
