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
    marginTop: height * 0.05,
    maxWidth: width * 0.8
  },
  dataSection : {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  dataText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'grey'
  },
  stepText: {
    fontSize: 18,
    color: 'grey'
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#ff3920',
    height: height * 0.07,
    maxWidth: width * 0.6,
    marginLeft: 10
  },
});
