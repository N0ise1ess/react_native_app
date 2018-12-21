import React from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';

const FooterSection = ({ userStatus, navigate }) => {

  console.log('userStatus', userStatus);
  return <Footer style={{backgroundColor: '#163D7D',}}>
    <FooterTab style={{backgroundColor: '#163D7D',}}>
      <Button
        vertical
        onPress={() => navigate('')}>
        {userStatus !== 'guest' && <Icon type="Entypo" name="wallet" style={{fontSize: 28,color: '#fff'}} />}
      </Button>
      <Button
        vertical
        onPress={() => navigate('')}>
        {userStatus !== 'guest' && <Icon type="Ionicons" name="text" style={{fontSize: 28,color: '#fff'}} />}
      </Button>
      <Button
        vertical
        onPress={() => navigate('TimeTable')}>
        <Icon type="EvilIcons" name="calendar" style={{fontSize: 28,color: '#fff'}} />
      </Button>
      <Button
        vertical
        onPress={() => navigate('')}>
        <Icon type="Ionicons" name="notifications" style={{fontSize: 28,color: '#fff'}} />
      </Button>
      <Button
        vertical
        onPress={() => navigate('Home')}>
        <Icon type="Ionicons" name="menu" style={{fontSize: 28,color: '#fff'}} />
      </Button>
    </FooterTab>
  </Footer>;
}

export default FooterSection;
