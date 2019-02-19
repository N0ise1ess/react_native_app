import {Dimensions, StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
    alignItems: 'center'
  },
  numberStep: {
    marginLeft: 20,
    marginRight: 10,
  },
  section : {
    flex:1,
    marginTop: height * 0.05
  },
  dataSection : {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  dataText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'grey'
  },
  stepText: {
    fontSize: 18,
    color: 'grey'
  }
});
