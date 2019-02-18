import {Button, Container, Content, Icon, Input, Item, List, ListItem, Text} from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import {getDepartments} from "../../../../actions/contactsAction";

const itemList = [
  {
    name: 'Академия, институты, факультеты,\nкафедры и учебные центры',
  },
  {
    name: 'Административно-управленческие подразделения',
  },
  {
    name: 'Научно-исследовательская часть',
  },
  {
    name: 'Подразделение воспитательной и социальной сферы',
  },
  {
    name: 'Подразделение обслуживания',
  },
];

class InnerComponent extends Component {
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
    const { userStatus, navigation, token, departments } = this.props;
    return (
      <Container style={styles.container}>
        <Item style={styles.searchBar}>
          <Icon name="ios-search" style={styles.searchIcon} />
          <Input
            style={styles.searchInput}
            placeholder="Поиск по подразделениям"
            value={this.state.searchedText}
            onChangeText={text => this.setState({ searchedText: text })}
          />
          <Button transparent onPress={this.onHandleSubmit}>
            <Text>Найти</Text>
          </Button>
        </Item>
        <Content>
          <List
            style={styles.listStyle}
            dataArray={departments.length < 0 ?itemList : departments}
            renderRow={item => (
              <ListItem
                button
                onPress={() => navigation.navigate(item.route ? item.route : '')}
                style={styles.listItemStyle}
              >
                <Text style={styles.titleStyle}>{item.name}</Text>
                <Icon type="Ionicons" name="ios-arrow-round-forward" style={styles.iconStyle} />
              </ListItem>
            )}
          />
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }

  onHandleSubmit = () => {
    const { searchedText } = this.state;
    this.props.getDepartments(searchedText);
  };
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.departmentReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  getDepartments: (searchedText) => dispatch(getDepartments(searchedText)),
  dispatch,
});

export const DivisionsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
