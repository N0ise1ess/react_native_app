import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Content, List, Text } from 'native-base';
import { View } from 'react-native';
import { CustomIcon } from '../../../shared';

import { styles } from './styles';

class InnerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  _updateSections = (activeSections) => {
    this.setState({
      cards: activeSections,
    });
  };

  _renderItem = (item) => {
    const { styles } = this.state;
    const isFailed = item.rate === 'failed';
    const isCredit = item.type === 'Зачет';
    return (
      <View style={styles.listStyle}>
        <View style={[styles.headerSection]}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.text}>
            {item.type}: {item.teacherName}
          </Text>
        </View>
        <View style={styles.endSection}>
          <CustomIcon name={!isFailed ? 'success' : 'error'} style={[styles.iconStyle, !isFailed && styles.redColor]} />
          <Text style={[styles.rateTextStyle, !isFailed && styles.redColor]}>
            {isFailed ? 'НЕУД.' : isCredit ? 'ЗАЧЕТ' : 'ОТЛИЧНО'}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const { styles } = this.state;
    return (
      <Content style={styles.container}>
        <List dataArray={this.props.data} renderRow={this._renderItem} />
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.settings,
  };
};

export const Result = connect(mapStateToProps)(InnerComponent);
