import React from 'react';
import { Image } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

import styles from './styles';
import CustomIcon from '../CustomIcon'

const FooterSection = ({ userStatus, navigate }) => {

  console.log('userStatus', userStatus);
  return <Footer style={{backgroundColor: '#163D7D',}}>
    <FooterTab style={{backgroundColor: '#163D7D',}}>
      <Button
        vertical
        onPress={() => navigate('Finance')}>
        {userStatus !== 'guest' && <CustomIcon name={"finance"} style={styles.image} />}
      </Button>
      <Button
        vertical
        onPress={() => navigate('Chat')}>
        {userStatus !== 'guest' && <CustomIcon name={"chat_2"} style={styles.image} />}
      </Button>
      <Button
        vertical
        onPress={() => navigate('TimeTable')}>
        <CustomIcon name={"schedule"} style={styles.image} />
      </Button>
      <Button
        vertical
        onPress={() => navigate('Notifications')}>
        <CustomIcon name={"notification_2"} style={styles.image} />
      </Button>
      <Button
        vertical
        onPress={() => navigate('Home')}>
        <CustomIcon name={"menu"} style={styles.image} />
      </Button>
    </FooterTab>
  </Footer>;
}

export default FooterSection;
