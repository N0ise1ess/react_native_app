import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Content, List, Icon, Text, Tab, Tabs, TabHeading, Spinner } from 'native-base';

import FooterSection from '../../components/Footer';
import ButtonBack from '../../components/ButtonBack';
import { getFinancePayment, getFinanceScholarships } from '../../actions/financeAction';
import moment from 'moment';
import styles from './styles';

class FinanceScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Финансы',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
    };
  }

  componentWillMount() {
    const { token } = this.props;
    this.props.getFinancePayment(token);
    this.props.getFinanceScholarships(token);
  }

  _upperCase(word) {
    return <Text style={styles.tabTitleStyle}>{word.toUpperCase()}</Text>;
  }

  render() {
    const { userStatus, navigation, finances } = this.props;
    const { currentTab } = this.state;
    const renderPayment = () => {
      const { finances } = this.props;
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
                dataArray={finances[0] && finances[0].charges}
                renderRow={item => (
                  <View style={styles.listStyle}>
                    <View>
                      <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Задолженность по оплате{'\n'}за обучение</Text>
                      <Text style={styles.deadline}>
                        Оплатить до <Text style={{ fontWeight: 'bold', fontSize: 12 }}>29.10.18</Text>
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.paymentAmount}>5600 P</Text>
                    </View>
                  </View>
                )}
              />
            )}
          </Content>
        </Tab>
      );
    };

    const renderScholarships = () => {
      const { currentTab } = this.state;
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

    console.log('finance data', finances);
    return (
      <Container style={styles.container}>
        <Tabs
          onChangeTab={({ i }) => this.setState({ currentTab: i })}
          tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}
        >
          {renderPayment()}
          {renderScholarships()}
        </Tabs>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
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

    return Object.keys(semestersByMonths).find(semester =>
      semestersByMonths[semester].find(month => month === monthNumber),
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    finances: state.financeReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  getFinancePayment: token => dispatch(getFinancePayment(token)),
  getFinanceScholarships: token => dispatch(getFinanceScholarships(token)),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinanceScreen);
