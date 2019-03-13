import {
  Button,
  Container,
  Content,
  Icon,
  Input,
  Item,
  List, ListItem,
  Spinner,
  Tab,
  TabHeading,
  Tabs,
  Text
} from 'native-base';
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';

import {getSearchedTimetable, getTimetable} from '../../../../actions/timetableAction';
import {ButtonBack, CustomIcon, FooterSection} from '../../../shared/components';
import {styles} from './styles';

const timeTableList = [
  {
    title: 'Разработка программного обеспечения обеспечения',
    text: 'Иванова Н.М. 524 ауд., корпус 8',
    time: '16:30-18:00'
  },
  {
    title: 'ИНО, практика',
    text: 'Иванова Н.М. 524 ауд., корпус 8',
    time: '18:00-19.30'
  },
  {
    title: 'Иностранный язык',
    text: 'Сергеев, Н.М. 524 ауд., корпус 8',
    time: '16:30-18:00'
  },
  {
    title: 'Разработка программного обеспечения',
    text: 'Иванова Н.М. 524 ауд., корпус 8',
    time: '16:30-18:00'
  }
];

const days = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday'
}

class InnerComponent extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Расписание',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()}/>
  });

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      searchedText: '',
      styles: styles(props.fontSize)
    };
  }

  componentWillMount() {
    this.props.getSearchedTimetable('', this.props.token);
  }

  _upperCase(word) {
    return (
      <Text style={this.state.styles.tabTitleStyle}>{word.toUpperCase()}</Text>
    );
  }

  renderOdd = () => {
    const {currentTab, styles} = this.state;
    const {timetables} = this.props;

    const timetable = timetables[0].dayTimetables[days[moment.day()]]
    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[
                styles.tabHeadingStyle,
                styles.tabHeadingLeft,
                currentTab % 3 === 0 && styles.activeTabStyle
              ]}
            >
              {this._upperCase('Нечетная')}
            </View>
          </TabHeading>
        }
      >
        <Content style={{backgroundColor: '#CED8DA'}}>
          <List
            dataArray={timetable}
            renderRow={item => (
              <View style={styles.listStyle}>
                <View style={[styles.section]}>
                  <Text style={styles.time}>{item.timeName}</Text>
                </View>
                <View style={[styles.section, {flex: 1}]}>
                  <Text style={styles.title}>{item.discriplineName}</Text>
                  <Text style={styles.text}>{item.planTimeTypeName} Ауд.{item.auditoriumNumber} {item.buildingName}</Text>
                </View>
              </View>
            )}
          />
        </Content>
      </Tab>
    );
  };

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize &&
    this.setState({styles: styles(this.props.fontSize)});
  }

  renderEven = () => {
    const {currentTab, styles} = this.state;
    const {timetables} = this.props;

    const timetable = timetables[1].dayTimetables[days[moment.day()]]
    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[
                styles.tabHeadingStyle,
                styles.tabHeadingRight,
                currentTab % 3 === 1 && styles.activeTabStyle
              ]}
            >
              {this._upperCase('Четная')}
            </View>
          </TabHeading>
        }
      >
        <Content style={{backgroundColor: '#CED8DA'}}>
          <List
            dataArray={timetable}
            renderRow={item => (
              <View style={styles.listStyle}>
                <View style={[styles.section]}>
                  <Text style={styles.time}>{item.timeName}</Text>
                </View>
                <View style={[styles.section, {flex: 1}]}>
                  <Text style={styles.title}>{item.discriplineName}</Text>
                  <Text style={styles.text}>{item.planTimeTypeName} Ауд.{item.auditoriumNumber} {item.buildingName}</Text>
                </View>
              </View>
            )}
          />
        </Content>
      </Tab>
    );
  };

  onHandleSubmit = () => {
    const {searchedText} = this.state;
    this.props.getSearchedTimetable(searchedText, this.props.token);
  };

  _renderSearchBar = () => {
    const {styles} = this.state;
    return (
      <Item style={styles.searchBar}>
        <Icon name="ios-search" style={styles.searchIcon}/>
        <Input
          style={styles.searchInput}
          placeholder="Поиск по расписанию"
          value={this.state.searchedText}
          onChangeText={text => this.setState({searchedText: text})}
        />
        <Button transparent onPress={this.onHandleSubmit}>
          <Text>Найти</Text>
        </Button>
      </Item>
    )
  }

  render() {
    const {
      userStatus,
      navigation,
      timeTableLoading,
      errorCode,
      error,
      errorDescription,
      suggestions,
      timetables,
      token
    } = this.props;
    const {styles} = this.state;
    if (timetables.length > 0) {
      return (
        <Container style={styles.container}>
          {this._renderSearchBar()}
          {!errorCode ? (
            <Tabs
              onChangeTab={({i}) => this.setState({currentTab: i})}
              tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
            >
              {this.renderOdd()}
              {this.renderEven()}
            </Tabs>
          ) : (
            <Content>
              {timeTableLoading && <Spinner/>}
              {errorCode && (
                <Text style={styles.errorText}>
                  ErrorCode: {`${errorCode}\n`}
                </Text>
              )}
            </Content>
          )}
          <FooterSection userStatus={userStatus} navigate={navigation.navigate}/>
        </Container>
      );
    } else {
      return (
        <Container style={styles.container}>
          {this._renderSearchBar()}
          <Content>
            {!timeTableLoading ?
              <List
                style={{}}
                dataArray={suggestions}
                renderRow={item => (
                  <ListItem
                    button
                    onPress={() => this.props.getTimetable(item, token)}
                    style={styles.listItemStyle}
                  >
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text>{item.title}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text>{item.description}</Text>
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
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.timetableReducer,
    ...state.settings
  };
};

const mapDispatchToProps = dispatch => ({
  getSearchedTimetable: (searchedText, token) => dispatch(getSearchedTimetable(searchedText, token)),
  getTimetable: (search, token) => dispatch(getTimetable(search, token)),
  dispatch
});

export const TimeTableScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerComponent);
