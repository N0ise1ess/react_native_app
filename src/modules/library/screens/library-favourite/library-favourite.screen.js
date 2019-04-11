import { styles } from './styles';
import { connect } from 'react-redux';
import { Button, Container, Content, Icon, Input, Item, ListItem, Spinner, Text } from 'native-base';
import React, { Component } from 'react';
import { Keyboard, FlatList, View } from 'react-native';
import { CustomIcon, FooterSection } from '../../../shared';
import { Navigation } from 'react-native-navigation';

const shortContent = 'Рассмотрены основные экономико-математические методы и модели анализа, '
  + 'оптимизации ресурсов и принятия решений в разнообразных условиях определенности, риска '
  + 'и неопределенности и их применение в производстве, экономике, финансах и бизнесе. '
  + 'Исследованы типовые и усложненные экономико-математические модели задач математического '
  + 'программирования, статистического анализа данных, ...';

const collections = [
  {
    id: 1,
    title: 'Раздел по умолчанию',
    books: [
      {
        id: 1,
        author: 'Бражников М.А.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Управление изменениями; базовый курс: учеб. курс',
      },
      {
        id: 2,
        author: 'Хорина И.В.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Национальная и мировая экономика, печатное издание',
        name:
          'Экономика-математические методы исследования и моделирования национальной экономики: практические решения',
      },
    ],
  },
  {
    id: 2,
    title: 'Экономика',
    books: [
      {
        id: 1,
        author: 'Бражников М.А.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Управление изменениями; базовый курс: учеб. курс',
      },
      {
        id: 2,
        author: 'Хорина И.В.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Национальная и мировая экономика, печатное издание',
        name:
          'Экономика-математические методы исследования и моделирования национальной экономики: практические решения',
      },
    ],
  },
  {
    id: 3,
    title: 'Разработка нефтянных месторождений',
    books: [
      {
        id: 1,
        author: 'Бражников М.А.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Управление изменениями; базовый курс: учеб. курс',
      },
      {
        id: 2,
        author: 'Хорина И.В.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name:
          'Экономика-математические методы исследования и моделирования национальной экономики: практические решения',
      },
    ],
  },
];

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Избранное',
        },
        backButton: {
          id: 'back',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      activeBook: null,
      searchedText: '',
      books: [],
      step: 0,
    };
    Navigation.events().bindComponent(this);
  }

  render() {
    const { styles, books, activeBook } = this.state;
    const { collectionLoading } = this.props;

    const booksPresented = books && books.length > 0;
    return (
      <Container style={styles.container}>
        {booksPresented && !activeBook ? (
          <Item style={styles.searchBar}>
            <Icon name="ios-search" style={styles.searchIcon} />
            <Input
              style={styles.searchInput}
              placeholder="Поиск"
              value={this.state.searchedText}
              onChangeText={(text) => this.setState({ searchedText: text })}
            />
            <Button transparent onPress={this.onHandleSubmit}>
              <Text style={styles.btnFind}>Найти</Text>
            </Button>
          </Item>
        ) : null}
        <Content ref={(node) => (this.content = node)}>
          {collectionLoading && <Spinner color="blue" style={styles.spinner} />}
          {!collectionLoading && !activeBook &&  (booksPresented ? this._renderBooksList() : this._renderCollection())}
          {activeBook && this._renderBookView()}
        </Content>
        <FooterSection {...this.props} />
      </Container>
    );
  }

  _renderBookView = () => {
    const { styles } = this.state;
    const { author, additionalInfo, name } = this.state.activeBook;

    return <View style={styles.bookViewerSection}>
      <View style={styles.bookActionButtons}>
        <CustomIcon name="star" style={styles.actionButton} />
        <Icon type="FontAwesome" name="plus" style={styles.actionButton} />
      </View>
      <Text style={[styles.authorName, styles.bookViewText]}>{author}</Text>
      <Text style={[styles.titleStyle, styles.bookViewText]}>{name}</Text>
      <Text style={[styles.authorName, styles.bookViewText]}>{additionalInfo}</Text>
      <Text style={[styles.authorName, styles.bookViewText]}>{shortContent}</Text>
      <Text style={styles.keyWordsText}>Ключевые слова</Text>
      <Button style={styles.readButton}><Text style={styles.readButtonText}>Читать</Text></Button>
    </View>;
  };

  _renderCollection = () => {
    const { styles } = this.state;

    return (
      <FlatList
        data={collections}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <ListItem
            style={styles.listItemStyle}
            button
            onPress={() => {
              item.books ? this.handleClick(item.books, item.title) : {};
            }}
          >
            <View style={styles.listItem}>
              <CustomIcon style={styles.iconStar} name="star" />
              <View style={styles.listItemContent}>
                <View>
                  <View style={styles.collectionTitle}>
                    <Text style={styles.titleStyle}>{item.title}</Text>
                  </View>
                  <View style={styles.collectionInfo}>
                    <Text style={styles.generalText}>{item.books.length} книги</Text>
                  </View>
                </View>
              </View>
            </View>
          </ListItem>
        )}
      />
    );
  };

  _renderBooksList = () => {
    const { books, styles } = this.state;

    return (
      <FlatList
        data={books}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <ListItem button
            style={[styles.listItemStyle, styles.marginTop0]}
            onPress={() => this.setState({ activeBook: item })}>
            <View style={styles.listItem}>
              <View style={styles.booksListItemContainer}>
                <View>
                  <View style={styles.collectionInfo}>
                    <Text style={styles.authorName}>{item.author}</Text>
                  </View>
                  <View style={styles.collectionTitle}>
                    <Text style={styles.titleStyle}>{item.name}</Text>
                  </View>
                  <View style={styles.collectionInfo}>
                    <Text style={styles.generalText}>{item.additionalInfo}</Text>
                  </View>
                </View>
              </View>
            </View>
          </ListItem>
        )}
      />
    );
  };

  navigationButtonPressed({ buttonId }) {
    buttonId === 'buttonLeft' && this._handleBackButton();
  }

  handleClick(books, title) {
    this.setState({ books: books, step: 1 });
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        title: {
          text: title,
        },
      },
    });
  }

  _handleBackButton = () => {
    const { step } = this.state;
    switch (step) {
      case 2:
        this.setState({ books: [], step: 1, activeBookPath: [] });
        Navigation.mergeOptions(this.props.componentId, {
          topBar: {
            title: {
              text: 'Избранное',
            },
          },
        });
        break
      case 1:
        this.setState({ books: [], step: 0 });
        Navigation.mergeOptions(this.props.componentId, {
          topBar: {
            title: {
              text: 'Избранное',
            },
          },
        });
        break
      default:
        Navigation.pop(this.props.componentId);
    }
  };

  onHandleSubmit = () => {
    Keyboard.dismiss();
  };
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    ...state.libraryReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export const LibraryFavouriteScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
