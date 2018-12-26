import React from 'react';
import { Image } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

import {
  img_menu_white,
  img_notification_white,
  img_timetable_white,
  img_chat_white,
  img_finance_white
} from '../../assets/images';
import styles from './styles';

const FooterSection = ({ userStatus, navigate }) => {

  console.log('userStatus', userStatus);
  return <Footer style={{backgroundColor: '#163D7D',}}>
    <FooterTab style={{backgroundColor: '#163D7D',}}>
      <Button
        vertical
        onPress={() => navigate('')}>
        {userStatus !== 'guest' && <Image source={img_finance_white} style={styles.image} />}
      </Button>
      <Button
        vertical
        onPress={() => navigate('')}>
        {userStatus !== 'guest' && <Image source={img_chat_white} style={styles.image} />}
      </Button>
      <Button
        vertical
        onPress={() => navigate('TimeTable')}>
        <Image source={img_timetable_white} style={styles.image} />
      </Button>
      <Button
        vertical
        onPress={() => navigate('')}>
        <Image source={img_notification_white} style={styles.image} />
      </Button>
      <Button
        vertical
        onPress={() => navigate('Home')}>
        <Image source={img_menu_white} style={styles.image} />
      </Button>
    </FooterTab>
  </Footer>;
}

export default FooterSection;
