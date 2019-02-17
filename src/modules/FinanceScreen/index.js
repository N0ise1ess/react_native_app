import { Container, Content, List, Spinner, Tab, TabHeading, Tabs, Text } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { getFinancePayment } from '../../actions/financeAction';
import { ButtonBack, FooterSection } from '../shared/components';
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
  }

  _upperCase(word) {
    return <Text style={styles.tabTitleStyle}>{word.toUpperCase()}</Text>;
  }

  renderPayment = () => {
    const { financeData } = this.props;
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
          {!financeData ? (
            <Spinner color="blue" />
          ) : (
            <List
              dataArray={financeData[0] && financeData[0].charges}
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

  renderSchoolarship = () => {
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
            dataArray={[{}, {}]}
            renderRow={item => (
              <View style={styles.listStyle}>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 14 }}>3 семестр, Корпоративная</Text>
                  <Text style={styles.deadline}>
                    Начислена <Text style={{ fontWeight: 'bold', fontSize: 12 }}>29.10.18</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.paymentAmount}>3500 P</Text>
                </View>
              </View>
            )}
          />
        </Content>
      </Tab>
    );
  };

  render() {
    const { userStatus, navigation, financeData } = this.props;
    const { currentTab } = this.state;
    console.log('finance data', financeData);
    return (
      <Container style={styles.container}>
        <Tabs
          onChangeTab={({ i }) => this.setState({ currentTab: i })}
          tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}
        >
          {this.renderPayment()}
          {this.renderSchoolarship()}
        </Tabs>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.financeReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  getFinancePayment: token => dispatch(getFinancePayment(token)),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinanceScreen);
