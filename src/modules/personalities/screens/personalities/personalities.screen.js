import {Button, Container, Content, Icon, Input, Item, List, ListItem, Spinner, Text} from 'native-base';
import React, {Component} from 'react';
import {Image, View, Animated, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {img_teacher} from '../../../../assets/images';
import {ButtonBack, FooterSection} from '../../../shared/components';
import {styles} from './styles';
import {findPersonalityByName} from "../../../../actions/personalityAction";
import {News} from "../../../news/components/news";
import Swipeable from 'react-native-gesture-handler/Swipeable';


const itemList = [
  {
    name: 'Иванов Иван Иванович',
    post: 'Проректор',
    department: 'Администрация',
    image: img_teacher,
  },
  {
    name: 'Иванов Георгий Петрович',
    post: 'Ректор',
    department: 'Администрация',
    image: img_teacher,
  },
  {
    name: 'Иванов Георгий Петрович',
    post: 'Ректор',
    department: 'Администрация',
    image: img_teacher,
  },
  {
    name: 'Иванов Георгий Петрович',
    post: 'Ректор',
    department: 'Администрация',
    image: img_teacher,
  },
  {
    name: 'Иванов Георгий Петрович',
    post: 'Ректор',
    department: 'Администрация',
    image: img_teacher,
  },
  {
    name: 'Иванов Георгий Петрович',
    post: 'Ректор',
    department: 'Администрация',
    image: img_teacher,
  },
];

const alphabets = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');

class InnerComponent extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Персоналии',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()}/>,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      shown: new Animated.Value(1),
    };
  }

  componentWillMount() {
    //Getting first 50 contacts
    this.props.findPersonalityByName('', 20, null)
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    const { styles } = this.state
    let alphabetsLocal = alphabets;
    return (
      <Animated.View>
        <View style={[styles.alphabetContainer]}>
          <View style={{flex: alphabetsLocal.length}}>
            {alphabetsLocal.map((item, index) =>
              <View style={styles.wordContainer(alphabetsLocal.length, index)} key={index}>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 11}}
                      numberOfLines={1}
                      uppercase={true}>{item}</Text>
              </View>)}
          </View>
        </View>
      </Animated.View>
    );
  };

  render() {
    const {userStatus, navigation, token, personalities, personalitiesIsLoading} = this.props;
    const {styles} = this.state;
    let {_value} = this.state.shown;
    return (
      <Container style={styles.container}>
        <Item style={styles.searchBar}>
          <Icon name="ios-search" style={styles.searchIcon}/>
          <Input
            style={styles.searchInput}
            placeholder="Поиск по ФИО"
            value={this.state.searchedText}
            onChangeText={text => this.setState({searchedText: text})}
          />
          <Button transparent onPress={this.onHandleSubmit}>
            <Text>Найти</Text>
          </Button>
        </Item>
        <View style={{flex: 9, flexDirection: 'row'}}>
          <Swipeable
            // onSwipeableLeftOpen={styles.swipeable(40)}
            containerStyle={styles.swipeable()}
            renderLeftActions={this.renderLeftActions}/>
          <Content contentContainerStyle={{flex: 8.9, marginLeft: 5}}>
            {!false ?
              <List
                style={styles.listStyle}
                dataArray={itemList}
                renderRow={item => (
                  <ListItem button style={styles.listItemStyle} onPress={() => navigation.navigate('Personality')}>
                    <Image source={img_teacher} style={styles.iconStyle}/>
                    <View style={styles.columnStyle}>
                      <Text style={styles.titleStyle}>{item.name}</Text>
                      <Text style={[styles.textStyle, {color: '#979797'}]}>{item.post}</Text>
                      <Text style={styles.textStyle}>{item.department}</Text>
                    </View>
                  </ListItem>

                )}/> : <Spinner color='#163D7D' style={{justifyContent: 'center', alignItems: 'center'}}/>}
          </Content>
        </View>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} maxHeight={40}/>
      </Container>
    );
  }

  onHandleSubmit = () => {
    this.props.findPersonalityByName(this.state.searchedText)
    this.setState({searchedPersonalities: []})
  }

  fadeIn = () => {
    Animated.timing(this.state.shown, {
      toValue: 1,
      duration: 300,
    }).start();
    // this.setState({opa: new Animated.Value(1)})
  };

  fadeOut = () => {
    Animated.timing(this.state.shown, {
      toValue: 0,
      duration: 300,
    }).start()
    // this.setState({shown: new Animated.Value(0)})
  };
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.personalityReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  findPersonalityByName: (name, size, page) => dispatch(findPersonalityByName(name, size, page)),
});

export const PersonalitiesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
