import { StyleSheet } from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
  },
  listStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    fontWeight: '200',
    marginTop: 10,
    marginLeft: 0,
    marginRight: 0
  },
  detailsListItem: {
    padding: 10,
    marginTop: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_14, fontSize),
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  iconStyle: {
    color: '#58739d',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_18, fontSize),
    paddingRight: 10,
    alignSelf: "center"
  },
  text: {
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_12, fontSize),
    fontWeight: '300',
    marginTop: 7,
  },
  detailsText: {
    fontFamily: 'MyriadPro-Light',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_11, fontSize),
    fontWeight: '200',
    color: '#949394'
  },
  endSection: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 30,
    marginLeft: 20
  },
  hoursSection: {
    marginLeft: 0,
    marginRight: 30
  },
  headerSection: {
    flex: 4,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: '#CED8DA',
  },
  listHeader: {
    backgroundColor: '#CED8DA',
    marginTop: 10,
    marginBottom: 5,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  listHeaderText: {
    color: '#363a3a',
    fontSize: getSizeFonts(settingsFonts.FONT_SIZE_11, fontSize),
    paddingRight: 10,
  },
  headerHours: {
    marginRight: 10
  },
  emptyHours: {
    marginRight: 0,
    marginLeft: 25
  },
  summaryHours: {
    flex: 2,
    paddingLeft: 10,
  },
  sumItem: {
    fontFamily: 'MyriadPro-Light',
    backgroundColor: '#ED3944',
    color: '#fff'
  },
  sumItemText: {
    fontFamily: 'MyriadPro-Light',
    fontWeight: 'bold',
    color: '#fff',
  }
});
