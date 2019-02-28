import React from 'react';
import { Text, View } from 'native-base';

import { styles } from './styles';

export const Hours = props => {
  return (
    <View style={styles.hours_section}>
      {props.skipped ? <View style={styles.hours}>
        <Text style={[styles.hours_number, styles.hours_missed, props.isSummary && styles.sum_item_text ]}>{props.skipped}</Text>
        <Text style={[ styles.hours_size, styles.hours_missed, props.isSummary && styles.sum_item_text ]}>ч</Text>
      </View> : <Text style={[styles.hours, props.isSummary && styles.sum_item_text ]}>-</Text>
      }
      {props.held ? <View style={styles.hours}>
        <Text style={[styles.hours_number, props.isSummary && styles.sum_item_text]}>{props.held}</Text>
        <Text style={[styles.hours_size, props.isSummary && styles.sum_item_text]}>ч</Text>
      </View> : <Text style={[styles.hours, props.isSummary && styles.sum_item_text]}>-</Text>
      }
  </View>
  );
};
