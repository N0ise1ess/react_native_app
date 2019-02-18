import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { img_parent } from '../../../../assets/images';
import { ButtonBack, FooterSection } from '../../..//shared/components';
import { styles } from './styles';

const itemList = [
  {
    fullName: 'Иванов Яков Самойлович',
    position: 'Отец',
  },
  {
    fullName: 'Видова Аркадия Федотовна',
    position: 'Мать',
  },
  {
    fullName: 'Видова Фидора Васильевна',
    position: 'Бабушка',
  },
];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Родители',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userStatus, navigation, token } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <List
            style={styles.listStyle}
            dataArray={itemList}
            renderRow={item => (
              <ListItem button style={styles.listItemStyle} onPress={() => navigation.navigate('Parent')}>
                <Image source={img_parent} style={styles.imageStyle} />
                <View style={styles.columnStyle}>
                  <Text style={styles.titleStyle}>{item.fullName}</Text>
                  <Text style={styles.textStyle}>{item.position}</Text>
                </View>
              </ListItem>
            )}
          />
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export const ParentsListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
