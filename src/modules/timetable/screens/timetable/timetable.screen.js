import {
  Button,
  Container,
  Content,
  Icon,
  Input,
  Item,
  List,
  ListItem,
  Spinner,
  Tab,
  TabHeading,
  Tabs,
  Text,
} from 'native-base';
import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { CustomIcon, FooterSection, throttle } from '../../../shared';
import { getSearchedTimetable, getTimetable } from '../../store/timetable-actions';
import { styles } from './styles';

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Расписание',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      searchedText: '',
      styles: styles(props.fontSize),
      groupNames: [],
      currentGroupIndex: -1,
      selectedGroupName: '',
      groupId: null,
      role: ""
    };
  }

  componentDidMount() {
    this.props.getSearchedTimetable('', this.props.token);

    const { role } = this.props;
    if (role && role.length > 0) {
      role.forEach((localRole, index) => {
        if (localRole.type === 'STUDENT') {
          const groupId = role[0].details[0].group.id
          this.props.getTimetable({id : groupId, type: "STUDENT_GROUP"}, this.props.token);
          this.setState({groupId : groupId})
          let groupNames = [];
          role[index].details.forEach((detail) => {
            groupNames.push(detail.group.name);
          });
          this.setState({ groupNames: groupNames, currentGroupIndex: 0, role: "STUDENT_GROUP" });
        }
      });
    }
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  _upperCase(word) {
    return <Text style={this.state.styles.tabTitleStyle}>{word.toUpperCase()}</Text>;
  }

  renderOdd = () => {
    const { currentTab, styles } = this.state;
    const { timetables } = this.props;

    const timetable = timetables[1].dayTimetables;
    const timetablePresent = Object.keys(timetable).map(key => timetable[key])
        .filter(tt => tt.length > 0)
        .length > 0
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
          <View style={{ alignSelf: 'center' }}>
            {timetablePresent ? <Text>Неделя {timetables[1].weekNumber}</Text>
                : <Text>Расписание отсутствует</Text> }
          </View>
          {Object.keys(timetable).map((key, index) =>
            timetable[key] && timetable[key][0] ? (
              <View key={index} style={styles.timetable}>
                <View style={styles.weekHeader}>
                  <Text style={{ color: '#1784d3' }}>{timetable[key][0].weekDayName || ''}</Text>
                </View>
                <List
                  dataArray={timetable[key]}
                  renderRow={(item) => (
                    <View style={styles.listStyle}>
                      <View style={[styles.section]}>
                        <Text style={styles.time}>{item.timeName}</Text>
                      </View>
                      <View style={[styles.section, { flex: 1 }]}>
                        <Text style={styles.title}>
                          {item.discriplineName}, {item.planTimeTypeName}.
                        </Text>
                        <Text style={styles.text}>
                          {this.getFio(item.teacherFIO)}, Ауд.{item.auditoriumNumber}, {item.buildingName}
                        </Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            ) : null,
          )}
        </Content>
      </Tab>
    );
  };

  //Return format Иванов Иван Иванов => Иванов И.И.
  getFio(teacherName) {
    if (teacherName && teacherName.length > 0) {
      let teacherSplit = teacherName.split(' ');
      return teacherSplit[0] + ' ' + teacherSplit[1].substr(0, 1) + '. ' + teacherSplit[2].substr(0, 1) + '.';
    }
    return '';
  }

  currentSuggestionType() {
    return this.props.suggestions.length ? this.props.suggestions[0].type : '';
  }

  onItemClick(item, token) {
    item.type === 'STUDENT_GROUP' &&
      this.setState({
        selectedGroupName: item.title,
      });

    this.props.getTimetable(item, token);
  }

  renderEven = () => {
    const { currentTab, styles } = this.state;
    const { timetables } = this.props;
    const timetable = timetables[0].dayTimetables;
    const timetablePresent = Object.keys(timetable).map(key => timetable[key])
        .filter(tt => tt.length > 0)
        .length > 0
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
          <View style={{ alignSelf: 'center' }}>
            {timetablePresent ? <Text>Неделя {timetables[0].weekNumber}</Text>
                : <Text>Расписание отсутствует</Text> }
          </View>
          {Object.keys(timetable).map((key, index) =>
            timetable[key] && timetable[key][0] ? (
              <View key={index} style={styles.timetable}>
                <View style={styles.weekHeader}>
                  <Text style={{ color: '#1784d3' }}>{timetable[key][0].weekDayName || ''}</Text>
                </View>
                <List
                  dataArray={timetable[key]}
                  renderRow={(item) => (
                    <View style={styles.listStyle}>
                      <View style={[styles.section]}>
                        <Text style={styles.time}>{item.timeName}</Text>
                      </View>
                      <View style={[styles.section, { flex: 1 }]}>
                        <Text style={styles.title}>
                          {item.discriplineName}, {item.planTimeTypeName}.
                        </Text>
                        <Text style={styles.text}>
                          {this.getFio(item.teacherFIO)}, Ауд.{item.auditoriumNumber}, {item.buildingName}
                        </Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            ) : null,
          )}
        </Content>
      </Tab>
    );
  };

  onHandleSubmit = () => {
    const { searchedText } = this.state;
    if (searchedText.length > 0) {
      this.props.getSearchedTimetable(searchedText, this.props.token);
    } else {
      const { groupId, role } = this.state
      if (role === "STUDENT_GROUP") this.props.getTimetable({id : groupId, type: "STUDENT_GROUP"}, this.props.token);
    }
  };

  _renderSearchBar = () => {
    const { styles } = this.state;
    return (
      <Item style={styles.searchBar}>
        <Icon name="ios-search" style={styles.searchIcon} />
        <Input
          style={styles.searchInput}
          placeholder="Поиск по расписанию"
          onChangeText={(text) => throttle(() => this.onHandleSubmit(text))}
        />
      </Item>
    );
  };

  render() {
    const {
      userStatus,
      timeTableLoading,
      errorCode,
      error,
      errorDescription,
      suggestions,
      timetables,
      token,
    } = this.props;
    const { styles, groupNames } = this.state;
    if (timetables.length > 0) {
      return (
        <Container style={styles.container}>
          {this._renderSearchBar()}
          {groupNames.length > 0 && !timeTableLoading ? (
            groupNames.length > 1 ? (
              <View style={styles.groupSection}>
                <TouchableOpacity onPress={() => this.switchGroup('left')}>
                  <CustomIcon name="arrow_left" style={styles.iconLeft} />
                </TouchableOpacity>

                {this.currentSuggestionType() !== 'TEACHER' ? (
                  <Text style={styles.groupTitle}>Группа {this.state.selectedGroupName}</Text>
                ) : null}

                <TouchableOpacity onPress={() => this.switchGroup('right')}>
                  <CustomIcon name="arrow_right" style={styles.iconRight} />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={[styles.groupSection, { justifyContent: 'center' }]}>
                {this.currentSuggestionType() !== 'TEACHER' ? (
                  <Text style={styles.groupTitle}>Группа {this.state.selectedGroupName}</Text>
                ) : null}
              </View>
            )
          ) : null}
          {!errorCode ? (
            <Tabs
              tabContainerStyle={{ elevation: 0 }}
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
          <FooterSection {...this.props} />
        </Container>
      );
    } else {
      return (
        <Container style={styles.container}>
          {this._renderSearchBar()}
          <Content>
            {!timeTableLoading ? (
              <List
                style={{}}
                dataArray={suggestions}
                renderRow={(item) => (
                  <ListItem button onPress={() => this.onItemClick(item, token)} style={styles.listItemStyle}>
                    <View style={styles.columnStyle}>
                      <Text style={styles.titleStyle}>{item.title}</Text>
                      <Text style={[styles.textStyle, { color: '#979797' }]}>{item.description}</Text>
                    </View>
                  </ListItem>
                )}
              />
            ) : (
              <Spinner color="#163D7D" style={{ justifyContent: 'center', alignItems: 'center' }} />
            )}
          </Content>
          <FooterSection navPosition="TimeTable" componentId={this.props.componentId} userStatus={userStatus} />
        </Container>
      );
    }
  }

  getNextIndex = (directionName, currentIndex) => {
    let direction = {
      left: {
        canMoveFrom: (index) => index !== 0,
        getNext: (index) => index - 1,
        getStartIndex: () => this.state.groupNames.length - 1,
      },
      right: {
        canMoveFrom: (index) => index !== this.getLastGroupIndex(),
        getNext: (index) => index + 1,
        getStartIndex: () => 0,
      },
    }[directionName];

    return direction.canMoveFrom(currentIndex) ? direction.getNext(currentIndex) : direction.getStartIndex();
  };

  switchGroup(direction) {
    if (this.state.groupNames.length > 1) {
      this.setState({
        currentGroupIndex: this.getNextIndex(direction, this.state.currentGroupIndex),
      });
    }
  }

  getLastGroupIndex() {
    return this.state.groupNames.length - 1;
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    ...state.timetableReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSearchedTimetable: (searchedText, token) => dispatch(getSearchedTimetable(searchedText, token)),
  getTimetable: (search, token) => dispatch(getTimetable(search, token)),
  dispatch,
});

export const TimeTableScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
