import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Content, List, Text } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import { Hours } from '../../components/hours';
import { CustomIcon } from '../../../shared/components';

import Accordion from 'react-native-collapsible/Accordion';

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
      styles: styles(props.fontSize),
      cards: []
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  _updateSections = (activeSections) => {
    this.setState({
      cards: activeSections
    });
  }

  _renderHeader = (section, index, isActive) => {
    const { styles, cards } = this.state;
    return <View style={styles.listStyle}>
    <View style={[styles.header_section]}>
      <Text style={{fontWeight: 'bold', fontSize: 14}}>{section.name}</Text>
    </View>
    <View style={{flexDirection: 'row', width: 90, marginRight: 20}}>
      <View style={{marginRight: 15}}>
       <Hours skipped={section.hoursMissed} held={section.hours} />
      </View>
      <CustomIcon name={isActive ? 'arrow_up' : 'arrow_down'}
        style={styles.iconStyle} />
    </View>
  </View>;
  }

  _renderContent = (section) => {
    const { styles } = this.state;
    return <List
      dataArray={section.info}
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
    const { styles, cards } = this.state;
    return (
      <Content style={styles.content}>
        <View style={styles.list_header}>
          <Text style={styles.list_header_text}>ПРОПУЩЕНО</Text>
          <Text style={styles.list_header_text}>ПРОВЕДЕНО</Text>
        </View>
        <Accordion
          underlayColor="transparent"
          activeSections={cards}
          sections={this.props.data}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
        <View style={[styles.listStyle, styles.sum_item]}>
          <View style={styles.header_section}>
            <Text style={[ styles.sum_item_text ]}>
              {general.title}
            </Text>
          </View>
          <View style={{width: 120}}>
            <Hours isSummary={true} skipped={general.attendance.skipped} held={general.attendance.held} />
          </View>
        </View>
    </Content>);
    }
}

const mapStateToProps = state => {
  return {
    ...state.settings,
  };
};

export const Attendance = connect(mapStateToProps)(InnerComponent);