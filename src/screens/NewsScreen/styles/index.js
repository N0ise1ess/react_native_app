import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#CED8DA'
  },
  customSlide: {
    width,
    flex: 0,
    padding: 0,
  },
  sliderImage: {
    resizeMode: 'cover',
    width,
    height: height / 5,
  },
  buttonSelected: {
    color: 'red',
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    bottom: 3,
  },
  tabStyle: {
    width: width / 3, 
    backgroundColor: '#163D7D',
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderWidth: 1,
    borderColor: '#fff',
  },
  activeTabStyle: {
    width: width / 3, 
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderWidth: 1,
    borderColor: '#fff', 
    backgroundColor: '#0E63EE'
  },
  tabRight: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  tabLeft: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  tabTitleStyle: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  tabSectionStyle: {
    paddingTop: 10,
    backgroundColor: '#CED8DA',
  },
  sliderContainer: {
    width: "100%",
    position: "absolute",
    height: height/5,
    elevation: 0,
    flex: 1,
    zIndex: 1,
  },
})
