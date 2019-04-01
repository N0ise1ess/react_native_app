import React from 'react';
import { Footer, FooterTab, Button } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { CustomIcon } from '..';
import { Navigation } from 'react-native-navigation';

const navigate = (screen, componentId, passProps) => Navigation.push(componentId, {
  component: {
    name: screen,
    passProps,
  }
});

export const FooterSection = ({ userStatus, componentId, maxHeight, firstName, secondName, lastName, navPosition }) => {
  console.log(componentId);
  
  return (
    <Footer style={[{ backgroundColor: '#163D7D' }, maxHeight ? { maxHeight: maxHeight } : {}]}>
      <FooterTab style={{ backgroundColor: '#163D7D' }}>
        <TouchableOpacity style={styles.button} onPress={() => navPosition !== 'Finance' 
          && navigate('Finance', componentId)}>
          {userStatus !== 'guest' && <CustomIcon name={'finance'} style={styles.image} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navPosition !== 'Chat' 
          && navigate('Chat', componentId)}>
          {userStatus !== 'guest' && <CustomIcon name={'chat_2'} style={styles.image} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navPosition !== 'TimeTable' 
          && navigate('TimeTable', componentId)}>
          <CustomIcon name={'schedule'} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navPosition !== 'Notifications' 
          && navigate('Notifications', componentId)}>
          <CustomIcon name={'notification_2'} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navPosition !== 'Home' 
          && navigate('Home', componentId, {firstName, secondName, lastName, userStatus})}>
          <CustomIcon name={'menu'} style={styles.image} />
        </TouchableOpacity>
      </FooterTab>
    </Footer>
  );
};
