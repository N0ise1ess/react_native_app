import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {Navigation} from 'react-native-navigation';

import { Container, Tab, TabHeading, Tabs, Text, Spinner } from 'native-base';

import { styles } from './styles';
import { ButtonBack, FooterSection, CustomIcon } from '../../../shared/components';
import { Attendance } from '../attendance';
import { Result } from '../result';
import * as actions from '../../../../actions/scratchBookAction';

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Зачетная книжка',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      currentYearId: 0,
      currentSemesterId: 0,
      styles: styles(props.fontSize)
    };
  }

  componentDidMount() {
    this.props.getDisciplineListProgress(this.props.token);
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  previous = (field) => {
    if (field === 'year') {
      this.setState({
        currentYearId : !!this.state.currentYearId ? this.state.currentYearId - 1 : this.props.dataScratchBook.length - 1
      });
    } else {
      const semesters = this.props.dataScratchBook[this.state.currentYearId].semesters;
      this.setState({
        currentSemesterId : !!this.state.currentSemesterId ? this.state.currentSemesterId - 1 : semesters.length - 1
      });
    }
  }

  next = (field) => {
    if (field === 'year') {
      this.setState({
        currentYearId : !!(this.props.dataScratchBook.length - 1 - this.state.currentYearId) ? this.state.currentYearId + 1 : 0
      });
    } else {
      const semesters = this.props.dataScratchBook[this.state.currentYearId].semesters;
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
    const {dataScratchBook} = this.props;

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
        <Result
          data={dataScratchBook[this.state.currentYearId].semesters[this.state.currentSemesterId].disciplines}
          fontSize={this.props.fontSize} />
      </Tab>
    );
  };

  _renderAttendance = () => {
    const { currentYearId, currentSemesterId, styles, currentTab } = this.state;
    return <Tab heading={<TabHeading style={styles.tabHeaderStyle}>
      <View
        style={[styles.tabHeadingStyle, styles.tabHeadingRight, currentTab % 3 === 0 && styles.activeTabStyle]}>
        {this._upperCase('Посещаемость')}
      </View>
      </TabHeading>}>
      <Attendance 
        data={this.props.dataScratchBook[currentYearId].semesters[currentSemesterId].disciplines}
        fontSize={this.props.fontSize} />
    </Tab>
  };

  render() {
    const { userStatus } = this.props;
    const { currentYearId, currentSemesterId, styles } = this.state;
    return (
    <Container style={styles.container}>
    {this.props.isLoading ? <View style={styles.view}><Spinner color='blue'/></View> : <React.Fragment>
        <View style={styles.year}>
          <TouchableOpacity onPress={() => this.previous('year')}>
            <CustomIcon name="arrow_left" style={styles.iconStyle}/>
          </TouchableOpacity>
          <Text style={{color:'#486694'}}>Группа {this.props.dataScratchBook[currentYearId].studYear}</Text>
          <TouchableOpacity onPress={() => this.next('year')}>
            <CustomIcon name="arrow_right" style={styles.iconStyle}/>
          </TouchableOpacity>
        </View>
        <View style={styles.semester}>
          <TouchableOpacity onPress={() => this.previous('semester')}>
            <CustomIcon name="arrow_left" style={styles.iconStyle}/>
          </TouchableOpacity>
          <Text style={{color:'#486694'}}>{this.props.dataScratchBook[currentYearId].semesters[currentSemesterId].name}</Text>
          <TouchableOpacity onPress={() => this.next('semester')}>
            <CustomIcon name="arrow_right" style={styles.iconStyle}/>
          </TouchableOpacity>
        </View>
        <Tabs
          tabContainerStyle={{elevation : 0}}
          onChangeTab={({ i }) => this.setState({ currentTab: i })}
          tabBarUnderlineStyle={{ backgroundColor: 'transparent', border: 0 }}>
          {this._renderResult()}
          {this._renderAttendance()}
        </Tabs>
        </React.Fragment> }
        <FooterSection componentId={this.props.componentId} userStatus={userStatus}/>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
    ...state.scratchBook,
  };
};

export const ScratchBookScreen = connect(
  mapStateToProps, {...actions}
)(InnerComponent);
