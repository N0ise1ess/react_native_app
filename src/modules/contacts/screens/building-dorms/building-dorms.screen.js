import * as NB from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import {Navigation} from 'react-native-navigation';
import { connect } from 'react-redux';
import { FooterSection, CustomIcon } from '../../../shared/components';
import { styles } from './styles';
import * as actions from "../../../../actions/contactsAction";

class InnerComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Корпуса и общежития',
        },
      }
    };
  }

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
    const { userStatus, token, buildingsDorms } = this.props;
    const {styles, searchedText} = this.state;
    const data = buildingsDorms && buildingsDorms.filter(item => item.name.search(searchedText) > -1);
    return (
      <NB.Container style={styles.container}>
        <NB.Item style={styles.searchBar}>
          <NB.Icon name="ios-search" style={styles.searchIcon}/>
          <NB.Input
            style={styles.searchInput}
            placeholder="Поиск по подразделениям"
            value={this.state.searchedText}
            onChangeText={text => this.setState({searchedText: text})}
          />
        </NB.Item>
        <NB.Content>
          {!buildingsDorms && <NB.Spinner color="blue"/>}
          {buildingsDorms && data.length > 0 ? <NB.List
            style={styles.listStyle}
            dataArray={data}
            renderRow={item => (
              <NB.ListItem
                key={item.id}
                button
                onPress={() => Navigation.push(this.props.componentId, {
                  component: {
                    name: "BuildingDormsCard",
                    passProps: {
                      dataNavigation: {
                        item,
                      }
                    }
                  },
                })}
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
                      color: '#0C68FF',
                    }}
                    name={'hostel'}
                  />
                  <View style={styles.columnStyle}>
                    <NB.Text style={styles.titleStyle}>{item.name}</NB.Text>
                    <NB.Text style={styles.textStyle}>{'Учебный'}</NB.Text>
                  </View>
                  <NB.Icon type="Ionicons" name="ios-arrow-round-forward" style={styles.iconStyle} />
                </View>
              </NB.ListItem>
            )}
          /> : <View style={[styles.columnStyle, styles.columnStyleRow]}>
            <NB.Text style={styles.textStyle}>{'Ничего не найдено'}</NB.Text>
          </View>}
        </NB.Content>
        <FooterSection {...this.props} />
      </NB.Container>
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
