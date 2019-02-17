import { Button, Container, Content, Icon, Input, Item, List, Spinner, Tab, TabHeading, Tabs, Text } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { getSearchedTimetable } from '../../actions/timetableAction';
import { ButtonBack, FooterSection } from '../shared/components';
import styles from './styles';

const timeTableList = [
  {
    title: 'Разработка программного обеспечения обеспечения',
    text: 'Иванова Н.М. 524 ауд., корпус 8',
    time: '16:30-18:00',
  },
  {
    title: 'ИНО, практика',
    text: 'Иванова Н.М. 524 ауд., корпус 8',
    time: '18:00-19.30',
  },
  {
    title: 'Иностранный язык',
    text: 'Сергеев, Н.М. 524 ауд., корпус 8',
    time: '16:30-18:00',
  },
  {
    title: 'Разработка программного обеспечения',
    text: 'Иванова Н.М. 524 ауд., корпус 8',
    time: '16:30-18:00',
  },
];

class TimeTableScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Расписание',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      searchedText: '',
    };
  }

  _upperCase(word) {
    return <Text style={styles.tabTitleStyle}>{word.toUpperCase()}</Text>;
  }

  renderOdd = () => {
    const { currentTab } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab % 3 === 0 && styles.activeTabStyle]}
            >
              {this._upperCase('Нечетная')}
            </View>
          </TabHeading>
        }
      >
        <Content style={{ backgroundColor: '#CED8DA' }}>
          <List
            dataArray={timeTableList}
            renderRow={item => (
              <View style={styles.listStyle}>
                <View style={styles.section}>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                <View style={[styles.section, { flex: 1 }]}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.text}</Text>
                </View>
              </View>
            )}
          />
        </Content>
      </Tab>
    );
  };

  renderEven = () => {
    const { currentTab } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingRight, currentTab % 3 === 1 && styles.activeTabStyle]}
            >
              {this._upperCase('Четная')}
            </View>
          </TabHeading>
        }
      >
        <Content style={{ backgroundColor: '#CED8DA' }}>
          <List
            dataArray={timeTableList}
            renderRow={item => (
              <View style={styles.listStyle}>
                <View style={[styles.section]}>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                <View style={[styles.section, { flex: 1 }]}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.text}</Text>
                </View>
              </View>
            )}
          />
        </Content>
      </Tab>
    );
  };

  onHandleSubmit = () => {
    const { searchedText } = this.state;
    this.props.getSearchedTimetable(searchedText, this.props.token);
  };

  render() {
    const { userStatus, navigation, timeTableLoading, errorCode, error, errorDescription } = this.props;
    console.log(this.props);
    return (
      <Container style={styles.container}>
        <Item style={styles.searchBar}>
          <Icon name="ios-search" style={styles.searchIcon} />
          <Input
            style={styles.searchInput}
            placeholder="Поиск по расписанию"
            value={this.state.searchedText}
            onChangeText={text => this.setState({ searchedText: text })}
          />
          <Button transparent onPress={this.onHandleSubmit}>
            <Text>Найти</Text>
          </Button>
        </Item>
        {userStatus !== 'guest' && !errorCode ? (
          <Tabs
            onChangeTab={({ i }) => this.setState({ currentTab: i })}
            tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}
          >
            {this.renderOdd()}
            {this.renderEven()}
          </Tabs>
        ) : (
          <Content>
            {timeTableLoading && <Spinner />}
            {errorCode && <Text style={styles.errorText}>ErrorCode: {`${errorCode}\n`}</Text>}
          </Content>
        )}
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.timetableReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  getSearchedTimetable: (searchedText, token) => dispatch(getSearchedTimetable(searchedText, token)),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeTableScreen);
