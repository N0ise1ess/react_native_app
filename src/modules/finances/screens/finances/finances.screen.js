import moment from 'moment';
import { Button, Container, Content, List, Spinner, Tab, TabHeading, Tabs, Text } from 'native-base';
import React, { Component } from 'react';
import { Linking, NativeModules, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { CustomIcon, fontSettings, FooterSection, getSizeFonts } from '../../../shared';
import { getFinancePayment, getFinanceScholarships, getDebtsPayment, getFinanceStipend} from '../../store/finances-actions';
import { styles } from './styles';

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Финансы',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      styles: styles(props.fontSize),
      groupNames: [],
      currentGroupIndex: -1,
      finances: null,
      isPressed: false,
    };
  }

  componentDidMount() {
    const { token } = this.props;
    this.props.getFinancePayment(token);
    this.props.getFinanceScholarships(token);
    this.props.getDebtsPayment(token);
    this.props.getFinanceStipend(token);

    const { role } = this.props;
    role.forEach((localRole, index) => {
      if (localRole.type === 'STUDENT') {
        let groupNames = [];
        role[index].details.forEach((detail) => {
          groupNames.push(detail.group.name);
        });
        this.setState({ groupNames: groupNames, currentGroupIndex: 0 });
      }
    });
  }

  _upperCase(word, style = this.state.styles.tabTitleStyle) {
    return (
      <Text style={style} allowFontScaling={false}>
        {word.toUpperCase()}
      </Text>
    );
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }
  changeStatus = () => {
    this.setState({
      isPressed: true
    })
  }
  goBack = () => {
    this.setState({
      isPressed: false
    })
  }

  render() {
    
    console.log('12312312312312', this.props)
    const { userStatus, finances } = this.props;
    const { currentTab, styles, groupNames, isPressed} = this.state;
    // TODO fix 3350 to 0 after testing
    const debt = finances && finances[0] ? finances[0].debt : 600; // just for test, there are no data in new api for debts
    console.log('1-1--1-1-1-1-', debt)

    // TODO check what field holds amount of finances[0].charges ?
    const renderPayment = () => {
      const { currentTab } = this.state;

      return (
        <Tab
          heading={
            <TabHeading style={styles.tabHeaderStyle}>
            
              <View onPress={() => this.goBack()} style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab === 0 && styles.activeTabStyle]}>
                <TouchableOpacity onPress={() => this.goBack()}>
                <Text>
                  {this._upperCase('Оплата')}
                </Text>
                </TouchableOpacity>
              </View>
            </TabHeading>
          }
        >
          <Content style={{ backgroundColor: '#CED8DA' }}>
            {!finances ? (
              <Spinner color="blue" />
            ) : debt > 0 && isPressed === false ? (
              <TouchableOpacity onPress={() => this.changeStatus()}>
              <List
                // dataArray={payments}
                dataArray={[{ amount: 600 }]}
                renderRow={(item, sectionId, index) => (
                  <View style={[styles.listStyle, index === '0' ? { marginTop: 0 } : {}]}>
                    <View>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, this.props.fontSize),
                        }}
                      >
                        Задолженность по оплате {'\n'}за обучение
                      </Text>
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
              </TouchableOpacity>
            ) : isPressed === true ? 
            <View>
            <List
                // dataArray={payments}
                dataArray={[{ amount: 600 }]}
                renderRow={(item, sectionId, index) => (
                  <View style={[styles.listStyle, index === '0' ? { marginTop: 0 } : {}]}>
                    <View>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, this.props.fontSize),
                        }}
                      >
                        Обучение, 3 семестр
                      </Text>
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
            <View style={[styles.listStyle, { backgroundColor: '#e91b47', height: 50 }]}>
                <Text style={styles.debtText}>К оплате</Text>
                <Text style={[styles.paymentAmount, { color: 'white' }]}>{debt} ₽</Text>
              </View>
            </View>
            :
            <Text style={{marginLeft:10}}>Нет Задолженности</Text>}
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
          { finances.stipend && finances.stipend.length !== 0 ?
            <List
              dataArray={finances.stipend}
              renderRow={(item) => (
                <View style={styles.listStyle}>
                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                      {this.getSemesterNumber(item.dateStart)} семестр, {item.type}
                    </Text>
                    <Text style={styles.deadline}>
                      Начислена <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{this.formatDate(item.dateStart)}</Text>
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.paymentAmount}>{Math.round(item.sum)} ₽</Text>
                  </View>
                </View>
              )}
            />
          : 
          <Text style={{marginLeft: 10}}>
            Информация отсутствует
          </Text>
          }
          </Content>
        </Tab>
      );
    };

    return (
      <Container style={styles.container}>
        {groupNames.length > 0 ? (
          groupNames.length > 1 ? (
            <View style={styles.groupSection}>
              <TouchableOpacity onPress={() => this.switchGroup('left')}>
                <CustomIcon name="arrow_left" style={styles.iconLeft} />
              </TouchableOpacity>
              <Text style={{ color: '#1784d3' }}>Группа {groupNames[this.state.currentGroupIndex]}</Text>
              <TouchableOpacity onPress={() => this.switchGroup('right')}>
                <CustomIcon name="arrow_right" style={styles.iconRight} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={[styles.groupSection, { justifyContent: 'center' }]}>
              <Text style={{ color: '#1784d3' }}>Группа {groupNames[0]}</Text>
            </View>
          )
        ) : null}

        <Tabs
          page={this.state.currentTab}
          tabContainerStyle={{ elevation: 0 }}
          onChangeTab={({ i }) => this.setState({ currentTab: i })}
          tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}
        >
          {renderPayment()}
          {renderScholarships()}
        </Tabs>

        {debt > 0 && currentTab === 0 ? (
          <View style={styles.paymentButton}>
            <Button onPress={this.handleOpenSberbank} full rounded style={{ backgroundColor: '#e91b47' }}>
              {this._upperCase('оплата в сбербанк-онлайн', {
                fontSize: fontSettings.FONT_SIZE_12,
                color: 'white',
              })}
            </Button>
          </View>
        ) : null}
        <FooterSection navPosition="Finance" {...this.props} />
      </Container>
    );
  }

  handleOpenSberbank = () => {
    NativeModules.CampusModule.openSberbank(() => {
      Linking.openURL('https://online.sberbank.ru/');
    });
  };

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

  getLastGroupIndex() {
    return this.state.groupNames.length - 1;
  }

  switchGroup(direction) {
    if (this.state.groupNames.length > 1) {
      this.setState({
        currentGroupIndex: this.getNextIndex(direction, this.state.currentGroupIndex),
      });
    }
  }

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

    return Object.keys(semestersByMonths).find((semester) => semestersByMonths[semester].find((month) => month === monthNumber));
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    debts: state.financeReducer,
    finances: state.financesReducer,
    scholarships: state.financesReducer,
    stipend: state.financeReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getFinancePayment: (token) => dispatch(getFinancePayment(token)),
  getFinanceScholarships: (token) => dispatch(getFinanceScholarships(token)),
  getDebtsPayment: (token) => dispatch(getDebtsPayment(token)),
  getFinanceStipend: (token) => dispatch(getFinanceStipend(token)),
  dispatch,
});

export const FinanceScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
