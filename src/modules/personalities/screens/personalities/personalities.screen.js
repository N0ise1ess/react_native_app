import {Button, Container, Content, Icon, Input, Item, List, ListItem, Spinner, Text,} from 'native-base';
import React, {Component} from 'react';
import {Image, View, Animated, TouchableOpacity, Dimensions, Keyboard, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import {img_teacher} from '../../../../assets/images';
import {ButtonBack, FooterSection} from '../../../shared/components';
import {styles} from './styles';
import {findPersonalityByName, updatePersonalityByName} from "../../../../actions/personalityAction";
import Swipeable from 'react-native-gesture-handler/Swipeable';

const { height, width } = Dimensions.get("window")

const alphabets = 'абвгдежзиклмнопрстуфхцчшщэюя'.split('');

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Персоналии',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      isLoading: false,
      sideBarInitWidth: 15,
      sideBarFinishWidth: 45,
      sidebarWidth: new Animated.Value(15),
      personalitiesWidth : new Animated.Value(width - 15)
    };
  }

  componentWillMount() {
    //Getting first 20 contacts
    this.props.personalities.length === 0 && this.props.findPersonalityByName('', 20, null)
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
  }

  _keyboardDidShow = () => {
    this['sidebar'].close()
  }

  componentDidMount() {
    // this.props.navigation.addListener("didFocus", () => {
    //   if(this.props.personalities.length === 0) { 
    //     this.props.findPersonalityByName('', 20, null)
    //     this.setState({isLoading: false})
    //   }
    // });

    // this.props.navigation.addListener("didBlur", () => {
    //   this.setState({isLoading: true})
    // });
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
      <Animated.View style={[{transform: [{translateX: trans}]}]}>
        <View style={[styles.alphabetContainer]}>
          <View style={{flex: alphabetsLocal.length}}>
            {alphabetsLocal.map((item, index) =>
              <View style={styles.wordContainer(alphabetsLocal.length, index)} key={index}>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 12}}
                      numberOfLines={1}
                      uppercase={true}>{item}</Text>
              </View>)}
          </View>
        </View>
      </Animated.View>
    );
  };

  render() {
    const {userStatus, personalities, personalitiesIsLoading, personalitiesIsRefreshing} = this.props;
    const {styles, personalitiesWidth, sidebarWidth, isLoading} = this.state;

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
        <View style={{flex: 4, flexDirection: 'row'}}>
          <Animated.View style={[{width: sidebarWidth}]}>
          <Swipeable
            ref={component => this['sidebar'] = component}
            onSwipeableWillOpen={this.onSwipeableWillOpen}
            onSwipeableClose={this.onSwipeableWillClose}
            containerStyle={styles.swipeable()}
            renderLeftActions={this.renderLeftActions}/>
          </Animated.View>
          <Animated.View style={[{width: personalitiesWidth}, {marginLeft: 5}]}>
            <Content onLayout={this.onLayout} refreshControl={
                    <RefreshControl refreshing={personalitiesIsRefreshing}
                      onRefresh={this.props.updatePersonalityByName}
                    />
                  }>
              {!personalitiesIsLoading && (!isLoading || personalities) ?
                <List
                  style={styles.listStyle}
                  dataArray={personalities}
                  renderRow={item => (
                    <ListItem button style={styles.listItemStyle} onPress={() => Navigation.push(this.props.componentId, {
                      component: {
                        name: 'Personality',
                      },
                      passProps: {
                        personId : item.personId
                      }
                    })
                    }>
                      <Image source={img_teacher} style={styles.iconStyle}/>
                      <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle}>{item.name}</Text>
                        <Text style={[styles.textStyle, {color: '#979797'}]}>{item.post}</Text>
                        <Text style={styles.textStyle}>{item.department}</Text>
                      </View>
                    </ListItem>

                  )}/> : <Spinner color='#163D7D' style={{justifyContent: 'center', alignItems: 'center'}}/>}
            </Content>
          </Animated.View>
        </View>
        <FooterSection componentId={this.props.componentId} userStatus={userStatus} maxHeight={40}/>
      </Container>
    );
  }

  onSwipeableWillOpen = () => {
    const {sideBarFinishWidth} = this.state;
    Animated.timing(this.state.sidebarWidth, {
      toValue: sideBarFinishWidth,
      duration: 250
    }).start();
    this.setState({sidebarWidth : new Animated.Value(sideBarFinishWidth)});

    Animated.timing(this.state.personalitiesWidth, {
      toValue: width - sideBarFinishWidth,
      duration: 250
    }).start();
    this.setState({personalitiesWidth : new Animated.Value(width - sideBarFinishWidth)})
  }

  onSwipeableWillClose = () => {
    const {sideBarInitWidth} = this.state;
    Animated.timing(this.state.sidebarWidth, {
      toValue: sideBarInitWidth,
      duration: 250
    }).start();
    this.setState({sidebarWidth : new Animated.Value(sideBarInitWidth)});

    Animated.timing(this.state.personalitiesWidth, {
      toValue: width - sideBarInitWidth,
      duration: 250
    }).start();
    this.setState({personalitiesWidth : new Animated.Value(width - sideBarInitWidth)})
  }

  onLayout = event => {
    this.setState({personalitiesWidth : new Animated.Value(event.nativeEvent.layout.width)})
  }

  onHandleSubmit = () => {
    this.props.findPersonalityByName(this.state.searchedText)
    this.setState({searchedPersonalities: []})
  }
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
  updatePersonalityByName: () => dispatch(updatePersonalityByName()),
});

export const PersonalitiesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
