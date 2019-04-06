import {styles} from "../library-card/styles";
import {connect} from "react-redux";
import {Button, Container, Content, Icon, Input, Item, ListItem, Spinner, Text} from "native-base";
import React from "react";
import {Keyboard} from "react-native";
import {FlatList, View} from "../../../contacts/screens/divisions/divisions.screen";
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
    books: ['углероводороное сырье','нефть','добыча нефти','нефтепереработка']
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
              <Text style={{color: "#163D7D"}}>Найти</Text>
            </Button>
          </Item>
          <Content ref={node => this.content = node}>
            {collectionLoading
                ? <Spinner color='blue' style={{justifyContent: 'center', alignItems: 'center'}}/>
                : <FlatList
                    data={collections}
                    extraData={}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({item, index}) => (
                        <ListItem
                            button
                            onPress={() => {alert('Go to view')}}
                        >
                          <View style={styles.listItem}>
                            <CustomIcon style={styles.iconUniversity} name="university"/>
                            <View style={styles.listItemContent}>
                              <Text style={styles.titleStyle}>{item.title}</Text>
                              <Text>{item.books.length}</Text>
                              {item.books.length > 0 ?
                                  <Text style={styles.listBooks}>{item.books.toString()}</Text>
                              : null}
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