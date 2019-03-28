import { Button, Container, Content, Icon, Input, Item, ListItem, Spinner, Text } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Keyboard } from 'react-native';

import { ButtonBack, CustomIcon, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import { getDepartments, setOpenedIdItemDivisions } from "../../../../actions/contactsAction";
import { DivisionInfo } from "./division.info/division.info";
import { TouchableOpacity } from 'react-native-gesture-handler';


class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitleStyle: {
      paddingLeft: 0,
      marginLeft: 0,
      fontSize: 16,
      fontWeight: 'normal',
    },
    title: navigation.getParam("currentTitle") || 'Подразделения',
    headerLeft: <ButtonBack onPress={navigation.getParam("customGoBack", () => { })} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      stepStack: [],
      searchedText: '',
      openedIdItem: '',
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ customGoBack: this.handleBackArrow });
    this.props.getDepartments('');
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  render() {
    const { userStatus, navigation, departments, departmentsLoading } = this.props;
    const { styles,openedIdItem } = this.state;

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
            <Text style={{ color: "#163D7D" }}>Найти</Text>
          </Button>
        </Item>
        <Content ref={node => this.content = node}>
          {departmentsLoading
            ? <Spinner color='blue' style={{ justifyContent: 'center', alignItems: 'center' }} />
            : <FlatList
              data={this.getDataList(departments)}
              extraData={{ openedIdItem: this.props.openedIdItem }}
              keyExtractor={(item, index) => item.id.toString()}
              renderItem={({ item, index }) => (
                <ListItem
                  button
                  onPress={() => item.directors
                    && this.setState({openedIdItem: item.id === this.state.openedIdItem ? '' : item.id})}
                  style={[styles.listItemStyle, styles.listItemContainer]}
                >
                  <View style={styles.listItem}>
                    <CustomIcon style={styles.iconUniversity} name="university" />
                    <Text style={styles.titleStyle}>{item.name}</Text>
                    {item.departments
                      && item.departments.length > 0
                      && <TouchableOpacity
                        style={{ width: 40, height: 40 }}
                        onPress={() => this.handlePressNextStep(item, index)}>
                        <Icon type="Ionicons" name="ios-arrow-round-forward" style={styles.iconStyle} />
                      </TouchableOpacity>}
                  </View>
                  {openedIdItem === item.id && <DivisionInfo item={item}
                    isOpened={openedIdItem === item.id}
                    fontSize={this.props.fontSize} />}
                </ListItem>
              )}
            />
          }
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    )
  }

  getDataList = (data) => {
    if (data) this.state.stepStack.forEach((item) => {
      data = data[item.index].departments;
    });
    return data;
  }

  handlePressNextStep(item, index) {
    this.content._root.scrollToPosition(0, 0, false);
    if (item && item.departments && item.departments.length > 0) {
      const { stepStack } = this.state;
      stepStack.push({
        index,
        title: item.name,
      });
      this.props.navigation.setParams({ currentTitle: item.name });
      this.setState({ stepStack });
    } else {
      this.props.setOpenedIdItemDivisions(this.props.openedIdItem === item.id ? '' : item.id);
    }
  };

  handleBackArrow = () => {
    this.content._root.scrollToPosition(0, 0, false);
    const { stepStack } = this.state;
    this.props.setOpenedIdItemDivisions('')
    if (stepStack && stepStack.length > 0) {
      stepStack.pop();
      this.setState(stepStack);
      this.props.navigation.setParams({
        currentTitle: stepStack[stepStack.length - 1]
          ? stepStack[stepStack.length - 1].title
          : ''
      });
    } else this.props.navigation.goBack();
  };

  onHandleSubmit = () => {
    Keyboard.dismiss();
    const { searchedText } = this.state;
    this.props.getDepartments(searchedText.trim());
    this.props.setOpenedIdItemDivisions('');
    this.setState({ stepStack: [] });
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
  setOpenedIdItemDivisions: (id) => dispatch(setOpenedIdItemDivisions(id)),
  dispatch,
});

export const DivisionsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
