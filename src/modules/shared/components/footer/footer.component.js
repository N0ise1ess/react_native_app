import React from 'react';
import { Footer, FooterTab, Button } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { CustomIcon } from '..';
import { Navigation } from 'react-native-navigation';

const navigate = (screen, componentId) => Navigation.push(componentId, {
  component: {
    name: screen,
  }
});

export const FooterSection = ({ userStatus, componentId, maxHeight }) => {
  console.log('userStatus', userStatus);
  return (
    <Footer style={[{ backgroundColor: '#163D7D' }, maxHeight ? { maxHeight: maxHeight } : {}]}>
      <FooterTab style={{ backgroundColor: '#163D7D' }}>
        <TouchableOpacity style={styles.button} onPress={() => componentId !== 'Finance' 
          && navigate('Finance', componentId)}>
          {userStatus !== 'guest' && <CustomIcon name={'finance'} style={styles.image} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => componentId !== 'Chat' 
          && navigate('Chat', componentId)}>
          {userStatus !== 'guest' && <CustomIcon name={'chat_2'} style={styles.image} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => componentId !== 'TimeTable' 
          && navigate('TimeTable', componentId)}>
          <CustomIcon name={'schedule'} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => componentId !== 'Notifications' 
          && navigate('Notifications', componentId)}>
          <CustomIcon name={'notification_2'} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => componentId !== 'Home' 
          && navigate('Home', componentId)}>
          <CustomIcon name={'menu'} style={styles.image} />
        </TouchableOpacity>
      </FooterTab>
    </Footer>
  );
};
