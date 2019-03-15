import { Container, Content, Icon, List, ListItem, Text, Item, Input, Button, Spinner } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import {CustomIcon} from '../../../shared/components/custom-icon';
import { img_campus_dorm } from '../../../../assets/images';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';
import * as actions from "../../../../actions/contactsAction";

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Корпуса и общежития',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      searchedText: '',
    };
    props.getBuildings();
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  render() {
    const { userStatus, navigation, token, buildingsDorms } = this.props;
    const {styles, searchedText} = this.state;
    const data = buildingsDorms.filter(item => item.name.search(searchedText) > -1);
    return (
      <Container style={styles.container}>
        <Item style={styles.searchBar}>
          <Icon name="ios-search" style={styles.searchIcon}/>
          <Input
            style={styles.searchInput}
            placeholder="Поиск по подразделениям"
            value={this.state.searchedText}
            onChangeText={text => this.setState({searchedText: text})}
          />
        </Item>
        <Content>
          {!buildingsDorms && <Spinner color="blue"/>}
          {buildingsDorms && data.length > 0 ? <List
            style={styles.listStyle}
            dataArray={data}
            renderRow={item => (
              <ListItem
                key={item.id}
                button
                onPress={() => navigation.navigate(item.route ? item.route : '')}
                style={styles.listItemStyle}
              >
                <View style={styles.viewStyle}>
                  <CustomIcon
                    style={{
                      width: 32,
                      height: 32,
                      marginLeft: 15,
                      marginRight: 15,
                      fontSize: 30,
                      color: '#3587fa',
                    }}
                    name={'hostel'}
                  />
                  <View style={styles.columnStyle}>
                    <Text style={styles.titleStyle}>{item.name}</Text>
                    <Text style={styles.textStyle}>{'Учебный'}</Text>
                  </View>
                </View>
                <Icon type="Ionicons" name="ios-arrow-round-forward" style={styles.iconStyle} />
              </ListItem>
            )}
          /> : <View style={[styles.columnStyle, styles.columnStyleRow]}>
            <Text style={styles.textStyle}>{'Ничего не найдено'}</Text>
          </View>}
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
    ...state.departmentReducer,
  };
};

export const BuildingDormsScreen = connect(
  mapStateToProps,
  {...actions},
)(InnerComponent);
