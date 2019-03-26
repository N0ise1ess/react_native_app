import { Container, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CustomIcon } from '../../../shared/components/custom-icon';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';

const itemList = [
  {
    title: 'Запрос на выдачу литературы',
    image: 'info_1',
  },
  {
    title: 'Заявка на подбор литературы',
    route: 'RequestsLibrary',
    image: 'file',
  },
  {
    title: 'Информация о запросах на выдачу',
    route: 'RequestsInfo',
    image: 'info_2',
  }
];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Библиотека. Услуги',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  render() {
    const { userStatus, navigation } = this.props;
    const {styles} = this.state;
    return (
      <Container style={styles.container}>
        <List
          scrollEnabled={false}
          style={styles.listStyle}
          dataArray={itemList}
          renderRow={item => (
            <ListItem
              button
              onPress={() => this.props.navigation.navigate(item.route ? item.route : '')}
              style={styles.listItemStyle}
            >
              <CustomIcon name={item.image} style={styles.iconStyle} />
              <Text style={styles.textStyle}>{item.title}</Text>
            </ListItem>
          )}
        />
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

export const ServicesScreen = connect(
  mapStateToProps,
  null,
)(InnerComponent);
