import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Content, List, Text } from 'native-base';
import { View } from 'react-native';
import { CustomIcon } from '../../../shared/components';

import { styles } from './styles';

const dataList = [
  {
    name: 'Иностранный язык',
    type: 'Экзамен',
    teacherName: 'Чидова И.И.',
    rate: 'good'
  },
  {
    name: 'Конструирование летательных аппаратов и двигателей',
    type: 'Экзамен',
    teacherName: 'Чидова И.И.',
    rate: 'failed'
  },
  {
    name: 'Разработка программного обеспечения',
    type: 'Зачет',
    teacherName: 'Любин Ф.И.',
    rate: 'good'
  }
]

class InnerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
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

  _renderItem = (item) => {
    const { styles } = this.state;
    const isFailed = item.rate === 'failed';
    return <View style={styles.listStyle}>
      <View style={[styles.headerSection]}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>{item.type}: {item.teacherName}</Text>
      </View>
      <View style={styles.endSection}>
        <CustomIcon name={!isFailed ? 'ok' : 'error'} style={[styles.iconStyle, !isFailed && styles.redColor]} />
        <Text style={[styles.rateTextStyle, !isFailed && styles.redColor]}>{isFailed ? 'НЕУД.' : 'ОТЛИЧНО'}</Text>
      </View>
  </View>;
  }

  render() {
    const { styles } = this.state;
    return (<Content style={styles.container}>
      <List
        dataArray={dataList}
        renderRow={this._renderItem} />
    </Content>);
    }
}

const mapStateToProps = state => {
  return {
    ...state.settings,
  };
};

export const Result = connect(mapStateToProps)(InnerComponent);