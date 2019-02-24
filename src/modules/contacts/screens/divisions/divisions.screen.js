import {Button, Container, Content, Icon, Input, Item, List, ListItem, Spinner, Text} from 'native-base';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ButtonBack, FooterSection} from '../../../shared/components';
import {styles} from './styles';
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
  static navigationOptions = ({navigation}) => ({
    headerTitleStyle: {
      paddingLeft: 0,
      marginLeft: 0,
      fontSize: 16,
      fontWeight: 'normal',
    },
    title: 'Подразделения',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()}/>,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      searchedDepartments: []
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  render() {
    const {userStatus, navigation, token, departments, departmentsLoading} = this.props;
    const {styles} = this.state;
    const { searchedDepartments } = this.state;
    return (
      <Container style={styles.container}>
        <Item style={styles.searchBar}>
          <Icon name="ios-search" style={styles.searchIcon}/>
          <Input
            style={styles.searchInput}
            placeholder="Поиск по подразделениям"
            value={this.state.searchedText}
            onChangeText={text => this.setState({searchedText: text})}
          />
          <Button transparent onPress={this.onHandleSubmit}>
            <Text style={{color: "#163D7D"}}>Найти</Text>
          </Button>
        </Item>
        <Content>
          {!departmentsLoading ?
            <List
              style={styles.listStyle}
              dataArray={searchedDepartments.length > 0 ? searchedDepartments : departments}
              renderRow={item => (
                <ListItem
                  button
                  onPress={() => this.getIntoNextDepartments(item.departments)}
                  style={styles.listItemStyle}
                >
                  <Text style={styles.titleStyle}>{item.name}</Text>
                  <Icon type="Ionicons" name="ios-arrow-round-forward" style={styles.iconStyle}/>
                </ListItem>
              )}
            /> : <Spinner color='#163D7D' style={{justifyContent: 'center', alignItems: 'center'}}/>
          }
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate}/>
      </Container>
    )

  }

  getIntoNextDepartments(nextDepartments) {
    if (nextDepartments !== null && nextDepartments.length > 0) {
      this.setState({ searchedDepartments : nextDepartments})
    } else {
      alert('Screen for detailed contacts info is being developed...')
    }
  };

  onHandleSubmit = () => {
    const {searchedText} = this.state;
    this.props.getDepartments(searchedText);
  };
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.departmentReducer,
    ...state.settings,
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
