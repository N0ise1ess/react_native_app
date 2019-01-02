import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View
} from 'react-native';
import {
  Container,
  Content,
  List,
  Icon,
  Text,
  Tab,
  Tabs,
  TabHeading,
  Spinner,
} from 'native-base';

import FooterSection from '../../components/Footer';

import { getFinancePayment } from '../../actions/financeAction';

import styles from './styles';

class FinanceScreen extends Component {
  static navigationOptions = {
    title: 'Финансы',
  };

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
  }

  componentWillMount() {
    const { token } = this.props;
    this.props.getFinancePayment(token);
  }

  _upperCase(word) {return <Text style={styles.tabTitleStyle}>{word.toUpperCase()}</Text>;}

  renderPayment = () => {
    const { financeData } = this.props;
    const { currentTab } = this.state;

    return <Tab
      heading={<TabHeading style={styles.tabHeaderStyle}>
        <View style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab % 3 === 0 && styles.activeTabStyle]}>
          {this._upperCase('Оплата')}
        </View>
      </TabHeading>}>
        <Content style={{backgroundColor: '#CED8DA',}}>
          {!financeData ? <Spinner color='blue' /> : <List dataArray={financeData[0].charges}
            renderRow={(item) =>
              <View style={styles.listStyle}>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 14,}}>Задолженность по оплате{'\n'}за обучение</Text>
                  <Text style={styles.deadline}>Оплатить до <Text style={{fontWeight: 'bold', fontSize: 12,}}>29.10.18</Text></Text>
                </View>
                <View>
                  <Text style={styles.paymentAmount}>5600 P</Text>
                </View>
              </View>
            }>
          </List>}
        </Content>
      </Tab>
  }

  renderSchoolarship = () => {
    const { currentTab } = this.state;

    return <Tab
      heading={<TabHeading style={styles.tabHeaderStyle}>
         <View style={[styles.tabHeadingStyle, styles.tabHeadingRight, currentTab % 3 === 1 && styles.activeTabStyle]}>
           {this._upperCase('Стипендии')}
         </View>
       </TabHeading>}>
          <Content style={{backgroundColor: '#CED8DA',}}>
            <List dataArray={[{}, {}]}
              renderRow={(item) =>
                <View style={styles.listStyle}>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 14,}}>3 семестр, Корпоративная</Text>
                    <Text style={styles.deadline}>Начислена <Text style={{fontWeight: 'bold', fontSize: 12,}}>29.10.18</Text></Text>
                  </View>
                  <View>
                    <Text style={styles.paymentAmount}>3500 P</Text>
                  </View>
                </View>
              }>
            </List>
          </Content>
       </Tab>
  }

  render () {
    const { userStatus, navigation, financeData } = this.props;
    const { currentTab } = this.state;
    console.log('finance data', financeData);
    return (
      <Container style={styles.container}>
        <Tabs
          onChangeTab={({i}) => this.setState({ currentTab: i})}
          tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
        >
          {this.renderPayment()}
          {this.renderSchoolarship()}
        </Tabs>
        <FooterSection
          userStatus = {userStatus}
          navigate={navigation.navigate}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.financeReducer
  };
}

const mapDispatchToProps = dispatch => ({
  getFinancePayment: (token) => dispatch(getFinancePayment(token)),
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(FinanceScreen);
