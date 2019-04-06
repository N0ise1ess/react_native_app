import {styles} from "./styles";
import {connect} from "react-redux";
import {Button, Container, Content, Icon, Input, Item, ListItem, Spinner, Text} from "native-base";
import React, {Component} from 'react';
import {Keyboard, FlatList, View} from "react-native";
import {CustomIcon} from "../../../shared/components/custom-icon";
import {FooterSection} from "../../../shared/components/footer";
import {Navigation} from "react-native-navigation";

const collections = [
  {
    id: 1,
    title: 'Раздел по умолчанию',
    count: 10,
    books: [
      {
        id: 1,
        author: 'Бражников М.А.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Управление изменениями; базовый курс: учеб. курс'
      },
      {
        id: 2,
        author: 'Хорина И.В.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Национальная и мировая экономика, печатное издание',
        name: 'Экономика-математические методы исследования и моделирования национальной экономики: практические решения'
      }
    ]
  },
  {
    id: 2,
    title: 'Экономика',
    count: 5,
    books: [
      {
        id: 1,
        author: 'Бражников М.А.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Управление изменениями; базовый курс: учеб. курс'
      },
      {
        id: 2,
        author: 'Хорина И.В.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Национальная и мировая экономика, печатное издание',
        name: 'Экономика-математические методы исследования и моделирования национальной экономики: практические решения'
      }
    ]
  },
  {
    id: 3,
    title: 'Разработка нефтянных месторождений',
    count: 5,
    books: [
      {
        id: 1,
        author: 'Бражников М.А.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Управление изменениями; базовый курс: учеб. курс'
      },
      {
        id: 2,
        author: 'Хорина И.В.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Экономика-математические методы исследования и моделирования национальной экономики: практические решения'
      }
    ]
  }
]

class InnerComponent extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Коллекции',
        },
        backButton: {
          id: 'back'
        }
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      searchedText: '',
      books: [],
      step: 0
    };
    Navigation.events().bindComponent(this);
  }

  render() {
    const {styles, books} = this.state
    const {collectionLoading} = this.props

    return (
        <Container style={styles.container}>
          {books && books.length > 0 ?
            <Item style={styles.searchBar}>
              <Icon name="ios-search" style={styles.searchIcon}/>
              <Input
                  style={styles.searchInput}
                  placeholder="Поиск"
                  value={this.state.searchedText}
                  onChangeText={text => this.setState({searchedText: text})}
              />
              <Button transparent onPress={this.onHandleSubmit}>
                <Text style={styles.btnFind}>Найти</Text>
              </Button>
            </Item> : null
          }
          <Content ref={node => this.content = node}>
            {collectionLoading ? <Spinner color='blue' style={styles.spinner}/>
                : books && books.length > 0
                    ? this._renderBooksList()
                    : this._renderCollection()
            }
          </Content>
          <FooterSection {...this.props} />
        </Container>
    )
  }

  _renderCollection = () => {
    const {styles} = this.state

    return <FlatList
        data={collections}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => (
            <ListItem
                style={styles.listItemStyle}
                button
                onPress={() => {
                  item.books ? this.handleClick(item.books, item.title) : {}
                }}
            >
              <View style={styles.listItem}>
                <CustomIcon style={styles.iconStar} name="star"/>
                <View style={styles.listItemContent}>
                  <View>
                    <View style={styles.collectionTitle}>
                      <Text style={styles.titleStyle}>{item.title}</Text>
                    </View>
                    <View style={styles.collectionInfo}>
                      <Text style={styles.generalText}>{item.count} книг</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ListItem>
        )}
    />
  };

  _renderBooksList = () => {
    const {books, styles} = this.state

    return <FlatList
        data={books}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => (
            <ListItem
                style={styles.listItemStyle}
                button
                onPress={() => {
                }}
            >
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
        )}/>
  }

  navigationButtonPressed({buttonId}) {
    buttonId === 'buttonLeft' && this._handleBackButton();
  }

  handleClick(books, title) {
    this.setState({books: books, step: 1})
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        title: {
          text: title
        }
      }
    });
  }

  _handleBackButton = () => {
    const {step} = this.state;
    if (step > 0) {
      this.setState({books: [], step: 0})
      Navigation.mergeOptions(this.props.componentId, {
        topBar: {
          title: {
            text: 'Коллекции'
          }
        },
      });
    } else Navigation.pop(this.props.componentId);
  }

  onHandleSubmit = () => {
    Keyboard.dismiss();
  };
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.libraryReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export const LibraryFavouriteScreen = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerComponent);