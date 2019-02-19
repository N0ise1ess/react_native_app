import {Dimensions, StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
    alignItems: 'center'
  },
  section : {
    marginTop: height * 0.05,
    maxWidth: width * 0.8
  },
  dataSection : {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  dataText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'grey',
    marginLeft: 10,
    marginTop: 5
  },
  stepText: {
    fontSize: width * 0.07,
    color: 'grey'
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#ff5064',
    height: height * 0.06,
    maxWidth: width * 0.6
  },
  dummy: {
    // font size of stepText + static margin of dataText
    marginLeft: width * 0.07 + 5
  }
});
