import {Button, Container, Content, Icon, Input, Item, List, ListItem, Spinner, Text} from 'native-base';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Linking, View, Keyboard} from 'react-native';

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
      stepStack: [],
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
              dataArray={this.getDataList(departments)}
              renderRow={(item, _, index) => (
                <ListItem
                  button
                  onPress={() => this.handlePressNextStep(item, index)}
                  style={styles.listItemStyle}
                >
                  <View style={styles.listItemContainer}>
                    <View style={styles.listItem}>
                      <CustomIcon style={styles.iconUniversity} name="university"/>
                      <Text style={styles.titleStyle}>{item.name}</Text>
                      <Icon type="Ionicons" name="ios-arrow-round-forward" style={styles.iconStyle}/>
                    </View>
                    {/* <DivisionInfo item={item}
                                  fontSize={this.props.fontSize}
                                  ref={component => this[item.id] = component}/> */}
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

  getDataList = (data) => {
    const {stepStack} = this.state;
    
    stepStack.forEach((item) => {
      data = data[item.index].departments; 
    })
    return data;
  }

  handlePressNextStep(item, index) {
    if(item && item.departments && item.departments.length > 0) {
      const {stepStack} = this.state;
      stepStack.push({
        index,
        title: item.name,
      });
      this.props.navigation.setParams({currentTitle: item.name});
      this.setState({stepStack});
    } else {

    }
  };

  handleBackArrow = () => {
    const {stepStack} = this.state;
    if(stepStack && stepStack.length > 0) {
      stepStack.pop();
      this.setState(stepStack);
      console.log(stepStack);
      
      this.props.navigation.setParams({currentTitle: stepStack[stepStack.length - 1]
        ? stepStack[stepStack.length - 1].title
        : '' });
    } else this.props.navigation.goBack();
  };

  onHandleSubmit = () => {
    Keyboard.dismiss();
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
