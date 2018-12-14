import React from 'react';
import {
  Container
} from 'native-base';
import styles from './styles';

export function MainView (props) {
  return <Container style={styles.container}>
    {props.children}
  </Container>
}
