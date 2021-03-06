import moment from 'moment';
import { Container, Content, Icon, List, Spinner, Tab, TabHeading, Tabs, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { FooterSection } from '../../../shared';
import { getLibraryBook, getLibraryCard, getLibraryQRCode } from '../../store/library-actions';
import { styles } from './styles';

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Читательский билет',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      styles: styles(props.fontSize),
    };
  }

  componentWillMount() {
    moment.locale('ru');
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  componentDidMount() {
    this.props.getLibraryQRCode(this.props.token);
    this.props.getLibraryCard(this.props.token);
    this.props.getLibraryBook(this.props.token);
  }

  _upperCase(word) {
    return (
      <Text allowFontScaling={false} style={this.state.styles.tabTitleStyle}>
        {word.toUpperCase()}
      </Text>
    );
  }

  renderLibraryCard = () => {
    const { firstName, lastName, secondName, role, id, qrcodeData } = this.props;
    const { currentTab, styles } = this.state;
    const studentIndex = role.findIndex((item) => item.type === 'STUDENT');
    return (
      <Tab
        heading={
          <TabHeading style={[styles.tabHeaderStyle, styles.tabHeader]}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab % 3 === 0 && styles.activeTabStyle]}
            >
              {this._upperCase('Читательский билет')}
            </View>
          </TabHeading>
        }
      >
        <Content style={styles.tabSectionStyle}>
          {role.some((item) => item['type'] === 'STUDENT') ? (
            role[studentIndex].details && role[studentIndex].details.length === 0 ? (
              <View style={styles.noDataStyle}>
                <Text style={styles.noDataTextStyle}>Пользователь не содержит данных</Text>
              </View>
            ) : (
              <View style={styles.dataSection}>
                <Text style={styles.label}>ФИО</Text>
                <Text style={styles.dataText}>{`${lastName} ${firstName} ${secondName}`}</Text>
                <Text style={styles.label}>Факультет</Text>
                <Text style={styles.dataText}>{role[studentIndex].details[0].plan.speciality.name}</Text>
                <Text style={styles.label}>Курс</Text>
                <Text style={styles.dataText}>{role[studentIndex].details[0].course}</Text>
                <Text style={styles.label}>Номер группы</Text>
                <Text style={styles.dataText}>{role[studentIndex].details[0].group.name}</Text>
                <Text style={styles.label}>Форма обучения</Text>
                <Text style={styles.dataText}>{role[studentIndex].details[0].plan.studyform.name}</Text>
                <Text style={styles.label}>Дата регистрации</Text>
                <Text style={styles.dataText}>Нет данных</Text>
                <Text style={styles.label}>Идентификатор пользователя</Text>
                <Text style={styles.dataText}>{id}</Text>
              </View>
            )
          ) : (
            (role.some((item) => item['type'] === 'EMPLOYEE_PPS') ||
              role.some((item) => item['type'] === 'EMPLOYEE')) && (
              <View style={styles.dataSection}>
                <Text style={styles.label}>ФИО</Text>
                <Text style={styles.dataText}>{`${lastName} ${firstName} ${secondName}`}</Text>
                <Text style={styles.label}>Дата регистрации</Text>
                <Text style={styles.dataText}>Нет данных</Text>
                <Text style={styles.label}>Идентификатор пользователя</Text>
                <Text style={styles.dataText}>{id}</Text>
              </View>
            )
          )}
          <View style={styles.qrcodeSection}>
            {qrcodeData && (
              <Image onLoad={() => <Spinner color="blue" />} source={{ uri: qrcodeData }} style={styles.qrcodeImage} />
            )}
          </View>
        </Content>
      </Tab>
    );
  };

  formattedDate = (date) => {
    console.log('date', date);
    // const newDate = moment(date, 'MM-DD-YYYY HH:mm:ss')._i;
    return moment(date).format('DD.MM.YYYY');
  };

  renderLibraryBook = () => {
    const { bookInfo } = this.props;
    const { currentTab, styles } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={[styles.tabHeaderStyle, styles.tabHeader]}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingRight, currentTab % 3 === 1 && styles.activeTabStyle]}
            >
              {this._upperCase('Выданные книги')}
            </View>
          </TabHeading>
        }
      >
        {bookInfo && bookInfo.length === 0 ? (
          <View style={styles.noDataStyle}>
            <Text style={styles.noDataTextStyle}>Информация о выданной литературе отсутствует</Text>
          </View>
        ) : (
          <Content style={{ backgroundColor: '#CED8DA', marginTop: 40 }}>
            <List
              dataArray={bookInfo}
              renderRow={(item) => (
                <View style={styles.listStyle}>
                  <View style={styles.listItemStyle}>
                    <View
                      style={{
                        backgroundColor: item.returned ? '#163D7D' : 'red',
                        width: 10,
                        height: 10,
                        borderRadius: 30,
                        marginTop: 5,
                        marginRight: 10,
                      }}
                    />
                    <Text style={styles.bookTitle}>{item.content.description}</Text>
                  </View>
                  <Text style={styles.bookAuthor}>{item.content.author}</Text>
                  <Text style={styles.issueDate}>Выдано {item.dateTo ? item.dateTo : <Spinner color="blue" />}</Text>
                  {item.returned ? (
                    <View style={styles.listItemStyle}>
                      <Icon type="Octicons" name="check" style={{ color: '#163D7D', fontSize: 15 }} />
                      <Text style={[styles.returnStyle, { color: '#163D7D' }]}>Возвращено</Text>
                    </View>
                  ) : (
                    <Text style={[styles.returnStyle, item.isDelayes && { color: 'red' }, { paddingLeft: 22 }]}>
                      {item.dateFrom ? `Вернуть до ${item.dateFrom}` : <Spinner color="blue" />}
                    </Text>
                  )}
                </View>
              )}
            />
          </Content>
        )}
      </Tab>
    );
  };

  render() {
    const { cardInfo, bookInfo, userStatus } = this.props;
    const { currentTab, styles } = this.state;
    return (
      <Container style={styles.container}>
        {userStatus === 'guest' ? (
          <View style={styles.container}>
            <Text style={styles.text}>Вы гость, для вас нет информации</Text>
          </View>
        ) : (
          <Tabs
            onChangeTab={({ i }) => this.setState({ currentTab: i })}
            tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}
          >
            {this.renderLibraryCard()}
            {this.renderLibraryBook()}
          </Tabs>
        )}
        <FooterSection {...this.props} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    ...state.libraryReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getLibraryCard: (token) => dispatch(getLibraryCard(token)),
  getLibraryBook: (token) => dispatch(getLibraryBook(token)),
  getLibraryQRCode: (token) => dispatch(getLibraryQRCode(token)),
  dispatch,
});

export const LibraryCardScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
