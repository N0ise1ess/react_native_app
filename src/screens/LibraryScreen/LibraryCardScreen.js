import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Tabs,
  Tab,
  TabHeading,
  List,
  ListItem,
  Icon,
} from 'native-base';

import FooterSection from '../../components/Footer';

import { getLibraryCard, getLibraryBook, getLibraryQRCode } from '../../actions/libraryAction';
import styles from './styles/libraryCardStyle';

const itemList = [
  {
    bookTitle: 'Изучение основ гидродинамических исследований нефтяных скважин',
    bookAuthor: 'Иванова Н.М.',
    issueDate: '01.09.2015',
  },
  {
    bookTitle: 'Исследование стационарного прямолинейно-параллельного течения',
    bookAuthor: 'Иванова Н.М.',
    issueDate: '01.09.2015',

  }
]

class LibraryCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
  }

  static navigationOptions = {
    title: 'Читательский билет',
  };

  componentWillMount() {
    this.props.getLibraryQRCode(this.props.token)
    this.props.getLibraryCard(this.props.token);
    this.props.getLibraryBook(this.props.token);
  }

  _upperCase(word) {
    return <Text style={styles.tabTitleStyle}>{word.toUpperCase()}</Text>;
  }

  renderLibraryCard = () => {
    const { cardInfo } = this.props;
    const { currentTab } = this.state;
    return <Tab
      heading={<TabHeading style={styles.tabHeaderStyle}>
        <View style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab % 3 === 0 && styles.activeTabStyle]}>
          {this._upperCase('Читательский билет')}
        </View>
      </TabHeading>}>
      <Content
        style={styles.tabSectionStyle}
      >
        <Text style={styles.label}>ФИО</Text>
        <Text style={styles.dataText}>{cardInfo && cardInfo.name ? cardInfo.name : 'Иванов Иван Иванович'}</Text>
        <Text style={styles.label}>Факультет</Text>
        <Text style={styles.dataText}>{cardInfo && cardInfo.faculty ? cardInfo.faculty : 'ИАИТ'}</Text>
        <Text style={styles.label}>Курс</Text>
        <Text style={styles.dataText}>{cardInfo && cardInfo.course ? cardInfo.course : '4'}</Text>
        <Text style={styles.label}>Номер группы</Text>
        <Text style={styles.dataText}>{cardInfo && cardInfo.groupId ? cardInfo.groupId : '09.03.01'}</Text>
        <Text style={styles.label}>Форма обучения</Text>
        <Text style={styles.dataText}>{cardInfo && cardInfo.educationType ? cardInfo.educationType : 'Дневная'}</Text>
        <Text style={styles.label}>Дата регистрации</Text>
        <Text style={styles.dataText}>{cardInfo && cardInfo.date ? cardInfo.date : '21.09.2015'}</Text>
        <Text style={styles.label}>Идентификатор пользователя</Text>
        <Text style={styles.dataText}>{cardInfo && cardInfo.user_id ? cardInfo.user_id : '3322123123121'}</Text>
      </Content>
    </Tab>
  }

  renderLibraryBook = () => {
    const { bookInfo, navigation, userStatus } = this.props;
    const { currentTab } = this.state;
    return <Tab
      heading={<TabHeading style={styles.tabHeaderStyle}>
         <View style={[styles.tabHeadingStyle, styles.tabHeadingRight, currentTab % 3 === 1 && styles.activeTabStyle]}>
           {this._upperCase('Выданные книги')}
         </View>
       </TabHeading>}>
        <Content style={{backgroundColor: '#CED8DA',}}>
          <List dataArray={itemList}
            renderRow={(item) =>
              <View style={styles.listItemStyle} >
                <Text style={styles.bookTitle}><Icon type='Octicons' name='primitive-dot' style={{ color: '#163D7D', fontSize: 16 }} />{item.bookTitle}</Text>
                <Text style={styles.bookAuthor}>{item.bookAuthor}</Text>
                <Text style={styles.issueDate}>Выдано: {item.issueDate}</Text>
                <Text><Icon type='Octicons' name='check' style={{ color: '#163D7D', fontSize: 16 }} /> Возвращено</Text>
              </View>
            }>
          </List>
        </Content>
    </Tab>
  }

  render() {
    const { cardInfo, bookInfo, userStatus, navigation } = this.props;
    const { currentTab } = this.state;
    return (
      <Container style={styles.container}>
        <Tabs
          onChangeTab={({i}) => this.setState({ currentTab: i})}
          tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
        >
          {this.renderLibraryCard()}
          {this.renderLibraryBook()}
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
    ...state.libraryReducer,
  }
}

const mapDispatchToProps = dispatch => ({
  getLibraryCard: (token) => dispatch(getLibraryCard(token)),
  getLibraryBook: (token) => dispatch(getLibraryBook(token)),
  getLibraryQRCode: (token) => dispatch(getLibraryQRCode(token)),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(LibraryCardScreen);
