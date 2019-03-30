import { Container, Content, Tab, TabHeading, Tabs, List, Text } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { ButtonBack, FooterSection, CustomIcon } from '../../../shared/components';
import { styles } from './styles';

const requestsList = [
  {
    id: '121311',
    name: 'Обработка массивов данных',
    status: 'Отклонена',
    completed: false,
    date: '21 сентября 2018'
  },
  {
    id: '121312',
    name: 'Разработка скважин',
    status: 'Выполнена',
    completed: true,
    date: '22 сентября 2018'
  },
  {
    id: '121313',
    name: 'литература на англ',
    status: 'Обработана',
    completed: true,
    date: '22 сентября 2018'
  },
  {
    id: '121314',
    name: 'нефть, нефтедобыч',
    status: 'Принята',
    completed: true,
    date: '22 сентября 2018'
  }
];

const literatureList = [
  {
    id: '121311',
    status: 'Отклонена',
    completed: false,
    date: '21 сентября 2018'
  },
  {
    id: '121312',
    status: 'Выдано 18 мая 2018 в 13:00',
    completed: true,
    date: '22 сентября 2018'
  },
  {
    id: '121313',
    status: 'Можно забрать 18 мая 2018 в 13:00',
    completed: true,
    date: '22 сентября 2018'
  },
  {
    id: '121314',
    status: 'Обрабатываeтся',
    completed: false,
    date: '22 сентября 2018'
  }
];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Информация о заявках',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

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
            <View style={styles.upperSection}>
              <View style={styles.requestIndexSection}>
                {item.completed ? (
                  <CustomIcon name="ok" style={[styles.markIcon, styles.okIcon]} />
                ) : (
                  <View style={styles.markIcon}></View>
                )}
                <Text style={styles.title}>{'\u2116'} {item.id}</Text>
              </View>
              <View>
                <Text style={styles.dateStyle}>{item.date}</Text>
              </View>
            </View>
            {item.name && <Text style={styles.textStyle}>{item.name}</Text>}
            <Text style={[styles.textStyle, styles.statusStyle]}>{item.status}</Text>
          </View>
        )}
      />
    </Content>
  };

  _renderԼiteratureList = () => {
    const { currentTab, styles } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab === 1 && styles.activeTabStyle]}
            >
              {this._upperCase('Выдача литературы')}
            </View>
          </TabHeading>
        }>
        {this._renderList(literatureList)}
      </Tab>
    );
  };

  _renderRequestsList = () => {
    const { currentTab, styles } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingRight, currentTab % 3 === 0 && styles.activeTabStyle]}
            >
              {this._upperCase('Подбор литературы')}
            </View>
          </TabHeading>
        }>
        {this._renderList(requestsList)}
      </Tab>
    );
  };

  render() {
    const { userStatus, navigation, token } = this.props;
    const {styles} = this.state;
    return (<Container style={styles.container}>
      <Tabs
        tabContainerStyle={{elevation : 0}}
        onChangeTab={({ i }) => this.setState({ currentTab: i })}
        tabBarUnderlineStyle={styles.tabBarUnderline}>
        {this._renderԼiteratureList()}
        {this._renderRequestsList()}
      </Tabs>
      <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
    </Container>);
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

export const RequestsInfoScreen = connect(
  mapStateToProps,
)(InnerComponent);
