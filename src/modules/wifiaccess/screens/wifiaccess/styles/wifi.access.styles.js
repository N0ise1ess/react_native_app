import {Dimensions, StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA',
    flex: 1,
    alignItems: 'center'
  },
  content : {
    marginTop: height * 0.05,
    width: width * 0.7,
    marginRight: 55
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
    fontSize: 22,
    color: 'grey'
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#ff5064',
    height: height * 0.06,
    width: width * 0.7,
  },
  dummy: {
    // font size of stepText + static margin of dataText
    marginLeft: 22 + 5
  },
  picker: {
    width: width * 0.7,
    backgroundColor:'white',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pickerIcon: {
    height: 50,
    backgroundColor: 'white',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  }
});
