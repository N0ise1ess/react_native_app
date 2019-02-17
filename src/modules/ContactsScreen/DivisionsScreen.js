import { Container, Content, Icon, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ButtonBack, FooterSection } from '../shared/components';
import styles from './styles/divisionsStyles';

const itemList = [
  {
    title: 'Академия, институты, факультеты,\nкафедры и учебные центры',
  },
  {
    title: 'Административно-управленческие подразделения',
  },
  {
    title: 'Научно-исследовательская часть',
  },
  {
    title: 'Подразделение воспитательной и социальной сферы',
  },
  {
    title: 'Подразделение обслуживания',
  },
];

class DivisionsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitleStyle: {
      paddingLeft: 0,
      marginLeft: 0,
      fontSize: 16,
      fontWeight: 'normal',
    },
    title: 'Подразделения',
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
              <ListItem
                button
                onPress={() => navigation.navigate(item.route ? item.route : '')}
                style={styles.listItemStyle}
              >
                <Text style={styles.titleStyle}>{item.title}</Text>
                <Icon type="Ionicons" name="ios-arrow-round-forward" style={styles.iconStyle} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DivisionsScreen);
