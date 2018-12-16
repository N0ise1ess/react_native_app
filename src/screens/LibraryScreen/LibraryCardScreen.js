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

import { getLibraryCard, getLibraryBook } from '../../actions/libraryAction';
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

    }
  }

  componentWillMount() {
    this.props.getLibraryCard(this.props.token);
    this.props.getLibraryBook(this.props.token);
  }

  renderLibraryCard = () => {
    const { cardInfo } = this.props;
    return <Tab style={{backgroundColor: 'transparent', paddingLeft: 15, paddingRight: 15,}} heading={<TabHeading style={{marginLeft: 15, borderTopLeftRadius: 25, borderBottomLeftRadius: 25, backgroundColor: '#0E63EE'}}><Text style={{color: '#fff', fontSize: 14,}}>Читательский билет</Text></TabHeading>}>
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
    </Tab>
  }

  renderLibraryBook = () => {
    const { bookInfo } = this.props;
    return <Tab style={{backgroundColor: 'transparent'}} heading={<TabHeading style={{marginRight: 15, borderTopRightRadius: 25, borderBottomRightRadius: 25, backgroundColor: '#0E63EE'}}><Text style={{color: '#fff', fontSize: 14,}}>Выданные книги</Text></TabHeading>}>
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
    </Tab>
  }

  render() {
    const { cardInfo, bookInfo } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
        <Tabs
          tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
        >
          {this.renderLibraryCard()}
          {this.renderLibraryBook()}
        </Tabs>
        </Content>
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
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(LibraryCardScreen);
