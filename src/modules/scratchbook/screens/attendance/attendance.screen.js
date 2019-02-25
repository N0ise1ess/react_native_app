import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Content, List, Text } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import { Hours } from '../../components/hours';
import { CustomIcon } from '../../../shared/components';

import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";

import { styles } from './styles';

const general =   {
    title: 'Всего',
    attendance: {
      skipped: 14,
      held: 23
    },
};

class InnerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.data.map(card => { return {...card, isInfoOpen: false}; })
    };
  }

  onInfoToggle = (index, isCollapsed) => {
    let cards = [...this.state.cards];
    cards[index].isInfoOpen = isCollapsed;
    this.setState({
      cards
    })
  };

  _isInfoOpen = (index) => {
    return this.state.cards.includes(index);
  }

  _renderHeader = (item, index) => {
    return <View style={styles.listStyle}>
        <View style={[styles.header_section]}>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>{item.name}</Text>
        </View>
        <View style={{flexDirection: 'row', width: 110}}>
          <View style={{width: 80, marginRight: 20}}>
           <Hours skipped={item.hoursMissed} held={item.hours} />
          </View>
          <CustomIcon name={this._isInfoOpen(index) ? 'arrow_up' : 'arrow_down'}
            style={[styles.iconStyle, {marginRight: 20}]} />
        </View>
      </View>;
  };

  _renderContent = (list) => {
    return <List
      dataArray={list}
      renderRow={item => (
        <View style={[styles.listStyle, styles.detailsListItem]}>
          <View style={[styles.header_section]}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.detailsText}>{item.teacherName}</Text>
          </View>
          <View style={{width: 80, marginRight: 20}}>
            <Hours skipped={item.hoursMissed} held={item.hours} />
          </View>
        </View>
      )} />;
  };

  render() {
    const { data } = this.props;

    return (
      <Content style={styles.content}>
        <View style={styles.list_header}>
          <Text style={styles.list_header_text}>ПРОПУЩЕНО</Text>
          <Text style={styles.list_header_text}>ПРОВЕДЕНО</Text>
        </View>
        <List
          dataArray={data}
          renderRow={(item, sectionID, index) => (
            <View>
            <Collapse 
	          isCollapsed={this.state.cards[index].isInfoOpen} 
	          onToggle={(isCollapsed)=> this.onInfoToggle(index, isCollapsed)}>
              <CollapseHeader>
                {this._renderHeader(item, index)}
              </CollapseHeader>
              <CollapseBody>
                {this._renderContent(item.info)}
              </CollapseBody>
            </Collapse>
            </View>
          )}
        />
        <View style={[styles.listStyle, styles.sum_item]}>
          <View style={styles.header_section}>
            <Text style={[ styles.sum_item_text ]}>
              {general.title}
            </Text>
          </View>
          <View style={{width: 110}}>
            <Hours isSummary={true} skipped={general.attendance.skipped} held={general.attendance.held} />
          </View>
        </View>
    </Content>);
    }
}

export const Attendance = connect()(InnerComponent);