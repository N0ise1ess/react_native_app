import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Container, Content, Tab, TabHeading, Tabs, Text } from 'native-base';

import { styles } from './styles';
import { ButtonBack, FooterSection, CustomIcon } from '../../../shared/components';
import { Attendance } from '../attendance';

const dataList = [
  {
    "year": 2017,
    "studYear": "2017/2018",
    "semesterCurrent": 4,
    "yearCurrent": 2018,
    "semesters": [
      { "nameId":2,
        "name":"Весенний семестр",
        "disciplines": [
          {
            "name":"Информатика",
            "type":"Зачет",
            "teacherName":"Мазуренко Екатерина Владимировна",
            "hours":36,
            "hoursMissed":2,
            "isInfoOpen":false,
            "info":
              [
                {
                  "name":"Лекции",
                  "hours":36,
                  "hoursMissed":null,
                  "teacherName":"Мазуренко Екатерина Владимировна",
                }
              ]
          }
        ]
      }
    ]
  }, {
    "year": 2017,
    "studYear": "2018/2019",
    "semesterCurrent": 4,
    "yearCurrent": 2018,
    "semesters": [
      { "nameId":2,
        "name": "Симний семестр",
        "disciplines": [
          {
            "name":"Информатика",
            "type":"Зачет",
            "teacherName":"Мазуренко Екатерина Владимировна",
            "hours":null,
            "hoursMissed":null,
            "isInfoOpen":false,
            "info":
              [
                {
                  "name":"Лекции",
                  "hours":null,
                  "hoursMissed":null,
                  "teacherName":"Мазуренко Екатерина Владимировна",
                }
              ]
          }
        ]
      }
    ]
  }
];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Зачетная книжка',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      currentYearId: 0,
      currentSemesterId: 0,
      styles: styles(props.fontSize)
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  previous = (field) => {
    if (field === 'year') {
      this.setState({
        currentYearId : !!this.state.currentYearId ? this.state.currentYearId - 1 : dataList.length - 1
      });
    } else {
      const semesters = dataList[this.state.currentYearId].semesters;
      this.setState({
        currentSemesterId : !!this.state.currentSemesterId ? this.state.currentSemesterId - 1 : semesters.length - 1
      });
    }
  }

  next = (field) => {
    if (field === 'year') {
      this.setState({
        currentYearId : !!(dataList.length - 1 - this.state.currentYearId) ? this.state.currentYearId + 1 : 0
      });
    } else {
      const semesters = dataList[this.state.currentYearId].semesters;
      this.setState({
        currentSemesterId : !!(semesters.length - 1 - this.state.currentSemesterId) ? this.state.currentSemesterId + 1 : 0
      });
    }
  }

  _upperCase(word) {
    return <Text style={this.state.styles.tabTitleStyle}>{word.toUpperCase()}</Text>;
  }

  _renderResult = () => {
    const { currentTab, styles } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab === 1 && styles.activeTabStyle]}
            >
              {this._upperCase('Результат')}
            </View>
          </TabHeading>
        }
      >
        <Content style={{ backgroundColor: '#CED8DA' }}>
          {/* TODO */}
        </Content>
      </Tab>
    );
  };

  _renderAttendance = () => {
    const { currentYearId, currentSemesterId, styles } = this.state;
    return <Tab heading={<TabHeading style={styles.tabHeaderStyle}>
      <View
        style={[styles.tabHeadingStyle, styles.tabHeadingRight, this.state.currentTab % 3 === 0 && styles.activeTabStyle]}>
        {this._upperCase('Посещаемость')}
      </View>
      </TabHeading>}>
      <Attendance 
        data={dataList[currentYearId].semesters[currentSemesterId].disciplines}
        fontSize={this.props.fontSize} />
    </Tab>
  };

  render() {
    const { userStatus, navigation } = this.props;
    const { currentYearId, currentSemesterId, styles } = this.state;
    return (
    <Container style={styles.container}>
        <View style={styles.year}>
          <TouchableOpacity onPress={() => this.previous('year')}>
            <CustomIcon name="arrow_left" style={styles.iconStyle}/>
          </TouchableOpacity>
          <Text style={{color:'#486694'}}>Группа {dataList[currentYearId].studYear}</Text>
          <TouchableOpacity onPress={() => this.next('year')}>
            <CustomIcon name="arrow_right" style={styles.iconStyle}/>
          </TouchableOpacity>
        </View>
        <View style={styles.semester}>
          <TouchableOpacity onPress={() => this.previous('semester')}>
            <CustomIcon name="arrow_left" style={styles.iconStyle}/>
          </TouchableOpacity>
          <Text style={{color:'#486694'}}>{dataList[currentYearId].semesters[currentSemesterId].name}</Text>
          <TouchableOpacity onPress={() => this.next('semester')}>
            <CustomIcon name="arrow_right" style={styles.iconStyle}/>
          </TouchableOpacity>
        </View>
        <Tabs style={styles.tabs}
          onChangeTab={({ i }) => this.setState({ currentTab: i })}
          tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}>
          {this._renderResult()}
          {this._renderAttendance()}
        </Tabs>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer
  };
};

export const ScratchBookScreen = connect(
  mapStateToProps,
)(InnerComponent);
