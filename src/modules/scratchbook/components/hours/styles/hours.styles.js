import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  hours_missed: {
    color: '#ff003c',
  },
  hours_section: {
    flexDirection: 'row',
    marginRight: 10,
    width: 50,
  },
  hours: {
    fontSize: 20,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hours_number: {
    fontFamily: 'MyriadPro-Light',
    fontSize: 25,
  },
  hours_size: {
    fontFamily: 'MyriadPro-Light',
    fontSize: 14,
  },
  sum_item_text: {
    fontFamily: 'MyriadPro-Light',
    color: '#fff',
  }
});
