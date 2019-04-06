import {styles} from "./styles";
import {connect} from "react-redux";
import {Button, Container, Content, Icon, Input, Item, ListItem, Spinner, Text} from "native-base";
import React, {Component} from 'react';
import {Keyboard, FlatList, View} from "react-native";
import {CustomIcon} from "../../../shared/components/custom-icon";
import {FooterSection} from "../../../shared/components/footer";

const collections = [
  {
    id: 1,
    title: "Экономика",
    booksTitles: ['экономика', 'социально-экономические система', 'экономика-математические модели', 'экономические процессы'],
    books: [
      {
        id:1,
        author: 'Бражников М.А.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Управление изменениями; базовый курс: учеб. курс'
      },
      {
        id:2,
        author: 'Хорина И.В.',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Экономика-математические методы исследования и моделирования национальной экономики: практические решения'
      },
      {
        id:3,
        author: 'Author 3',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Название книги 3'
      },
      {
        id:4,
        author: 'Author 4',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Название книги 4'
      },

    ]
  },
  {
    id: 2,
    title: 'Разработка нефтянных скважин',
    booksTitles: ['углероводороное сырье', 'нефть','добыча'],
    books: [
      {
        id:1,
        author: 'Author 1',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Название книги 1'
      },
      {
        id:2,
        author: 'Author 2',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Название книги 2'
      },
      {
        id:3,
        author: 'Author 3',
        additionalInfo: '2015, Самар.гос.техн.ун-т, Производственный менеджмент, печатное издание',
        name: 'Название книги 3'
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
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      searchedText: '',
      books: []
    };
  }

  render() {
    const {styles, books} = this.state
    const {collectionLoading} = this.props

    return (
        <Container style={styles.container}>
          <Item style={styles.searchBar}>
            <Icon name="ios-search" style={styles.searchIcon}/>
            <Input
                style={styles.searchInput}
                placeholder="Поиск по коллекции"
                value={this.state.searchedText}
                onChangeText={text => this.setState({searchedText: text})}
            />
            <Button transparent onPress={this.onHandleSubmit}>
              <Text style={styles.btnFind}>Найти</Text>
            </Button>
          </Item>
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
                    onPress={() => {item.books ? this.setState({books : item.books}) : {}}}
                >
                  <View style={styles.listItem}>
                    <CustomIcon style={styles.iconUniversity} name="grid"/>
                    <View style={styles.listItemContent}>
                      <View>
                        <View style={styles.collectionTitle}>
                          <Text style={styles.titleStyle}>{item.title}</Text>
                        </View>
                        <View style={styles.collectionInfo}>
                          <Text style={styles.generalText}>{item.books.length} книги</Text>
                        </View>
                        {item.books.length > 0 ?
                            <View style={styles.collectionInfo}>
                              <Text style={styles.generalText}>{item.booksTitles.join(", ")}</Text>
                            </View> : null}
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
                      alert('Book')
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

export const LibraryCollectionScreen = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerComponent);