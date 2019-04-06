import {styles} from "./styles";
import {connect} from "react-redux";
import {Button, Container, Content, Icon, Input, Item, ListItem, Spinner, Text} from "native-base";
import React, { Component } from 'react';
import {Keyboard, FlatList, View} from "react-native";
import {CustomIcon} from "../../../shared/components/custom-icon";
import {FooterSection} from "../../../shared/components/footer";

const collections = [
  {
    id:1,
    title : "Экономика",
    books: ['экономика', 'социально-экономические система', 'экономика-математические модели', 'экономические процессы']
  },
  {
    id:2,
    title : 'Разработка нефтянных скважин',
    books: ['углероводороное сырье, нефть, добыча']
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
      searchedText: ''
    };
  }

  render() {
    const {styles} = this.state
    const { collectionLoading } = this.props
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
            {collectionLoading
                ? <Spinner color='blue' style={styles.spinner}/>
                : <FlatList
                    data={collections}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item, index}) => (
                        <ListItem
                            style={styles.listItemStyle}
                            button
                            onPress={() => {alert('Go to view')}}
                        >
                          <View style={styles.listItem}>
                            <CustomIcon style={styles.iconUniversity} name="grid"/>
                            <View style={styles.listItemContent}>
                              <View>
                                <View style={styles.collectionTitle}>
                                  <Text style={styles.titleStyle}>{item.title}</Text>
                                </View>
                                <View style={styles.collectionInfo}>
                                  <Text style={styles.listBooks}>{item.books.length} книги</Text>
                                </View>
                                  {item.books.length > 0 ?
                                    <View style={styles.collectionInfo}>
                                      <Text style={styles.listBooks}>{item.books.join(", ")}</Text>
                                    </View> : null}
                              </View>
                            </View>
                          </View>
                        </ListItem>
                    )}
                />
            }
          </Content>
          <FooterSection {...this.props} />
        </Container>
    )
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