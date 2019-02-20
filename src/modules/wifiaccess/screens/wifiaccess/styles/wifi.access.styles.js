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
    paddingTop: 7,
    paddingBottom: 7,
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
  activeButtonStyle: {
    alignSelf: 'center',
    backgroundColor: '#ff5064',
    height: height * 0.06,
    width: width * 0.7,
  },
  inactiveButtonStyle: {
    alignSelf: 'center',
    backgroundColor: '#d23f50',
    height: height * 0.06,
    width: width * 0.7,
    opacity: 0.7
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
    flex: 0.1,
    marginLeft: 10,
    fontSize: 17
  },
  pickerShadow:{
    flex : 0.9,
    backgroundColor:'white',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 0
  },
  card : {
    width: width * 0.7,
    flexDirection:'column',
    justifyContent: 'space-around'
  },
  cardPassText: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-around',
    paddingLeft: 10,
    backgroundColor:'white',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  copyPassBtn: {
    flex: 1,
    backgroundColor: '#ff5064',
    height: height * 0.06,
    marginTop: 10
  }
});
