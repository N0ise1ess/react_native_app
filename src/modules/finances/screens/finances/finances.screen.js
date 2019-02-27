import moment from 'moment';
import {Button, Container, Content, List, Spinner, Tab, TabHeading, Tabs, Text} from 'native-base';
import React, { Component } from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { getFinancePayment, getFinanceScholarships } from '../../../../actions/financeAction';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import {CustomIcon} from "../../../shared/components/custom-icon";
import {getSizeFonts} from "../../../shared/functions/styles";
import * as settingsFonts from "../../../../constants/styles";

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Финансы',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      styles: styles(props.fontSize),
      groupNames : [],
      currentGroupIndex : -1
    };
  }

  componentWillMount() {
    const { token } = this.props;
    this.props.getFinancePayment(token);
    this.props.getFinanceScholarships(token);

    const { role } = this.props
    role.forEach((localRole, index) => {
      if (localRole.type === 'STUDENT') {
        let groupNames = []
        role[index].details.forEach(detail => {
          groupNames.push(detail.group.name)
        });
        this.setState({groupNames : groupNames, currentGroupIndex : 0});
      }
    })
  }

  _upperCase(word, style = this.state.styles.tabTitleStyle) {
    return <Text style={style}>{word.toUpperCase()}</Text>;
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  render() {
    const { userStatus, navigation, finances } = this.props;
    const { currentTab, styles, groupNames } = this.state;
    // TODO fix 3350 to 0 after testing
    const debt = finances && finances[0] ? finances[0].debt : 3350;

    // TODO check what field holds amount of finances[0].charges ?
    const renderPayment = () => {
      const { currentTab } = this.state;

      return (
        <Tab
          heading={
            <TabHeading style={styles.tabHeaderStyle}>
              <View style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab === 0 && styles.activeTabStyle]}>
                {this._upperCase('Оплата')}
              </View>
            </TabHeading>
          }
        >
          <Content style={{ backgroundColor: '#CED8DA' }}>
            {!finances ? (
              <Spinner color="blue" />
            ) : (
              <List
                // dataArray={finances[0] && finances[0].charges}
                dataArray={[{amount: 600},{amount: 2750}]}
                renderRow={(item, sectionId, index) => (
                  <View style={[styles.listStyle, index === '0' ? {marginTop: 0} : {}]}>
                    <View>
                      <Text style={{ fontWeight: 'bold', fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, this.props.fontSize) }}>Обучение, {this.getSemesterNumber('29-10-18')} семестр</Text>
                      <Text style={styles.deadline}>
                        Оплатить до <Text style={{ fontWeight: 'bold', fontSize: 12 }}>29.10.18</Text>
                      </Text>
                    </View>
                    <View style={this.state.styles.debtSection}>
                      <Text style={styles.paymentAmount}>{item.amount} ₽</Text>
                    </View>
                  </View>
                )}
              />
            )}
            {debt > 0 && currentTab === 0 ?
            <View style={[styles.listStyle, {backgroundColor: '#e91b47', height : 50}]}>
              <Text style={styles.debtText}>К оплате</Text>
              <Text style={[styles.paymentAmount, {color: 'white'}]}>{debt} ₽</Text>
            </View> : null }
          </Content>
        </Tab>
      );
    };

    const renderScholarships = () => {
      const { currentTab, styles } = this.state;
      return (
        <Tab
          heading={
            <TabHeading style={styles.tabHeaderStyle}>
              <View style={[styles.tabHeadingStyle, styles.tabHeadingRight, currentTab === 1 && styles.activeTabStyle]}>
                {this._upperCase('Стипендии')}
              </View>
            </TabHeading>
          }
        >
          <Content style={{ backgroundColor: '#CED8DA' }}>
            <List
              dataArray={finances.scholarships}
              renderRow={item => (
                <View style={styles.listStyle}>
                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                      {this.getSemesterNumber(item.dateStart)} семестр, {item.type}
                    </Text>
                    <Text style={styles.deadline}>
                      Начислена{' '}
                      <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{this.formatDate(item.dateStart)}</Text>
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.paymentAmount}>{Math.round(item.sum)} ₽</Text>
                  </View>
                </View>
              )}
            />
          </Content>
        </Tab>
      );
    };

    return (
      <Container style={styles.container}>
        {groupNames.length > 0 ?
          groupNames.length > 1 ?
            <View style={styles.groupSection}>
              <TouchableOpacity onPress={() => this.switchGroup('left')}>
                <CustomIcon name='arrow_left' style={styles.iconLeft}/>
              </TouchableOpacity>
              <Text style={{color: "#1784d3"}}>Группа {groupNames[this.state.currentGroupIndex]}</Text>
              <TouchableOpacity onPress={() => this.switchGroup('right')}>
                <CustomIcon name='arrow_right' style={styles.iconRight}/>
              </TouchableOpacity>
            </View> :
            <View style={[styles.groupSection, {justifyContent : 'center'}]}>
              <Text style={{color: "#1784d3"}}>Группа {groupNames[0]}</Text>
            </View>
            : null }

        <Tabs
          page={this.state.currentTab}
          tabContainerStyle={{elevation : 0}}
          onChangeTab={({ i }) => this.setState({ currentTab: i })}
          tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}
        >
          {renderPayment()}
          {renderScholarships()}
        </Tabs>

        {debt > 0 && currentTab === 0 ?
        <View style={styles.paymentButton}>
          <Button onPress={this.openSberbank}
                  full rounded style={{backgroundColor: '#e91b47'}}>
            {this._upperCase("оплата в сбербанк-онлайн",
              {fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, this.props.fontSize), color: 'white'})}
          </Button>
        </View> : null }
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }

  openSberbank = () => {
    Linking.canOpenURL('sberbank://').then(supported => {
      if (supported) Linking.openURL('sberbank://')
      else Linking.openURL('https://online.sberbank.ru/')
    }).catch(err => {
      console.log("error linking open", err)
    })
  };

  switchGroup(direction) {
    let length = this.state.groupNames.length;
    let groupIndex = this.state.currentGroupIndex;
    if (length > 1) {
      switch (direction) {
        case 'left' : {
          this.setState(prevState => ({currentGroupIndex: groupIndex !== 0 ? prevState.currentGroupIndex - 1 : length - 1}));
          break;
        }
        case 'right' : {
          this.setState(prevState => ({currentGroupIndex : groupIndex !== length - 1 ? prevState.currentGroupIndex + 1 : 0}));
          break;
        }
      }
    }
  };

  formatDate(dateString) {
    return moment.utc(dateString, 'YYYY-MM-DD').format('DD.MM.YYYY');
  }
  getSemesterNumber(dateString) {
    let monthNumber = moment.utc(dateString, 'YYYY-MM-DD').month() + 1;
    let semestersByMonths = {
      1: [2, 3],
      2: [4, 5, 6],
      3: [7, 8, 9, 10], // летние каникулы отведем под 3-й семестр
      4: [11, 12, 1],
    };

    return Object.keys(semestersByMonths).find(semester =>
      semestersByMonths[semester].find(month => month === monthNumber),
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    finances: state.financeReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = dispatch => ({
  getFinancePayment: token => dispatch(getFinancePayment(token)),
  getFinanceScholarships: token => dispatch(getFinanceScholarships(token)),
  dispatch,
});

export const FinanceScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
