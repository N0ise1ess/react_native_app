import { Container, Content, Tab, TabHeading, Tabs, List, Text } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {Navigation} from 'react-native-navigation';

import { FooterSection, CustomIcon } from '../../../shared/components';
import { styles } from './styles';

const statementsList = [
  {
    title: 'Группа 1234',
    type: 'Посещаемость',
    passed: true,
  },
  {
    title: 'Группа 1235',
    type: 'Посещаемость',
    passed: true,
  },
  {
    title: 'Группа 1236',
    type: 'Посещаемость',
    passed: true,
  },
  {
    title: 'Группа 1231',
    type: 'Посещаемость',
    passed: true,
  },
  {
    title: 'Группа 4167',
    type: 'Посещаемость',
    passed: false,
  },
];

const reportsList = [
  {
    title: '2018 год',
    type: 'Годовой отчет',
    passed: true,
  },
  {
    title: '2017 год',
    type: 'Годовой отчет',
    passed: true,
  },
  {
    title: '2016 год',
    type: 'Годовой отчет',
    passed: true,
  },
  {
    title: '2015 год',
    type: 'Годовой отчет',
    passed: true,
  },
  {
    title: '2014 год',
    type: 'Годовой отчет',
    passed: false,
  },
];

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Ведомости и отчеты',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  _upperCase(word) {
    return <Text style={this.state.styles.tabTitleStyle}>{word.toUpperCase()}</Text>;
  }

  _renderList = (list) => {
    const { styles } = this.state;

    return <Content style={styles.container}>
      <List
        dataArray={list}
        renderRow={item => (
          <View style={styles.listItemStyle}>
            <View style={styles.beginningItems}>
              <View style={styles.upperSection}>
                {item.passed ? (
                  <CustomIcon name="ok" style={[styles.markIcon, styles.okIcon]} />
                ) : (
                  <View style={[styles.markIcon, styles.redCircle]}></View>
                )}
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Text style={styles.textStyle}>{item.type}</Text>
            </View>
            <View>
              <CustomIcon name={item.passed ? 'success' : 'error'} style={[styles.iconStyle, !item.passed && styles.errorIcon]} />
              <Text style={styles.rateTextStyle}>{item.passed ? 'ЗАПОЛНЕНО' : 'НЕ ЗАПОЛНЕНО'}</Text>
            </View>
          </View>
        )}
      />
    </Content>
  };

  _renderStatements = () => {
    const { currentTab, styles } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab === 1 && styles.activeTabStyle]}
            >
              {this._upperCase('Ведомости')}
            </View>
          </TabHeading>
        }>
        {this._renderList(statementsList)}
      </Tab>
    );
  };

  _renderReports = () => {
    const { currentTab, styles } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingRight, currentTab % 3 === 0 && styles.activeTabStyle]}
            >
              {this._upperCase('Отчеты')}
            </View>
          </TabHeading>
        }>
        {this._renderList(reportsList)}
      </Tab>
    );
  };

  render() {
    const { userStatus,} = this.props;
    const {styles} = this.state;
    return (<Container style={styles.container}>
      <Tabs
        tabContainerStyle={{elevation : 0}}
        onChangeTab={({ i }) => this.setState({ currentTab: i })}
        tabBarUnderlineStyle={styles.tabBarUnderline}>
        {this._renderStatements()}
        {this._renderReports()}
      </Tabs>
      <FooterSection {...this.props}/>
    </Container>);
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

export const ReportsScreen = connect(
  mapStateToProps,
)(InnerComponent);
