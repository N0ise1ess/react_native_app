import {Dimensions, StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  sectionStyle: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,
  },
  photoStyle: {
    width: width * 0.35,
    minHeight: height * 0.24,
    resizeMode: 'contain'
  },
  btnImageStyle: {
    borderRadius: width * 0.1,
    marginRight: 10,
    height: width * 0.1,
    width: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C68FF'
  },
  imageStyle: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    tintColor: 'white'
  },
  imgTeacher: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#4099F4',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  nameStyle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#B6B6B6'
  },
  label: {
    fontSize: 12,
    color: "#979797"
  },
  textStyle: {
    fontSize: 14,
    marginTop: 5,
    color: "#979797"
  },
  dataStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4099F4',
  },
  dataSection: {
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 14,
    marginTop: 5,
    marginRight: 5,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
  },
  info: {
    borderColor: "#979797",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 50,
  },
  buttonStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 5
  },
  editStyle: {
    backgroundColor: '#ED3944',
  },
  cancelStyle: {
    backgroundColor: '#1166F6',
  },
  iconStyle: {
    fontSize: 18,
    color: '#fff',
  },
  departmentLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#B6B6B6',
    marginTop: 0
  }
})
