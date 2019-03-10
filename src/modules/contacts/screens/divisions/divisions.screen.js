import {Button, Container, Content, Icon, Input, Item, List, ListItem, Spinner, Text} from 'native-base';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Linking, View} from 'react-native';

import {ButtonBack, CustomIcon, FooterSection} from '../../../shared/components';
import {styles} from './styles';
import {getDepartments} from "../../../../actions/contactsAction";
import {DivisionInfo} from "./division.info/division.info";


class InnerComponent extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitleStyle: {
      paddingLeft: 0,
      marginLeft: 0,
      fontSize: 16,
      fontWeight: 'normal',
    },
    title: navigation.getParam("currentTitle") || 'Подразделения',
    headerLeft: <ButtonBack onPress={navigation.getParam("customGoBack",() => {})}/>,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      searchedDepartments: [],
      steps: {
        counter: 0,
        prevTitle : null
      },
      toggledId : null
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({customGoBack: this.handleBackArrow});
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  render() {
    const {userStatus, navigation, token, departments, departmentsLoading} = this.props;
    const { styles, searchedDepartments } = this.state;
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
                  onPress={() => this.getIntoNextDepartments(item.departments, item.name, item.id)}
                  style={styles.listItemStyle}
                >
                  <View style={{flex:1 , width : '100%'}}>
                    <View style={{flexDirection: 'row', paddingRight: 20}}>
                      <CustomIcon
                        style={{
                          width: 32,
                          height: 32,
                          marginLeft: 15,
                          marginRight: 15,
                          fontSize: 30,
                          color: '#2386e1',
                        }}
                        name="university"
                      />
                      <Text style={styles.titleStyle}>{item.name}</Text>
                      <Icon type="Ionicons" name="ios-arrow-round-forward" style={styles.iconStyle}/>
                    </View>
                    <DivisionInfo item={item}
                                  fontSize={this.props.fontSize}
                                  ref={component => this[item.id] = component}/>
                  </View>
                </ListItem>
              )}
            /> : <Spinner color='#163D7D' style={{justifyContent: 'center', alignItems: 'center'}}/>
          }
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate}/>
      </Container>
    )
  }

  getIntoNextDepartments(nextDepartments, name, id) {
    let steps = Object.assign({}, this.state.steps)
    const { toggledId } = this.state;
    if (nextDepartments !== null && nextDepartments.length > 0) {
      if (toggledId) {
        this[toggledId].collapse()
        this.setState({toggledId: null})
      }
      steps.counter++;
      steps[`step${steps.counter}`] = nextDepartments;
      steps[`prevTitle${steps.counter}`] = name
      this.setState({steps})
      this.setState({ searchedDepartments : steps[`step${steps.counter}`]})
      this.props.navigation.setParams({currentTitle: name});
    } else {
      //Самое первое нажатие
      if (!toggledId) {
        this[id].toggle();
        this.setState({toggledId: id})
      }
      //Нажали на другой, тогда уже нажатый закрываем и открываем новый
      if (toggledId && toggledId !== id) {
        this[toggledId].toggle()
        this[id].toggle();
        this.setState({toggledId: id})
      }
      //Уже был нажат, тогда закрываем уже открытый
      if (toggledId && toggledId === id) {
        this[id].toggle();
        this.setState({toggledId: null})
      }
    }
  };

  handleBackArrow = () => {
    let steps = Object.assign({}, this.state.steps)
    const { toggledId } = this.state;
    if (toggledId) {
      this[toggledId].collapse()
      this.setState({toggledId: undefined})
    }
    this.props.navigation.setParams({currentTitle: steps[`prevTitle${steps.counter - 1}`]});
    if (steps.counter - 1 === 0) {
      this.setState({ searchedDepartments : this.props.departments});
      steps.counter--;
      this.setState({steps})
      return
    }
    if (steps[`step${steps.counter - 1}`]) {
      this.setState({ searchedDepartments : steps[`step${steps.counter - 1}`]});
      steps.counter--;
      this.setState({steps})
    } else {
      this.props.navigation.goBack();
    }
  };

  onHandleSubmit = () => {
    const {searchedText} = this.state;
    this.props.getDepartments(searchedText.trim());
    this.setState({ searchedDepartments : []})
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
