import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Content, List, Text } from 'native-base';
import { View } from 'react-native';
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
      activeSections: []
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  _updateSections = (activeSections) => {
    this.setState({
      activeSections
    });
  }

  _renderHeader = (section, index, isActive) => {
    const { styles } = this.state;
    const areHoursEmpty = !section.hoursMissed && !section.hours;
    return <View style={styles.listStyle}>
      <View style={[styles.headerSection]}>
        <Text style={styles.title}>{section.name}</Text>
      </View>
      <View style={[styles.endSection]}>
        <View style={[styles.headerHours, areHoursEmpty && styles.emptyHours]}>
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
          <View style={[styles.headerSection]}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.detailsText}>{item.teacherName}</Text>
          </View>
          <View style={[styles.endSection, styles.hoursSection]}>
           <Hours skipped={item.hoursMissed} held={item.hours} />
          </View>
        </View>
      )} />;
  };

  render() {
    const { styles, activeSections } = this.state;
    return (
      <Content style={styles.content}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderText}>ПРОПУЩЕНО</Text>
          <Text style={styles.listHeaderText}>ПРОВЕДЕНО</Text>
        </View>
        <Accordion
          underlayColor="transparent"
          activeSections={activeSections}
          sections={this.props.data}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
        <View style={[styles.listStyle, styles.sumItem]}>
          <View style={styles.headerSection}>
            <Text style={[ styles.sumItemText ]}>
              {general.title}
            </Text>
          </View>
          <View style={styles.summaryHours}>
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